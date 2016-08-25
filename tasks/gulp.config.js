'use strict';

module.exports = {
  templates: {
    src: './sources/templates/*.jade',
    dest: './public/',
  },
  styles: {
    src: './sources/styles/*.scss',
    watch: './sources/styles/**/*.scss',
    dest: './public/styles/',
    sourcemaps: '/sources/styles',
  },
  scripts: {
    src: [
      './sources/**/*.js',
      '!./sources/**/*.spec.js',
    ],
    dest: './public/scripts/',
  },
  browserSync: require('browser-sync').create(),
  browserSyncOptions: {
    server: {
      baseDir: './public',
    },
    notify: false,
    middleware: [require('connect-history-api-fallback')()],
    reloadDelay: 100,
    open: false,
  },
};
