const { src, dest } = require('gulp');
const concat = require('gulp-concat');
var uglify = require('gulp-uglify');

function script() {
  return src('./dev/script/utils/*.js', { sourcemaps: true })
         .pipe(concat('lib.min.js')) // 将utils文件夹下的js文件合并到成一个文件lib.min.js
         .pipe(src('./dev/script/*.js', { sourcemaps: true }))
         .pipe(uglify()) // 压缩js文件
         .pipe(dest('./assets/js', { sourcemaps: true }))
}
exports.script = script;