var gulp = require('gulp');
var react = require('gulp-react');
var chokidar = require('chokidar');
var rename = require('gulp-rename');
var inject = require('gulp-inject');
var browserSync = require("browser-sync");
var webpackStream=require("webpack-stream");
gulp.task("test",function(){
  var webpackConfig=require('./webpack.config.js');
  console.log(webpackConfig)
  return gulp.src("app/js/app.react.js")
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest('app/js'));
});
return ;
gulp.task("webpack",function(){
  var webpackConfig=require('./webpack.config.js');
  function pack(f, p) {
    return gulp.src("app/js/app.js")
      .pipe(webpackStream(webpackConfig))
      .pipe(gulp.dest('app/js/bundle.js'));
  }
  chokidar.watch("app/js/**/*.react.js")
    .on('change',pack);
});
gulp.task('react', function() {
  function compile(f, p) {
    console.log(Date.now());
    return gulp.src(f)
      .pipe(react())
      .pipe(gulp.dest('app/lib'))
  }
  chokidar.watch('app/libJsx/**/*.jsx')
    .on('change', compile)
});
gulp.task("server", function() {
  browserSync.init({
    server: {
      baseDir: ["app", "bower_components"],
      middleware: [function(req, res, next) {
        next();
      }]
    },
    port: 80,
    open: false,
    notify: false
  }); //browserSync.init end

}); //task server end

// gulp.task('default', ['react', 'injectDev', 'injectDev:watch', 'server', 'server:watch']);
gulp.task('default', ['injectDev:watch', 'server']);
process.on('uncaughtException', function(err) {
  console.log(err.stack);
});
gulp.task('server:watch', function() {
  chokidar.watch('app/lib/**/*.js')
    .on('change', browserSync.reload)
});
var injectDev = (function() {
  var t = null;
  var timeout = 50;
  return function() {
    if (t) {
      clearTimeout(t);
    }
    t = setTimeout(function() {
      gulp.src('indexTpl.html')
        .pipe(inject(gulp.src('app/lib/**/*.js', {
          read: false
        }), {
          name: 'inject',
          addRootSlash: true,
          ignorePath: ['bower_components', 'app']
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./'));
    }, timeout);
  }
})();
gulp.task('injectDev', injectDev);
gulp.task('injectDev:watch', function() {
  chokidar.watch('app/lib/**/*.js')
    .on('add', injectDev)
    .on('remove', injectDev)
});
