const _gulp = require('gulp');
const _pump = require('pump');

exports.post_build = (done) =>
  _pump(
    _gulp.src(['.env', '.env.*', 'package.json', 'README.md']),
    _gulp.dest('./dist'),
    done,
  );
