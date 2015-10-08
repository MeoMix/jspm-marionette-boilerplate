﻿const gulp = require('gulp');
const connect = require('gulp-connect');
const cached = require('gulp-cached');
const open = require('gulp-open');
const path = require('path');

// Create a local server for hosting the project.
// Responds to livereload commands so file changes don't require refreshing.
gulp.task('connect', (done) => {
  const host = 'localhost';
  const port = 8080;

  connect.server({
    host,
    port,
    // Needs to be path.resolve and not just './'
    // https://github.com/AveVlad/gulp-connect/issues/54
    root: path.resolve('./'),
    livereload: true
  });

  // Open default browser to the compiled directory.
  // Presumably useful since a connect server was just spun up for development.
  gulp.src('')
    .pipe(open({
      uri: `http://${host}:${port}/compiled/`
    }));

  done();
});

// Inform the server it should reload certain files.
gulp.task('connect-reloadCompiledFiles', () => {
  gulp.src(global.paths.compiledFiles)
    // Don't reload all files because that would be slow.
    // Instead, keep a cache of which files have changed. Only reload changed files.
    .pipe(cached('connect-reloadCompiledFiles'))
    .pipe(connect.reload());
});