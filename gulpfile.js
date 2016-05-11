var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
var exec = require("child_process").exec;
var replace = require('gulp-replace-task');
var git = require('git-rev-sync');
var prompt = require('gulp-prompt');
var yaml = require('js-yaml');
var runSequence = require('run-sequence');
var url = require('url');
var branch = 'gh-pages';

var newUrl = '';
var newBaseUrl = '';

var URL_MSG = "Your Domain: \n\nThe name of your domain."+
              "\ne.g.:\nhttps://username.github.io or https://myexchange.com \n\ndefault: ";

var BASEURL_MSG = "Your Base URL: \n\nYou can choose a base url followed by your domain:"+
                  "\ne.g.:\n/mybaseurl \n\nOr Just: `/`\n\nIt will result as"+
                  " https://myexchange.com/mybaseurl \n\ndefault: ";

var BRANCH_MSG = "Github Branch: \n\n"+
                 "If your using your repository as `organization.github.io` you should use the `master` branch,\n"+
                 "otherwise, `gh-pages` branch."+
                 "\n\nSee more at: https://help.github.com/articles/user-organization-and-project-pages/"+
                 "\n\nChoose: ";


gulp.task('build', function(done){
    console.log('Building...');
    exec('jekyll build', function(err, stdout, stderr){
        if(err)
            done(err);

        console.log(stdout);
        console.log(stderr);
        done();
    });
});

gulp.task('config', function(done){
    var rev = git.short();
    var config = yaml.safeLoad(fs.readFileSync('./_config.yml'));

    if(config.baseurl === undefined)
        return done(new Error('Baseurl not defined'));

    var baseUrl = config.baseurl;

    return gulp.src('_config.yml')
    .pipe(prompt.prompt({
        type: 'input',
        name: 'url',
        message: URL_MSG,
        default: config.url
    }, function(res){
        newUrl = res.url;
        newUrl = newUrl.startsWith('http') ?
                     newUrl                :
                     'http://' + newUrl;
    }))
    .pipe(prompt.prompt({
        type: 'input',
        name: 'baseurl',
        message: BASEURL_MSG
    }, function(res){
        newBaseUrl = res.baseurl.charAt(0) === '/' || res.baseurl === ""
                   ? res.baseurl : '/' + res.baseurl;
    }))
    .pipe(prompt.prompt({
        type: 'list',
        name: 'branch',
        message: BRANCH_MSG,
        choices: ['master', 'gh-pages']
    }, function(res){
        console.log('Git Rev : '+rev);
        console.log('Branch  : '+res.branch);
        console.log('BaseUrl : '+newBaseUrl);

        branch = res.branch;
    }))
    .pipe(replace({
        usePrefix: false,
        patterns: [
            {
                match: /^deploy_version:.*$/m,
                replacement: function(){
                    return 'deploy_version: "'+rev+'"'
                }
            }, {
                match: /^url:.*$/m,
                replacement: function(){
                    return 'url: "'+newUrl+'"'
                }
            }, {
                match: /^baseurl:.*$/m,
                replacement: function(){
                    return 'baseurl: "'+newBaseUrl+'"'
                }
            }
        ]
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('deployBranch', function(done){
    console.log('Deploying...');
    return gulp.src("./_site/**/*")
    .pipe(deploy({ branch: branch }));
});

gulp.task('deploy', function(done){
    runSequence('config', 'build', 'deployBranch', function(){
        console.log('\nOpen your browser at: '+ url.resolve(newUrl, newBaseUrl));
        console.log('Done');
    })
});

gulp.task('default',[]);
