'use strict';

module.exports = function() {

  $.gulp.task('copy:css', function() {
    return $.gulp.src('src/style/prog.css')
      .pipe($.gulp.dest($.config.root + '/assets/css'))
  })

};
