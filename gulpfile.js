/*
 * gulpfile.js
 */

var gulp = require('gulp');
var riot = require('gulp-riot');
var concat = require('gulp-concat');

var target = ['./public/tags/*.jade', './public/tags/**/*.jade'];
var output = './public/scripts';

gulp.task('riot', function() {
  gulp
    .src(target)
    .pipe(riot({template:'jade'}))
    .pipe(concat('tags.js'))
    .pipe(gulp.dest(output))
    ;
});

gulp.task('watch', function(){
  gulp.watch(target, ['riot']);
});

gulp.task('default', ['watch']);
