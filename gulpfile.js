let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require ('gulp-sass');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;


gulp.task('styles', () => {
	return gulp.src('./scss/styles.scss')
	.pipe(sass()) 
	.pipe(rename('styles.css'))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./dist/'));
});

gulp.task('watch', () => {
	gulp.watch('./scss/*.scss', gulp.series('styles'));
	gulp.watch('./js/*.js', gulp.series('javascript'));
});

gulp.task('javascript', () => {
   return gulp.src([
   		'./node_modules/jquery/dist/jquery.js', 
   		'./node_modules/popper.js/dist/umd/popper.js', 
   		'./node_modules/bootstrap/dist/js/bootstrap.js', 
   		'./js/*.js'
   	])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./dist/'));
});



