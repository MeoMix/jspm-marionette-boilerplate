var gulp = require('gulp');
var path = require('path');
var util = require('gulp-util');
var del = require('del');
var GlobFilter = require('../globFilter.js');
// https://github.com/gulpjs/gulp/blob/master/docs/API.md#eventtype
var WatchEventType = {
  Added: 'added',
  Changed: 'changed',
  Deleted: 'deleted'
};

// Watch source files for changes. Run compile task when changes detected.
gulp.task('watch', function(done) {
  var onFileChange = function(event) {
    // Write to log that change happened.
    util.log(
      util.colors.yellow(path.basename(event.path)) +
      util.colors.green(' was ' + event.type + ', recompiling...')
    );

    // Clean-up deleted files manually by finding and removing their counterpart.
    if (event.type === WatchEventType.Deleted) {
      var compiledPath = '';

      if (event.path.indexOf(GlobFilter.Src) !== -1) {
        compiledPath = event.path.replace(GlobFilter.Src, GlobFilter.Compiled);
      } else if (event.path.indexOf(GlobFilter.Jspm) !== -1) {
        // jspm's directory structure changes when moving into compiled.
        compiledPath = event.path.replace(GlobFilter.Jspm, GlobFilter.Compiled + '\\' + GlobFilter.Jspm);
      } else {
        throw new Error('Unexpected path:' + event.path);
      }

      del(compiledPath);
    }
  };

  gulp.watch(GlobFilter.SrcFolder + GlobFilter.AllFiles, ['compile:transformSrc']).on('change', onFileChange);
  gulp.watch([
    GlobFilter.JspmFolder + GlobFilter.AllFiles,
    // It's too slow to watch jspm packages for changes. Increases watch task time by ~20s
    '!' + GlobFilter.JspmFolder + GlobFilter.JspmPackagesFolder + GlobFilter.AllFiles
  ], ['compile:copyJspmFolder']).on('change', onFileChange);
  gulp.watch([
    GlobFilter.CompiledFolder + GlobFilter.AllFiles,
    // It's too slow to watch jspm packages for changes. Increases watch task time by ~20s
    '!' + GlobFilter.CompiledFolder + GlobFilter.JspmFolder + GlobFilter.JspmPackagesFolder + GlobFilter.AllFiles
  ], ['connect:reloadCompiledFiles']);
  done();
});