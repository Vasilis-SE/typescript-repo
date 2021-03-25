const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const imagemin = require('gulp-imagemin');

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

// Compile ts to js files
gulp.task('compile-typescript', function() {
    return tsProject.src()
        .pipe(tsProject()).js
        .pipe(gulp.dest("dist"));
});

// Default gulp task
gulp.task("default", gulp.series('copy-html', 'image-optimizer', 'compile-typescript'));

gulp.task("watch", function() {
    gulp.watch("src/**/*.ts", ["compile-typescript"]);
    gulp.watch("src/assets/images/*", ["image-optimizer"]);
    gulp.watch("src/**/*.html", ["copy-html"]);
});