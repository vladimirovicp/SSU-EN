var gulp = require("gulp");
var rename = require("gulp-rename");
var sass = require("gulp-sass")(require("sass"));

function processStyles(done) {
  gulp
    .src("./styles/styles.scss")
    .pipe(
      sass({
        errorLogToConsole: true,
        outputStyle: "compressed",
      })
    )
    .on("error", console.error.bind(console))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./css/"));

  done();
}

gulp.task(processStyles);
