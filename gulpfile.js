import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

// Передача значений в глобальную переменную
global.app = {
   path: path,
   gulp: gulp,
   plugins: plugins
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { fav } from "./gulp/tasks/fav.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";

// Наблюдатель за изменениями в файлах
function watcher() {
   gulp.watch(path.watch.files, copy);
   gulp.watch(path.watch.favicon, fav);
   gulp.watch(path.watch.html, html);
   gulp.watch(path.watch.scss, scss);
   gulp.watch(path.watch.js, js);
   gulp.watch(path.watch.images, images);
}

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, fav, html, scss, js, images));

// Сценарий выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// Выполнение сценария задач
gulp.task('default', dev);