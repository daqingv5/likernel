const { src, dest } = require('gulp');
const sass = require('gulp-sass');
function css() {
  return src('./dev/scss/*.scss', { sourcemaps: true })
         .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
         .pipe(dest('./assets/css', { sourcemaps: true }))
}
exports.css = css;