import gulp from 'gulp';
import browserify from 'browserify';
import gutil from 'gulp-util';
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import {scripts} from './config.js';
import bowerFiles from 'bower-files';
import {dependencies as bowerDependencies} from '../bower.json';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

const b = browserify(scripts.src, {debug: true});
const dependencies = bowerFiles().ext('js').files;

gulp.task('scripts', scriptsTask);

function scriptsTask() {
  dependencies.forEach(ignoreExternal);
  return b
    .bundle()
    .pipe(source('mn-input.js'))
    .pipe(buffer())
    .pipe(babel())
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest(scripts.dest));
}

function ignoreExternal(file) {
  const name = file.match(/bower_components\/([^\/]+)\//)[1];
  b.external(name);
}

function errorHandler(err) {
  let message = new gutil.PluginError(err.plugin, err.message).toString();
  process.stderr.write(message + '\n');
  gutil.beep();
}
