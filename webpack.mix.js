const mix = require('laravel-mix');

mix.sass('resources/sass/app.sass', 'public/app.css', {
  sassOptions: {
    outputStyle: 'compressed',
  },
});

mix.js('resources/js/app.js', 'public/app.js');

mix.browserSync('http://localhost:8888');
