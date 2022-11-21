const {src, dest, watch, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function css (done) {
    src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(dest('build/css'))

    done();
}

function javascript (done) {
    src('src/js/**/*.js')
    .pipe(dest('build/js'))


    done();
}

function imagenes (done) {
    src('src/img/**/*.{jpg,svg,png}')
    .pipe(dest('build/img'));

    done();
}

function dev(done){
    watch('src/scss/**/*.scss', css); // Se crea la función para que esté atenta a las modificaciones del archivo y ejecuta la función especificada
    watch('src/js/**/*.js', javascript);
    watch('src/img/**/*.{jpg,png,svg}', imagenes);

    done();
}

exports.css = css;
exports.js = javascript;
exports.imagenes = imagenes;
exports.dev = parallel (dev, css, javascript, imagenes);