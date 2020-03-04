const { src, dest, parallel } = require('gulp');
var htmlmin = require('gulp-htmlmin');
function copyCSS() {
  return src('./dev/css/*.css')
         .pipe(dest('./dist/css'))
}
function copyJs() {
  return src('./dev/js/*.js')
         .pipe(dest('./dist/js'))
}

function copyHtml() {
    return src('./dev/*.html')
            .pipe(htmlmin({
            removeComments: true,//清除HTML注释
            minifyJS: true,//压缩页面JS
            minifyCSS: true //压缩页面CSS
            }))
            .pipe(dest('./dist/'))
}
exports.copy = parallel(copyCSS, copyJs, copyHtml);