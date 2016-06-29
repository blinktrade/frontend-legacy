## Blinktrade Bitcoin Exchange

## Technologies we are using
- [jekyll](http://jekyllrb.com/), a static generator in Ruby, to create the static html pages
- [google closure library](https://developers.google.com/closure/library/) for the javascript application 
- [google closure templates](https://developers.google.com/closure/templates/) for some of the javascript ui views
- [nodejs](https://nodejs.org), for deployment 
- [npm](https://www.npmjs.com/), for deployment

## Install the pre-requesites 
1 - Install [Git](http://git-scm.com/downloads), [Ruby](https://www.ruby-lang.org/pt/downloads/) anda [Java](https://java.com/download/index.jsp), in case you don't have them yet.

2 - Once installed these dependecies, open up the terminal and install [Jekyll](http://jekyllrb.com) with the following commands.

```sh
$ gem install jekyll:2.5.3
```

2 - Install jekyll multiple languages plugin
```sh
$ gem install jekyll-multiple-languages-plugin:1.2.9
```

## How to run the exchange locally 
1 - Fork the repo

2 - Rename it to `exchange` or any name you wish.  Let's use exchange for this example

3 - clone your new repo 
```sh
$ git clone https://github.com/yourgithubusername/exchange
$ cd exchange
```
4 - Create a symbolic link to some `_config.foxbit.yml` files
```sh
$ ln -s _config.demo.yml _config.yml
```
5 - And finally run:
```sh
$ jekyll server --watch
```

You'll have access to the website at `localhost:4000`

## How to run the exchange on [github pages](https://pages.github.com/)

1 - Make sure that you have `node` and `npm` installed.

2 - Install the node dependencies to deploy.
```sh
npm install
```
3 - Deploy with gulp `$ gulp deploy` and follows the prompt instructions.

4 - Open your browser and point it to [http://yourgithubusername.github.io/exchange/](http://yourgithubusername.github.io/exchange)


## How build the javascript application

Only needed in case you changed the `./jsdev` application.

#### Compile all Javascript

It will compile for all themes and languages.

```sh
./build_javascript.sh
```

#### Compile a specific theme or language
The defaults are US english (en_US) and the default theme ('default'), but can be overriden.
To build the british english version with a custom theme:

```sh
$ cd ./jsdev 
$ LANG=en_GB THEME=custom sh build_release.sh
```

## Browser Support

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png "Internet Explorer") | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png "Google Chrome") | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png "Firefox") | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png "Opera") | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png "Safari")
--- | --- | --- | --- | --- |
IE 11+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |


## File Structure

The file structure for the project is organized in the following way:

```
.
|-- _includes
|-- _layouts
|-- _posts
|-- _config.yml
|-- jsdev
  |-- bitex
  |-- closure-bootstrap
  |-- closure-library
  |-- externs
  |-- scottlogic/chart
  |-- tools
  |-- translations
  |-- uniform
  |-- build_release.sh
|-- themes
  |-- default
  |-- ander
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
