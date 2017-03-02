var gulp       = require('gulp'),
    connect    = require('gulp-connect'),
    concat     = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify     = require('gulp-uglify'),
    rename     = require('gulp-rename'),
    plumber    = require('gulp-plumber'),
    sass       = require('gulp-sass'),
    imagemin   = require('gulp-imagemin'),
    notify     = require('gulp-notify'),
    eslint     = require('gulp-eslint'),
    paths      = {
      html: {
        all: './src/*.html',
        dest: './dist'
      },
      sassCustom: {
        main: './src/sass/custom/style.scss',
        all: './src/sass/custom/**/*.scss',
        dest: './dist/css'
      },
      sassVendor: {
        main: './src/sass/vendor/vendor-style.scss',
        all: './src/sass/vendor/**/*.scss',
        dest: './dist/css'
      },
      js: {
        all: [
          './src/js/main.js',
          './src/js/menu.js',
          './src/js/jump-text.js'
        ],
        vendors: [
          './src/js/vendors/jquery.js',
          './src/js/vendors/tether.js',
          './src/js/vendors/bootstrap.js'
        ],
        dest: './dist/js'
      }
    };

// Error look-out
function errorLog(error){
  console.error.bind(error);
  this.emit('end');
}

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('bundleHTML', function() {
  return gulp.src(paths.html.all)
            .pipe(gulp.dest(paths.html.dest))
            .pipe(connect.reload());
});

/**
 * Images
 *
 * Look at src/images, optimize the images and send them to the appropriate place
*/
gulp.task('images', function() {

// Add the newer pipe to pass through newer images only
    return gulp.src(['./src/img/**/*.{png,jpg,gif}'])
                .pipe(imagemin({ optimizationLevel: 7, progressive: true, interlaced: true }))
                .pipe(gulp.dest('./dist/img/'))
                .pipe( notify( { message: 'Images task complete', onLast: true } ) );
});

gulp.task('bundleSASSCustom', function () {
  return gulp.src(paths.sassCustom.main)
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
            .on('error', errorLog)
            .pipe(autoprefixer(autoprefixerOptions))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(paths.sassCustom.dest))
            .pipe(connect.reload())
});

gulp.task('bundleSASSVendor', function () {
  return gulp.src(paths.sassVendor.main)
            .pipe(plumber())
            .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
            .on('error', errorLog)
            // .pipe(concat('vendor-bundle.css'))
            .pipe(rename('vendor-bundle.min.css'))
            .pipe(gulp.dest(paths.sassVendor.dest))
            .pipe(connect.reload())
});

gulp.task('bundleJS', function () {
  return gulp.src(paths.js.all)
      .pipe(plumber())
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(sourcemaps.init())
      .pipe(concat('bundle.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(paths.js.dest))
      // .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(paths.js.dest))
      .pipe(connect.reload());
});

gulp.task('bundelVenderJS', function() {
  return gulp.src(paths.js.vendors)
          .pipe(concat('bundle-vendor.js'))
          // .pipe(uglify())
          .pipe(rename({suffix: '.min'}))
          .pipe(gulp.dest(paths.js.dest))
          .pipe(connect.reload())
});

gulp.task('connect', function () {
  connect.server({
    root: './dist',
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch([paths.html.all], ['bundleHTML']);
  gulp.watch('./src/images/**/*', ['images']);
  gulp.watch([paths.sassCustom.all], ['bundleSASSCustom']);
  gulp.watch([paths.js.all], ['bundleJS']);
})
gulp.task('default', ['connect', 'watch', 'images', 'bundleJS', 'bundleSASSCustom', 'bundleSASSVendor', 'bundelVenderJS', 'bundleHTML']);
