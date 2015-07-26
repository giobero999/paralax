

var gulp = require('gulp'),
		jade = require('gulp-jade'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync').create();

// Static server
gulp.task('default', function() {
  // place code for your default task here
});

//sass
gulp.task('sass', function () {
  gulp.src('app/assets/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/assets/css/'));
});


//jade
gulp.task('gulp-jade', function() {
  var YOUR_LOCALS = {};

  gulp.src('app/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('app/'));
});

gulp.task('browser-sync', function() {
    browserSync.init(["app/"],{
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('watch', function(){
  //gulp.watch('app/index.jade', ['gulp-jade']);
  gulp.watch('app/assets/sass/main.sass', ['sass']);
});




gulp.task('default', ['browser-sync',  'watch', 'sass']);
