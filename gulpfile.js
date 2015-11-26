var fs = require('fs');
var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
var exec = require("child_process").exec;
var replace = require('gulp-replace-task');
var git = require('git-rev-sync');
var prompt = require('gulp-prompt');
var yaml = require('js-yaml');
var branch = 'gh-pages';

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
    var newBaseUrl = '';

    return gulp.src('_config.yml')
    .pipe(prompt.prompt({
        type: 'input',
        name: 'baseurl',
        message: 'BaseURL?',
        default: baseUrl
    }, function(res){
        newBaseUrl = res.baseurl.charAt(0) === '/' ?
                     res.baseurl : '/' + res.baseurl;

    }))
    .pipe(prompt.prompt({
        type: 'list',
        name: 'branch',
        message: 'Git Branch?',
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
                match: /^baseurl:.*$/m,
                replacement: function(){
                    return 'baseurl: "'+newBaseUrl+'"'
                }
            }
        ]
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('deploy', ['config','build'], function(done){
    console.log('Deploying...');
    return gulp.src("./_site/**/*").pipe(deploy({ branch: branch }));
});

gulp.task('default',[]);
