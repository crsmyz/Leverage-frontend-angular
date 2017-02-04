const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist/**/*');
});

// copy dependencies
gulp.task('copy:libs', ['clean'], function() {
  return gulp.src([
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/angular2/bundles/router.dev.js'
    ])
    .pipe(gulp.dest('dist/lib'))
});

// ...
gulp.task('copy:fonts', ['clean'], function () {
  return gulp
      .src(['node_modules/font-awesome/fonts/**/*', 'node_modules/bootstrap-less/fonts/**/*'])
      .pipe(gulp.dest('dist/fonts'));
});

// copy static assets
// gulp.task('copy:assets', ['clean'], function () {
//     return gulp.src(['src/static/**/*', 'src/static/index.html', 'src/static/styles.css'], { base : './' })
//             .pipe(gulp.dest('dist/src/static'));
// });

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', ['clean'], function() {
  return gulp.src(['src/**/*', 'index.html', 'styles.css', '!src/**/*.ts'], { base : './' })
    .pipe(gulp.dest('dist'))
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:css', ['clean'], function() {
  return gulp.src(['node_modules/bootstrap/dist/css/**/*', 'node_modules/bootstrap/dist/css/bootstrap.css'])
    .pipe(gulp.dest('dist/css/'))
});



// TypeScript compile
gulp.task('compile', ['clean'], function () {
  return gulp
    .src('src/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:static', ['clean'], function() {
  return gulp.src(['src/**/*', 'src/static/index.html', 'src/static/styles.css', '!src/**/*.ts'], { base : './' })
    .pipe(gulp.dest('dist/src/static'))
});

gulp.task('build', ['clean', 'copy:libs', 'copy:assets', 'copy:css', 'compile']);
gulp.task('default', ['clean', 'build', 'copy:libs', 'copy:assets', 'copy:css' ]);