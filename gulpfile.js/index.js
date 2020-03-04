const { series, parallel, watch } = require('gulp');
const { css } = require('./css.js'); 
const { script } = require('./script.js');
const { copy } = require('./copy.js');
var connect = require('gulp-connect');

function autoWatch() {
  watch('./dev/scss/*.scss', css);
  watch('./dev/script/*.js', script);
 watch(watchPath, series(watchCallback))
}
var watchPath = ['./assets/*.html','./assets/css/*.css','./assets/js/*.js'];
function watchCallback(){
  return src(watchPath)
      .pipe(connect.reload());
}
function server(cb) { // 本地服务器
  connect.server({
    port: 6001,
    root: 'dev',
    livereload: true
  });
  cb();
}

exports.watch = series( server, autoWatch);
exports.build = copy; 