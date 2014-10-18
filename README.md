[blinktrade.com](http://blinktrade.com)

Blinktrade demo exchange

## How it works?

We use [jekyll](http://jekyllrb.com/), a static generator in Ruby, to create this website.

## First Steps

1 - Install [Git](http://git-scm.com/downloads) and [Ruby](https://www.ruby-lang.org/pt/downloads/), in case you don't have them yet.

2 - Once installed these dependecies, open up the terminal and install [Jekyll](http://jekyllrb.com) with the following commands.

```sh
$ gem install jekyll
```

3 - Now clone the project
```sh
$ git clone git@github.com:blinktrade/blinktrade.github.io.git
```

4 - Navigate to the project folder
```sh
$ cd blinktrade.github.io
```

5 - And finally run:
```sh
$ jekyll server --watch
```

You'll have access to the website at `localhost:4000` :D

## Browser Support

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png "Internet Explorer") | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png "Google Chrome") | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png "Firefox") | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png "Opera") | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png "Safari")
--- | --- | --- | --- | --- |
IE 8+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## File Structure

The file structure for the project is organized in the following way:

```
.
|-- _includes
|-- _layouts
|-- _posts
|-- _config.yml
`-- index.html
```

### [_includes](https://github.com/blinktrade/demo/_includes)

They're blocks of code used to generate the main page of the site (index.html).

### [_layouts](https://github.com/blinktrade/demo/_layouts)

Here you'll find the default template of the application.

### [_posts](https://github.com/blinktrade/demo/_posts)

Here you'll find a list of files for each post.

### [_config.yml](https://github.com/blinktrade/demo/_config.yml)

It stores most of the settings of the application.

### [index.html](https://github.com/blinktrade/demo/index.html)

It's the file responsible for all application sections.

_More information about Jekyll's file structure [here](https://github.com/mojombo/jekyll/wiki/Usage)._

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License
[GNU GENERAL PUBLIC LICENSE](https://github.com/randsonjs/blinktrade.github.io/blob/master/LICENSE) © Blinktrade, Inc.
