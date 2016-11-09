var paths = {};

// Directory locations
var srcDir             = 'src/';  // The files Gulp will work on
var distDir            = 'public/dist/'; // The resulting static site

var imageFolderName  = 'images';
var fontFolderName   = 'fonts';
var jsFolderName     = 'js';
var cssFolderName    = 'css';

// Glob patterns by file type
var cssPattern         = '/**/*.css';
var jsPattern          = '/main.js';
var imagePattern       = '/**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF|webp|WEBP|tif|TIF|mp4)';
var fontPatterns       = '/**.*';

// src files locations
var srcCssFiles    = srcDir  + cssFolderName;
var srcJsFiles     = srcDir  + jsFolderName;
var srcImageFiles  = srcDir  + imageFolderName;
var srcFontFiles   = srcDir  + fontFolderName;

// Dist file locations
var distImageFiles = distDir + imageFolderName;
var distFontFiles  = distDir + fontFolderName;
var distJsFiles    = distDir + jsFolderName;
var distCssFiles   = distDir + cssFolderName;

// src files globs
var srcCssFilesGlob      = srcCssFiles      + cssPattern;
var srcJsFilesGlob       = srcJsFiles       + jsPattern;
var srcImageFilesGlob    = srcImageFiles    + imagePattern;
var srcFontFilesGlob     = srcFontFiles     + fontPatterns;

// dist files globs
var distImageFilesGlob = distImageFiles + imagePattern;
var distFontFilesGlob  = distFontFiles + imagePattern;
var distJsFilesGlob    = distJsFiles + imagePattern;
var distCssFilesGlob   = distCssFiles + imagePattern;

// Load plugins
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    include = require('gulp-include'),
    css = require('css'),
    browserSync = require('browser-sync'),
    browserReload = browserSync.reload,
    child = require('child_process'),
    postcss = require('gulp-postcss'),
    cssvariables = require('postcss-css-variables'),
    atImport = require("postcss-import"),
    customMedia = require("postcss-custom-media"),
    at2x = require('postcss-at2x'),
    browserify = require('browserify'),
    uglify = require('gulp-uglify'),
    transform = require('vinyl-transform'),
    source = require('vinyl-source-stream'),
    streamify = require('gulp-streamify'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect'),
    runSequence  = require('run-sequence'),
    debug = require('gulp-debug'),
    concat = require('gulp-concat'),
    size = require('gulp-size'),
    run = require('gulp-run');



// Uses Sass compiler to process styles, adds vendor prefixes, minifies,
// and then outputs file to srcropriate location(s)
gulp.task('build:styles', function() {
  var processors = [
      atImport(),
      customMedia(),
      cssvariables(),
      at2x(),
  ];
  gulp.src(srcCssFilesGlob)
    .pipe(postcss(processors))
    .pipe(gulp.dest(distCssFiles))
    .pipe(browserSync.stream())
    .on('error', gutil.log);
});

// Places all fonts in srcropriate location(s)
gulp.task('build:fonts', function() {
  return gulp.src(srcFontFilesGlob)
    .pipe(rename(function(path) {path.dirname = '';}))
    .pipe(gulp.dest(distFontFiles))
    .pipe(browserSync.stream())
    .pipe(size({showFiles: true}))
    .on('error', gutil.log);
});


// Creates optimized versions of images,
// then outputs to srcropriate location(s)
gulp.task('build:images', function() {
  return gulp.src(srcImageFilesGlob)
    .pipe(gulp.dest(distImageFiles))
    .pipe(browserSync.stream())
    .pipe(size({showFiles: true}))
    .on('error', gutil.log);
})

// Concatenates and uglifies JS files and outputs result to
// the appropriate location(s).
gulp.task('build:scripts', function() {
  var bundleStream = browserify(srcJsFilesGlob).bundle()
  bundleStream
    .pipe(source("srcJsFilesGlob"))
    .pipe(rename('main.js'))
    .pipe(gulp.dest(distJsFiles))


  var bundleVideoJs = browserify('src/js/redactorPlugins/video.js').bundle()
  bundleVideoJs
    .pipe(source("srcJsFilesGlob"))
    .pipe(rename('video.js'))
    .pipe(gulp.dest(distJsFiles))
});


gulp.task('build', ['build:scripts', 'build:images', 'build:styles', 'build:fonts'], function(){
  // debug({title: 'unicorn:'});
});

/* Sass and image file changes can be streamed directly to BrowserSync without
reloading the entire page. Other changes, such as changing JavaScript or
needing to run dist build require reloading the page, which BrowserSync
recommends doing by setting up special watch tasks.*/
// Special tasks for building and then reloading BrowserSync
gulp.task('build:dist:watch', [], function(cb) {
  browserSync.reload();
  cb();
});

gulp.task('build:scripts:watch', ['build:scripts'], function(cb) {
  browserSync.reload();
  cb();
});

// Static Server + watching files
// WARNING: passing anything besides hard-coded literal paths with globs doesn't
//          seem to work with the gulp.watch()
gulp.task('serve', ['build'], function() {

  // debug({path: srcJsFilesGlob })

  // browserSync.init({
  //   server: distDir,
  //   ghostMode: false, // do not mirror clicks, reloads, etc. (performance optimization)
  //   logFileChanges: true,
  //   open: false       // do not open the browser (annoying)
  // });

  // Watch site settings
  gulp.watch(['_config.yml', '_src/localhost_config.yml'], ['build:dist:watch']);
  // Watch src .css files, changes are piped to browserSync
  gulp.watch('src/css/**/*.css', ['build:styles']);
  // Watch src .js files
  gulp.watch('src/js/**/*.js', ['build:scripts:watch']);
  // Watch craft html files
  gulp.watch(['craft/templates/**/*.html'], ['build:dist:watch']);
});
