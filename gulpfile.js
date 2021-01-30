'use strict';

const gulp = require("gulp");
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const cleanCSS = require("gulp-clean-css");
const concat = require('gulp-concat');

gulp.task('connect', () => {
    connect.server({
        root: './',
        port: 8080
    });
});

gulp.task('scssconcat', () => {
    return gulp.src('assets/scss/**/*.scss').pipe(sass()).pipe(gulp.dest('assets/src/css'));
});
gulp.task("cssmin", () => {
    return gulp.src("assets/src/css/*.css").pipe(cleanCSS()).pipe(gulp.dest("assets/dist/css"));
});

gulp.task('jsconcat', () => {
    return gulp.src('assets/src/js/**/*.js').pipe(concat('main-min.js')).pipe(uglify()).pipe(gulp.dest('assets/src/js'));
});

gulp.task("watch", () => {

    gulp.watch("assets/src/css/main.css", gulp.series("cssmin"));
    gulp.watch("assets/src/js/**/*.js", gulp.series("jsconcat"));
    gulp.watch("assets/scss/**/*.scss", gulp.series("scssconcat"));

});



gulp.task('default', gulp.series('watch'));