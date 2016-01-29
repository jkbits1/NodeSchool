/**
 * Created by jk on 03/11/15.
 */

var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');
var del = require('del');

var filename = "**/es6/hapiCookies-es6.js";

//gulp.task('default', ['clean-dist'], function () {
gulp.task('default', function () {
  return gulp.src(filename)
    //.pipe(watch(filename))
    .pipe(babel({
      //presets: ['babel-preset-es2015']
    }))
    .pipe(gulp.dest('dist'));
});

gulp.watch(filename, function (event) {
  console.log(event.type);
  gulp.start('clean-dist');
  gulp.start('default');
});

gulp.task('clean-dist', function () {
  return del(['dist/dist']);
});

//gulp.task('stream', function () {
//  return gulp.src(filename)
//    .pipe(watch(filename))
//    .pipe(gulp.dest('dist'));
//});
//
//gulp.task('callback', function (cb) {
//  watch(filename, function () {
//    gulp.src(filename)
//      .pipe(watch(filename))
//      .on('end', cb);
//  });
//});