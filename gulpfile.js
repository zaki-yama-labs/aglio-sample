var gulp = require('gulp'),
    aglio = require('gulp-aglio'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename'),
    rimraf = require('rimraf'),
    ejs = require('gulp-ejs');

var reload = browserSync.reload;

var TEMPLATE_FILES = ['apidocs/**/*.md'],
    LAYOUT_FILE = 'apidocs/layout.md',
    PUBLISHED_DIR = 'published';

gulp.task('combine', function(){
  return gulp.src(LAYOUT_FILE)
    .pipe(ejs({},{ ext: '.md' }))
    .pipe(rename('index.md'))
    .pipe(gulp.dest(PUBLISHED_DIR));
});

gulp.task('generate-api-docs', ['combine'], function() {
  return gulp.src(PUBLISHED_DIR + '/index.md')
    .pipe(aglio({template: 'default'}))
    .pipe(gulp.dest(PUBLISHED_DIR));
});

gulp.task('watch', function () {
  gulp.watch(TEMPLATE_FILES, ['generate-api-docs', reload]);
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

gulp.task('clean', function(cb) {
  rimraf(PUBLISHED_DIR, cb);
});

gulp.task('publish', ['clean', 'generate-api-docs']);
gulp.task('default', ['generate-api-docs', 'watch', 'browserSync']);
