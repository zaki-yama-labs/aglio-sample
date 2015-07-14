var gulp = require('gulp'),
    aglio = require('gulp-aglio'),
    browserSync = require('browser-sync');
    rename = require('gulp-rename');

var reload = browserSync.reload;

var TEMPLATE_FILES = ['_docs/*.md'],
    PUBLISHED_DIR = 'docs';

gulp.task('docs', function () {
  gulp.src('_docs/*.md')
    .pipe(aglio({ template: 'default' }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('docs'));
});

gulp.task('watch', function () {
  gulp.watch(TEMPLATE_FILES, ['docs', reload]);
});

gulp.task('browserSync', function() {
  browserSync({
    logConnections: true,
    logFileChanges: true,
    notify: true,
    port: 8088,
    open: false,
    server: {
      baseDir: PUBLISHED_DIR
    }
  });
});

gulp.task('default', ['docs', 'watch', 'browserSync']);
