const gulp = require("gulp"),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    cleanCSS = require("gulp-clean-css");

gulp.task('connect', function() {
    connect.server({
        root: './',
        port: 8080
    });
});

gulp.task('scss-concat', function() {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/src/css'));
});

gulp.task('js-concat', function() {
    return gulp.src('assets/src/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/src/js'));
});

gulp.task("cssmin", function() {
    return gulp.src("assets/src/css/*.css")
        .pipe(cleanCSS())
        .pipe(gulp.dest("assets/dist/css"));
});

gulp.task("default", ["cssmin", "js-concat", "scss-concat"], function() {

    gulp.watch("assets/src/css/main.css", ["cssmin"]);
    gulp.watch("assets/src/js/**/*.js", ["js-concat"]);
    gulp.watch("assets/scss/**/*.scss", ["scss-concat"]);

});



gulp.task('run', ['connect', 'scss-concat', 'js-concat', 'cssmin']);