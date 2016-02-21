var gulp = require('gulp');
var chokidar = require('chokidar');
var browserSync = require("browser-sync");
var webpack = require("webpack");
gulp.task("webpack", function() {
  var config = require("./webpack.config.js");
  var compiler = webpack(config);
  compiler.watch({ // watch options:
    aggregateTimeout: 300, // wait so long for more changes
    poll: true
  }, function(err, stats) {
    if (err) {
      console.log("error:"+err);
    }

    var startTime=stats.startTime;
    var endTime=stats.endTime;
    var hash=stats.hash;
    console.log("time:"+(endTime-startTime)+"ms."+"\nhash:"+hash);
  });
});
gulp.task("server", function() {
  browserSync.init({
    server: {
      baseDir: ["app"],
      middleware: [function(req, res, next) {
        next();
      }]
    },
    port: 80,
    open: false,
    notify: false
  }); //browserSync.init end
}); //task server end
gulp.task('server:watch', function() {
  chokidar.watch('app/js/bundle.js')
    .on('change', browserSync.reload)
});
gulp.task('default', ['server','server:watch',"webpack"]);
process.on('uncaughtException', function(err) {
  console.log(err.stack);
});
