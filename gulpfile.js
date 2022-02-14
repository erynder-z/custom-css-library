const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

//compile scss to css-folder
function buildStyles() {
  return src('eryngi/**/*.scss').pipe(sass()).pipe(dest('css'));
}

function watchTask() {
  watch(['eryngi/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
