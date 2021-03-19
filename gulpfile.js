const { src, dest, watch } = require("gulp")
const sass = require("gulp-sass")
function css() {
  return src("sass/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(dest("./styles/css"))
}
exports.default = function () {
  watch("sass/**/*.scss", css)
}