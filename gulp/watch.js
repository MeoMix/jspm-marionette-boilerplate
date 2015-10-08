const gulp = require('gulp');
const path = require('path');
const util = require('gulp-util');
const clean = require('gulp-clean');
// https://github.com/gulpjs/gulp/blob/master/docs/API.md#eventtype
const WatchEventType = {
  Added: 'added',
  Changed: 'changed',
  Deleted: 'deleted'
};

// Watch source files for changes. Run compile task when changes detected.
gulp.task('watch', (done) => {
  const logChanges = (event) => {
    util.log(
      util.colors.yellow(`${path.basename(event.path)}`) +
      util.colors.green(` was ${event.type}, recompiling...`)
    );
  };

  gulp.watch(global.paths.srcFiles, ['compile']).on('change', logChanges);
  gulp.watch(global.paths.srcFiles, (event) => {
    if (event.type === WatchEventType.Deleted) {
      gulp.src(event.path.replace('src/', 'compiled/'))
        .pipe(clean());
    }
  });
  gulp.watch(global.paths.compiledFiles, ['connect-reloadCompiledFiles']).on('change', logChanges);
  done();
});