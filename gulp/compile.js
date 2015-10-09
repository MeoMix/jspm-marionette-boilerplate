const gulp = require('gulp');
const babel = require('gulp-babel');
const changed = require('gulp-changed');
const postcss = require('gulp-postcss');
const filter = require('gulp-filter');
const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');

// Create a directory, /compiled, and copy all files from /src into it.
// Transpile ES6 to ES5 while copying and apply postCSS plugins against CSS.
// Use the /compiled directory instead of /src during development
// to avoid waiting for ES6 to transpile.
gulp.task('compile', () => {
  const jsFilter = filter(['**/*.js'], { restore: true });
  // Exclude common css as it will have been inlined into modules.
  const cssFilter = filter(['**/*.css', '!**/common/css/*.css'], { restore: true });
  const htmlFilter = filter(['**/*.+(html|hbs)'], { restore: true });
  const imgFilter = filter(['**/*.+(png|jpg|gif|svg)']);
  const postCssPlugins = [
    // From postcss-import notes: This plugin should probably be used as the first plugin of your list.
    atImport,
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ];

  return gulp.src(global.paths.srcFiles)
    // Don't waste time compiling files which have not changed.
    // Don't compare using sha1. Changed thinks all files changed when saving through Visual Studio.
    .pipe(changed(global.paths.compiled))
    // Transpile ES6 files through babel and copy results to destination directory.
    .pipe(jsFilter)
    .pipe(babel({
      modules: 'system'
    }))
    .pipe(gulp.dest(global.paths.compiled))
    .pipe(jsFilter.restore)
    // Pipe css through postCSS and write result to destination.
    .pipe(cssFilter)
    .pipe(postcss(postCssPlugins))
    .pipe(gulp.dest(global.paths.compiled))
    .pipe(cssFilter.restore)
    // Copy .html and .hbs files to destination.
    .pipe(htmlFilter)
    .pipe(gulp.dest(global.paths.compiled))
    .pipe(htmlFilter.restore)
    // Copy .png, .jpg, .gif, and .svg files to destination.
    .pipe(imgFilter)
    .pipe(imagemin())
    .pipe(gulp.dest(global.paths.compiled));
});