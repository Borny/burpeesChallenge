var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch');

gulp.task('sass', function () {
    gulp.src('src/scss/style.scss')
        .pipe(sass({
            style: 'expanded'
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload())
})

gulp.task('html', function () {
    gulp.src('index.html')
        .pipe(connect.reload());
})

gulp.task('js', function () {
    gulp.src('src/js/*')
        .pipe(connect.reload());
})

gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('index.html', ['html']);
    gulp.watch('src/js/*', ['js']);
})

gulp.task('connect', function () {
    connect.server({
        root: '.',
        livereload: true
    })
})

gulp.task('default', ['sass', 'html', 'js', 'watch', 'connect']);