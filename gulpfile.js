var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var dir = "localhost/" + __dirname.slice(16) + "/builds/master/index.php";

gulp.task('browser-sync', function() {
  browserSync.init({
    proxy:{
      target: dir,
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('images', function(){
  gulp.src('process/img/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('builds/master/_img/'));
});

gulp.task('styles', function(){
  gulp.src(['process/sass/main.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('builds/master/_css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS())
    .pipe(gulp.dest('builds/master/_css/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('javascripts', function(){
  return gulp.src('process/js/*.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('builds/master/_js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('builds/master/_js/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('default', ['browser-sync'], function(){
  gulp.watch("process/sass/**/*.scss", ['styles']);
  gulp.watch("process/js/**/*.js", ['javascripts']);
  gulp.watch("builds/master/**/*.html", ['bs-reload']);
  gulp.watch("builds/master/**/*.php", ['bs-reload']);
});
