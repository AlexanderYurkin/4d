import webpack from "webpack-stream";

export const js = () => {
  return app.gulp
    .src(app.path.src.js, { sourcemaps: true })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          message: "Error: <%= error.message %>",
        })
      )
    )

    .pipe(
      webpack({
        entry: {
          app: "./src/js/app.js",
          maps: "./src/js/maps.js",
          bootstrap: "./src/js/bootstrap.js",
        },
        output: {
          filename: "[name].js",
          path: "/dist/js",
          sourceMapFilename: "[name].js.map",
        },
        mode: "production",
        devtool: "source-map",
        optimization: {
          usedExports: true,
          minimize: true,
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream());
};
