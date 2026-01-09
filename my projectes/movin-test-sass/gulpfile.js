var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', async function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
})

gulp.task('watch', async function(){
    browserSync.init({
        server: "./app"
    });
  // Other watchers
        gulp.watch("app/scss/*.scss", gulp.series(['sass']));
    gulp.watch("app/*.html").on('change', browserSync.reload);
});