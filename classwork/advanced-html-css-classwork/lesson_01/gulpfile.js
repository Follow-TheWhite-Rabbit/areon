const gulp = require('gulp')
const sass = require('gulp-sass') (require('sass'))
gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('watch', function () {
    gulp.watch('./src/sass/**/*.scss', gulp.series('sass'))
})

gulp.task('clone', function () {
    return gulp.src('./src/views/**/*.html')
        .pipe(gulp.dest('./dist/'))
})