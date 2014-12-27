// Including tha fucking GULP
var gulp = require('gulp');

// Include tha fucking pluggins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

//the fucking vars
var paths = {
    controllers: 'app/static/js/app/controllers/*.js',
    directives: 'app/static/js/app/directives/*.js',
    filters: 'app/static/js/app/filters/*.js',
    services: 'app/static/js/app/services/*.js',
    scripts_dest: 'app/static/js',
    sass: 'stylesheets/*.scss',
    sass_dest: 'app/static/css'
};

// the link task (i don't know how it works but works!)
/*gulp.task('lint', function() {
 return gulp.src(paths.scripts)
 .pipe(jshint())
 .pipe(jshint.reporter('default'));
 });*/

// this shitie func returns the fucking sass in a minified&joined version(actualy it has the ugliest way to use sass but what can i do!)
gulp.task('sass', function () {
    return gulp.src(paths.sass)
        .pipe(sass())
        .pipe(concat('app.css'))
        .pipe(gulp.dest(paths.sass_dest))
        .pipe(rename('app.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(paths.sass_dest));
});

// this function return the javascripts files in one, and minify the fucking code!
gulp.task('controllers', function () {
    return gulp.src(paths.controllers)
        .pipe(concat('controllers.js'))
        .pipe(gulp.dest(paths.scripts_dest))
        .pipe(rename('controllers.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts_dest));
});

// this function return the javascripts files in one, and minify the fucking code!
gulp.task('filters', function () {
    return gulp.src(paths.filters)
        .pipe(concat('filters.js'))
        .pipe(gulp.dest(paths.scripts_dest))
        .pipe(rename('filters.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts_dest));
});

// this function return the javascripts files in one, and minify the fucking code!
gulp.task('services', function () {
    return gulp.src(paths.services)
        .pipe(concat('services.js'))
        .pipe(gulp.dest(paths.scripts_dest))
        .pipe(rename('services.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts_dest));
});

// this function return the javascripts files in one, and minify the fucking code!
gulp.task('directives', function () {
    return gulp.src(paths.directives)
        .pipe(concat('directives.js'))
        .pipe(gulp.dest(paths.scripts_dest))
        .pipe(rename('directives.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts_dest));
});


// this shite task made the console a fucking meth addict that are sniffing for a change
gulp.task('watch', function () {
    gulp.watch(paths.controllers, ['controllers']);
    gulp.watch(paths.directives, ['directives']);
    gulp.watch(paths.filters, ['filters']);
    gulp.watch(paths.services, ['services']);
    gulp.watch(paths.sass, ['sass']);
});

// and this one runs all the commands when you type gulp(yes it is the form to run the task as a webon(only the mexicans will understand this))
gulp.task('default', ['sass', 'controllers', 'directives', 'filters', 'services', 'watch']);