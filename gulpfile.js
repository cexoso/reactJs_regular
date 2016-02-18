var gulp = require('gulp');
var react = require('gulp-react');
var chokidar = require('chokidar');
var rename = require('gulp-rename');
var inject = require('gulp-inject');
var browserSync = require("browser-sync");
var webpackStream=require("webpack-stream");
gulp.task("webpack",function(){
  var webpackConfig=require('./webpack.config.js');
  function pack(f, p) {
    return gulp.src("app/js/app.jsx")
      .pipe(webpackStream(webpackConfig))
      .pipe(gulp.dest('app/js'));
  }
  chokidar.watch("app/js/**/*.jsx")
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
gulp.task('default', ['server:watch', 'server',"webpack"]);
process.on('uncaughtException', function(err) {
  console.log(err.stack);
});
gulp.task('server:watch', function() {
  chokidar.watch('app/js/bundle.js')
    .on('change', browserSync.reload)
});
