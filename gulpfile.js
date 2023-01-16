const {src, dest, task} = require('gulp');

// Gulp plugin
const   sass            = require('gulp-sass'),
        autoPrefixer    = require('gulp-autoprefixer'),
        rename          = require('gulp-rename'),
        beautify        = require('gulp-jsbeautifier'),
        merge           = require('merge-stream');

// Resources urls
const   uikitUrl        = 'src/scss/uikit.scss',
        styleUrl        = 'src/scss/style.scss';
        

// Sass multiple compile task
function sassCompile() {
    return merge(
        // uikit sass compile
        src(uikitUrl)
        .pipe(sass().on('error', sass.logError))        
        .pipe(rename('uikit.css'))
        .pipe(beautify({css: {file_types: ['.css']} }))
        .pipe(dest('dist/css/')),

        // style sass compile
        src(styleUrl)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoPrefixer())
        .pipe(rename('style.css'))
        .pipe(beautify({css: {file_types: ['.css']} }))
        .pipe(dest('dist/css/')),
    );
}

// Command for compile sass "gulp build"
task("build", sassCompile);