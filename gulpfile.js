const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const imagemin = require('gulp-imagemin');

// Print message
gulp.task('message', function() {
    console.log('Gulp is running...');
});

// Copy all html files
gulp.task('copy-html', function() {
    return gulp.src('src/**/*.html').pipe(gulp.dest("dist"));
});

// Optimizing images
gulp.task('image-optimizer', function() {
    return gulp.src('src/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest("dist/assets/images"));
});

// Default gulp task
gulp.task("default", function () {
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
});