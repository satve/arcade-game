var gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', ['css', 'images', 'js', 'watch'], () => {

});

gulp.task('css', () => {
    gulp.src('./src/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
        }))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./dist/css/'))
});

gulp.task('images', () => {
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images/'))
});

gulp.task('js', () => {
    gulp.src(['./src/js/app.js', './src/js/engine.js', './src/js/resources.js'])
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
});

gulp.task('watch', () => {
    gulp.watch('./src/css/**/*.css', ['css'])
});