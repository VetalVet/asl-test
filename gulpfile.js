const gulp = require('gulp');
const scss = require('gulp-sass');
const { dest } = require('vinyl-fs');


gulp.task("build-sass", () => {
    return gulp.src("assets/scss/style.scss")
            .pipe(scss())
            .pipe(dest('assets/css'));
});


gulp.task("watch", () => {
    gulp.watch("./assets/scss/**/*.scss", gulp.parallel("build-sass"));
});

gulp.task("build", gulp.parallel("build-sass"));

gulp.task("default", gulp.parallel("watch", "build"));