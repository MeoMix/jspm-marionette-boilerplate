<h1 align="center">JSPM Marionette Boilerplate</h1>
<p align="center">JSPM + Backbone/Marionette + CSS Modules</p>
<p align="center">
  <a title='Build Status' href="https://travis-ci.org/MeoMix/jspm-marionette-boilerplate">
    <img src='https://travis-ci.org/MeoMix/jspm-marionette-boilerplate.svg?branch=development' />
  </a>
  <a title='Join the chat at https://gitter.im/MeoMix/jspm-marionette-boilerplate' href='https://gitter.im/MeoMix/jspm-marionette-boilerplate?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge'>
    <img src='https://badges.gitter.im/MeoMix/jspm-marionette-boilerplate.svg' />
  </a>
</p>

<h2>Overview</h2>

This is a bare bones, example application which highlights the usage of Marionette alongside JSPM. A full list of core libraries can be found below.

<h2>Development</h2>

Start by cloning the development branch. All PRs should be submitted to the development branch.

<h3>Dependencies</h3>
You will need to have [Node](https://nodejs.org/), [Gulp](http://gulpjs.com/), [jspm](http://jspm.io/), and [Git](https://git-scm.com/) installed on your system.
After installing Node, navigate using a terminal to the directory in which you cloned this repository. Then, perform the following command to install dependencies:

```
npm install -g gulp
npm install -g jspm
npm install
```

You may encounter an error when attempting to install [node-gyp](https://github.com/nodejs/node-gyp) which is a dependency of Karma.
Details on how to resolve dependency issues for `node-gyp` can be found [on StackOverflow](http://stackoverflow.com/a/21366601/633438)

<h3>Compiling code</h3>

Once dependencies have been successfully installed, simply run `gulp` from the root directory. This will compile all source files into an intermediary directory, `/compiled`,
and open your browser to that directory.

Builds can be created via `gulp build`.

<h3>Testing</h3>
Tests will automatically run on TravisCI after every commit to GitHub. Build status is reflected at the top of this ReadMe.
You may run tests locally through Karma via the command line: `gulp test`

<h2>Libraries</h2>

<h3>Core</h3>
* [jQuery](http://jquery.com/)
* [Backbone](http://backbonejs.org/)
* [Marionette](http://marionettejs.com)
* [lodash](http://lodash.com/)
* [jspm](http://jspm.io//)
* [SystemJS](https://github.com/systemjs/systemjs)
* [Babel](https://babeljs.io/)
* [Gulp](http://gulpjs.com/)
* [Handlebars](http://handlebarsjs.com/)
* [CSSModules](http://glenmaddern.com/articles/css-modules)

<h3>Testing</h3>
* [Karma](http://karma-runner.github.io/)
* [Mocha](http://mochajs.org/)
* [Chai](http://chaijs.com/)
* [Sinon](http://sinonjs.org/)

<h2>Authors</h2>
* [MeoMix](https://github.com/MeoMix)
