const del = require("del");
const gulp = require("gulp");
const csso = require("gulp-csso");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");
const htmlmin = require("gulp-htmlmin");
const postcss = require("gulp-postcss");
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");
const sourcemap = require("gulp-sourcemaps");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const svgstore = require("gulp-svgstore");
const uglify = require("gulp-uglify-es").default;
const ghpages = require('gh-pages');
const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");

const clean = () => {
  return del("build");
}

exports.clean = clean;

const copy = () => {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    // "source/img/**",
    "source/*.ico"
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"));
}

exports.copy = copy;

const createWebp = () => {
  return gulp.src("source/img/**/*.{jpg,png}")
    .pipe(webp({
      quality: 90
    }))
    .pipe(gulp.dest("build/img"));
}

exports.createWebp = createWebp;

const images = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
    .pipe(imagemin([
      imagemin.mozjpeg({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
}

exports.images = images;

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass({
      includePaths: require("scss-resets").includePaths
    }))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

const js = () => {
  return gulp.src("source/js/script.js")
    .pipe(uglify())
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest("build/js"));
}

exports.js = js;

const html = () => {
  return gulp.src("source/*.html")
    .pipe(posthtml([include()]))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}

exports.html = html;

const sprite = () => {
  return gulp.src("source/img/{icon-,logo-}*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
}

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("source/*.html").on("change", gulp.series("html", sync.reload));
}

const publish = () => {
  return ghpages.publish("./build", function (err) { });
}

exports.publish = publish;

const build = gulp.series(
  clean,
  copy,
  images,
  createWebp,
  styles,
  js,
  sprite,
  html
);

exports.build = build;
exports.default = gulp.series(build, server, watcher);
