import browserSync from 'browser-sync'

module.exports = {
  specs: {
    src: './sources/scripts/mn-input.spec.js',
    options: {
      browsers: ['chrome'],
    },
  },
  templates: {
    src: [
      './sources/templates/demo.jade',
      './sources/templates/index.jade',
    ],
    dest: './docs/',
  },
  styles: {
    src: './sources/styles/*.scss',
    watch: './sources/styles/**/*.scss',
    dest: './dist/',
    sourcemaps: '/sources/styles',
    output: 'mn-input.css',
  },
  scripts: {
    src: [
      './sources/**/*.js',
      '!./sources/**/*.spec.js',
    ],
    dest: './dist/',
    output: 'mn-input.js',
  },
  lintScripts: [
    './gulpfile.js',
    './tasks/**/*.js',
    './sources/**/*.js',
    '!./sources/**/*.spec.js',
  ],
  browserSync: browserSync.create(),
  browserSyncOptions: {
    server: {
      index: 'demo.html',
      baseDir: [
        './docs',
        '.',
      ],
    },
    notify: false,
    ui: false,
    reloadDelay: 100,
    open: false,
  },
}
