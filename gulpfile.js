var gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');

gulp.task('css', () =>
	gulp.src('./src/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/css/'))
);

gulp.task('images', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images/'))
);