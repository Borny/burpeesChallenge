var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    del = require('del'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload');

    gulp.task('sass', function(){
        return sass('scss/styles.scss', {style : 'expanded'})
            .pipe(gulp.dest('css/'))
            .pipe(rename({suffix:'.min'}))            
            .pipe(notify({message: 'Sass task complete'}));
    });

    gulp.task('js', function(){
        return gulp.src('js/**.js')
            //.pipe(jshint('.jshintrc'))
            //.pipe(jshint.reporter('default'))
            .pipe(concat('main.js'))
            .pipe(gulp.dest('js/'))
            .pipe(rename({suffix: '.min'}))
            .pipe(notify({message: 'Scripts task complete'}));
    });

    gulp.task('clean', function(){
        return del('css/');
    });

    gulp.task('default', ['clean'], function(){
        gulp.start('sass','js');
    })

    gulp.task('watch', function(){
        gulp.watch('scss/**/*.scss', ['sass']);

        gulp.watch('js/*.js', ['js']);

        livereload.listen();

        gulp.watch(['scss/**','js/**']).on('change', livereload.changed);

    })

