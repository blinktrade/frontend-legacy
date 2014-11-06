[front-end-for-your-exchange.com](https://demo.blinktrade.com)

Blinktrade demo exchange

## Technologies we are using
- [jekyll](http://jekyllrb.com/), a static generator in Ruby, to create the static html pages
- [google closure library](https://developers.google.com/closure/library/) for the javascript application 
- [google closure templates](https://developers.google.com/closure/templates/) for some of the javascript ui views

## How to create your own front end
1. Fork the repo 
2. Rename it to `yourgithubusername.github.io`
3. clone your new repo `git clone https://github.com/yourgithubusername/yourgithubusername.github.io.git`
4. Edit the url tag in file [_config.yml](https://github.com/blinktrade/frontend/blob/master/_config.yml) to `//yourgithubusername.github.io`
5. Commit your changes `git commit -am 'My changes'`
6. Push to the branch: `git push origin master`
7. Wait approximately 20 minutes for githubpages 
8. Open your browser and point it to [http://yourgithubusername.github.io](http://yourgithubusername.github.io)



## How to edit the static content. 

1 - Install [Git](http://git-scm.com/downloads) and [Ruby](https://www.ruby-lang.org/pt/downloads/), in case you don't have them yet.

2 - Once installed these dependecies, open up the terminal and install [Jekyll](http://jekyllrb.com) with the following commands.

```sh
$ gem install jekyll
```

3 - Navigate to the project folder
```sh
$ cd yourgithubusername.github.io
```

4 - And finally run:
```sh
$ jekyll server --watch
```

You'll have access to the website at `localhost:4000` :D

_More information about Jekyll's file structure [here](https://github.com/mojombo/jekyll/wiki/Usage)._

## Browser Support

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png "Internet Explorer") | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png "Google Chrome") | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png "Firefox") | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png "Opera") | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png "Safari")
--- | --- | --- | --- | --- |
IE 11+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## How build the javascript application
```sh
$ cd jsdev
$ sh build_release.sh  en_US default
```

## File Structure

The file structure for the project is organized in the following way:

```
.
|-- _includes
|-- _layouts
|-- _posts
|-- _config.yml
|-- jsdev
|-- assets
|-- index.html
```

### [_includes](https://github.com/blinktrade/frontend/tree/master/_includes)

They're blocks of code used to generate the main page of the site (index.html).

### [_layouts](https://github.com/blinktrade/frontend/tree/master/_layouts)

Here you'll find the default template of the application.

### [_posts](https://github.com/blinktrade/frontend/tree/master/_posts)

Here you'll find a list of files for each post.

### [_config.yml](https://github.com/blinktrade/frontend/tree/master/_config.yml)

It stores most of the settings of the application.

### [index.html](https://github.com/blinktrade/frontend/tree/master/index.html)

The static html page 

### [jsdev](https://github.com/blinktrade/frontend/tree/master/jsdev)

The google closure javascript application

### [assets](https://github.com/blinktrade/frontend/tree/master/assets)

Images, CSS, Compiled Javascripts, Fonts and all static content.


## License
[GNU GENERAL PUBLIC LICENSE](https://github.com/blinktrade/frontend/blob/master/LICENSE) © Blinktrade, Inc.
