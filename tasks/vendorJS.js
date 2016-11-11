import gulp from 'gulp';
import browserify from 'browserify';
import bowerFiles from 'bower-files';
import {dependencies as bowerDependencies} from '../bower.json';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import uglify from 'gulp-uglify';

const b = browserify();
const dependencies = bowerFiles().ext('js').files;

gulp.task('vendorJS', vendorJSTask);

function vendorJSTask() {
  dependencies.forEach(registerDependency);
  return b
    .bundle()
    .pipe(source('vendor.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
}

function registerDependency(file) {
  const name = file.match(/bower_components\/([^\/]+)\//)[1];
  b.require(file, {expose: name});
}
