var gulp          = require('gulp'),
    webserver     = require('gulp-webserver'),
    opn           = require('opn'),
    concat        = require('gulp-concat'),
    minifyCSS     = require('gulp-minify-css'),
    rename        = require('gulp-rename'),
    uglify        = require('gulp-uglify'),
    jshint        = require('gulp-jshint'),
    minifyHTML    = require('gulp-minify-html'),
    replaceHTML   = require('gulp-html-replace'),
    rimraf        = require('gulp-rimraf'),
    ignore        = require('gulp-ignore'),
    zip           = require('gulp-zip'),
    checkFileSize = require('gulp-check-filesize'),

    serveDir = './src',

    server = {
        host: 'localhost',
        port: '5000'
    },

    distPaths = {
        build: '_build',
        js_build_file: 'game.min.js',
        css_build_file: 'game.min..css'
    },

    sourcePaths = {
        css: [
            'src/css/*.css', 
        ],
        js: [
            'src/js/game.js', 
            'src/js/*.js'
        ],
        mainHtml: [
            'src/index.html' 
        ]
    };

gulp.task('serve', function () {
    gulp.src(serveDir)
        .pipe(webserver({
            host: server.host,
            port: server.port,
            fallback: 'index.html',
            livereload: false,
            directoryListing: false,
            open: true
    }));
});

gulp.task('openbrowser', function () {
    opn( 'http://' + server.host + ':' + server.port );
});

gulp.task('buildCSS', function () {
    return gulp.src(sourcePaths.css)
        .pipe(concat(distPaths.css_build_file))
        .pipe(minifyCSS())
        .pipe(gulp.dest(distPaths.build));
});

gulp.task('buildJS', function () {
    return gulp.src(sourcePaths.js)
        .pipe(concat(distPaths.js_build_file))
        .pipe(uglify())
        .pipe(gulp.dest(distPaths.build));
});

gulp.task('buildIndex', function () {
    return gulp.src(sourcePaths.mainHtml)
        .pipe(replaceHTML({
            'css': distPaths.css_build_file,
            'js': distPaths.js_build_file
        }))
        .pipe(minifyHTML())
        .pipe(rename('index.html'))
        .pipe(gulp.dest(distPaths.build));
});

gulp.task('cleanBuild', function () {
    return gulp.src('./_build/*', { read: false })    
        .pipe(ignore('.gitignore'))
        .pipe(rimraf());
});

gulp.task('zipBuild', function () {
    return gulp.src('./_build/*')
        .pipe(zip('game.zip'))
        .pipe(gulp.dest('./_dist'))
        .pipe(checkFileSize({
            fileSizeLimit: 16384 
        }));
});

gulp.task('default', ['serve']);
gulp.task('build', ['buildJS', 'buildCSS', 'buildIndex', 'zipBuild']);
