let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require ('gulp-sass');
// let watch = require('gulp-watch');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;


gulp.task('sass', () => {
	return gulp.src('./scss/styles.scss')
	.pipe(sass()) 
	.pipe(gulp.dest('./css/')) 
	.pipe(rename('styles.css'));
});

gulp.task('minify-css', () => {
	return gulp.src('css/styles.css')
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./dist/'));
});

gulp.task('styles', gulp.series('sass', 'minify-css'));

gulp.task('watch', () => {
	gulp.watch('./scss/*.scss', gulp.series('styles'));
	gulp.watch('./js/*.js', gulp.series('javascript'));
});

gulp.task('javascript', () => {
   return gulp.src('./js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./dist/'));
});



