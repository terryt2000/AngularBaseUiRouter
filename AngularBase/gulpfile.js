'use strict';
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var paths = {
    appScripts: 'app/**/*.js'
};

gulp.task('scripts', function () {
    return gulp.src([paths.appScripts])
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter(require('jshint-stylish')))
        .pipe(plugins.size());
});


gulp.task('injectjs', function(){
    var target = gulp.src('./index.html');
    var sources = gulp.src([paths.appScripts]);

    return target.pipe(plugins.inject(sources, {relative: true}))
        .pipe(gulp.dest('./'));

});



