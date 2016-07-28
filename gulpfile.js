/**
 * Created by krystofe on 7/28/2016.
 */
var gulp  = require('gulp');
var shell = require('gulp-shell');

gulp.task('serve', shell.task([
    'http-server'
]));