




var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var w3cjs = require('gulp-w3cjs');

gulp.task("sass",function(){
    return gulp.src('src/scss/base.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('webserver',function(){
    gulp.src('./')
        .pipe(webserver({
            livereloade:true,
            open: true
        }));
});

gulp.task("watch",function(){
    gulp.watch(['*.html'])
    gulp.watch("src/scss/*.scss",['sass'])
});

gulp.task('default',['watch','sass','webserver']);
