const gulp = require('gulp');
const path = require('path');
const util = require('gulp-util');

// Watch source files for changes. Run compile task when changes detected.
gulp.task('watch', (done) => {
  const logChanges = (event) => {
    util.log(
      util.colors.yellow(`${path.basename(event.path)}`) +
      util.colors.green(` was ${event.type}, recompiling...`)
    );
  };

  gulp.watch(global.paths.srcFiles, ['compile']).on('change', logChanges);
  gulp.watch(global.paths.compiledFiles, ['connect-reloadCompiledFiles']).on('change', logChanges);
  done();
});