let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require ('gulp-sass');
// browser-sync .create()


gulp.task('sass', () => {
	return gulp.src('./scss/styles.scss')
	.pipe(sass()) 
	.pipe(gulp.dest('./dist/')) //./dist/ es una carpeta con archivos "resultado", esos que yo nunca voy 
	//a tener la necesidada de editar y que son los que le voy a dar a mi cliente (?). 

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

});

////////////////////////////////////////

// let concat = require('gulp-concat');
// let uglify = require('gulp-uglify-es').default;

// gulp.task('concat', () => {
// 	return gulp.src('js/*.js') //cuidado con el orden de los archivos, porque todos dependen del jquery 
// 	//(éste necesita ir primero en el caso de declarar los arhivos explícitamente: ('js/jquery*.js', 'js/popper.js', 'bootstrap.js', 'js/*.js')
// 	.pipe(concat('all.js'))
// 	.pipe(gulp.dest('./'))
// });

// gulp.task('uglify', () => {
// 	return gulp.src('all.js')
// 	// .pipe(rename({suffix: '.min'}))
// 	.pipe(uglify(	))
// 	.pipe(gulp.dest('./'));
// });

// gulp.task('js', gulp.series('concat', 'uglify'));


