const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync').create();

function styles(){
	return gulp.src('app/scss/**/style.scss')
		.pipe(sass())
		.pipe(postcss([ autoprefixer() ]))
		.pipe(gulp.dest('./app/css'))
		.pipe(browserSync.reload({
	    	stream: true
	    }))
}

function scripts(){
}

function reload(){
	browserSync.reload("*.html");
}
function watch(){
	browserSync.init({
		files: ["app/*.html", "app/js/*.js"],
	    server: "./app"
	});

	gulp.watch('app/scss/**/*', styles);
}

gulp.task('styles', styles);
//gulp.task('scripts', scripts);

gulp.task('watch', watch);

gulp.task('default',  gulp.series('styles', 'watch'));