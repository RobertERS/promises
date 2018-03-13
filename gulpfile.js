const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const pump = require('pump');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");

gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('scripts', function() {
    return gulp.src('./src/scripts/*.es6')
    .pipe(babel({ "presets": ["es2015"]}))
    .pipe(gulp.dest('./dist/scripts'))
});

gulp.task('concat', function() {
    return gulp.src('src/scripts/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('dist/scripts'))
});

gulp.task('compress', function(cb) {
    pump([
        gulp.src('dist/scripts/script.js'),
        uglify(),
        rename({suffix: '.min'}),
        gulp.dest('dist/scripts')
    ], cb);
});

gulp.task('images', function() {
    return gulp.src('src/img/*.*')
    .pipe(imagemin({optimizationLevel: 7, progressive: true}))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/scripts/**/*.es6', ['scripts']);
    gulp.watch('src/scripts/*.js', ['concat']);
    gulp.watch('dist/scripts/*.js', ['compress']);
    gulp.watch('src/img/*.*', ['images']);
});

gulp.task('default', ['sass', 'scripts', 'concat', 'compress', 'images', 'watch']);