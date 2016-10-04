import gulp from 'gulp';
import {browserSync, browserSyncOptions as options} from './config.js';

gulp.task('browser-sync', browserSyncTask);

function browserSyncTask() {
  options.middleware = [require('connect-history-api-fallback')()],
  browserSync.init(options);
}
