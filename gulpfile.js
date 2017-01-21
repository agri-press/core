var gulp = require('gulp');

gulp.task('settings', function () {
    gulp.src([
        './../settings/src/**/*'
    ]).pipe(gulp.dest('dist/inc/settings'));
});

gulp.task('cpt', function () {
    gulp.src([
        './../cpt/src/**/*'
    ]).pipe(gulp.dest('dist/inc/cpt'));
});

gulp.task('default', ['settings', 'cpt']);
