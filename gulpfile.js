const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

//compile scss to css-folder
function buildStyles() {
  return (
    src('sass/**/*.scss')
      //return src('eryngi/**/*.scss')
      .pipe(sass())
      .pipe(purgecss({ content: ['*.html'] })) // purge unused css rules from compiled css-file
      .pipe(dest('css'))
  );
}

function watchTask() {
  watch(['sass/**/*.scss', '*.html'], buildStyles);
  //watch(['eryngi/**/*.scss', '*.html'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
