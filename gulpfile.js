var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var order = require("gulp-order");

gulp.task('sass', function () {
  gulp.src('./source/**/*.scss')
    .pipe(order([
      "source/stylesheets/reset.scss",
      "source/javascript/**/*.scss"
    ]))
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('demo.css'))
    .pipe(gulp.dest('./build'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./source/**/*.scss', ['sass']);
});
