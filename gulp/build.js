const gulp = require('gulp');
const replace = require('gulp-replace');
const minifyHtml = require('gulp-minify-html');
const Builder = require('systemjs-builder');
const util = require('gulp-util');
const packageConfig = require('../package.json');

//var jspm = require('jspm'),
//  fs = require('fs'),
//  path = require('path'),
//  template = fs.readFileSync('src/index.html', "utf8"),
//  useref = require('node-useref'),
//  paths = (process.argv[2] || "/").split(" "),
//  mkdirp = require('mkdirp'),
//  Promise = require('promise');

//gulp.task('build-css', (done) => {

//  jspm.import('./css').then((css, a, b, c) => {
//    console.log('css', css.bundle);
//    return jspm.import('./src/application/application').then((yay) => {

//      Promise.all(paths.map((relPath) => {

//        return yay.__generate(relPath)
//          .then((markup) => {
//            var replaced = useref(template, {
//              css: () => {
//                return '<link href="index.css" rel="stylesheet"/>';
//              },
//              markup: () => {
//                return markup;
//              },
//              jspm: () => {
//                return "<script src='main.js'></script>";
//              }
//            });
//            console.log("Got " + relPath);
//            var filename = "dist" + ((relPath === '/') ? '/index' : relPath) + ".html",
//              dirname = path.dirname(filename);
//            mkdirp.sync(dirname);
//            fs.writeFileSync(filename, replaced[0]);
//            console.log(filename);
//          }, function (err) {
//            console.log("UMMM");
//            console.log(err);
//          });
//      })).then(() => {
//        console.log("Done all");
//        fs.writeFileSync('./dist/index.css', css.default._cache._source.join("\n"));
//      }, (err) => {
//        console.log("I GUESS WE GOT FUCKED");
//        console.log(Object.keys(err));
//        throw err;
//      });
//    }, (err) => {
//      console.log('error', err);
//    });
//  });
//});


gulp.task('build', ['build-srcJs', 'build-srcHtml']);

gulp.task('build-srcHtml', () => {
  return gulp.src(global.paths.srcHtml)
    // Replace all script tags on page with bundled script tag.
    .pipe(replace(/(<script[\s\S]*?<\/script>)[\s\S]*(?=[\s\S]*<\/script>)/, '<script src=\'main.js\'>'))
    .pipe(minifyHtml())
    .pipe(gulp.dest(global.paths.dist));
});

// Use jspm's builder to create a self-executing bundle of files.
// Written to a destination directory and ready for production use.
gulp.task('build-srcJs', (done) => {
  const builder = new Builder('.', packageConfig.jspm.configFile || 'config.js');
  const options = {
    runtime: false,
    sourceMaps: false,
    minify: false
  };

  builder.buildStatic(`${global.paths.src}/main.js`, `${global.paths.dist}/main.js`, options)
    .then(() => {
      util.log(util.colors.green(`Built successfully to ${global.paths.dist}`));
    })
    .catch((errorMessage) => {
      util.log(util.colors.red(errorMessage));
    })
    .finally(done);
});