var elixir = require('laravel-elixir');

require('laravel-elixir-webpack-react');

// Merge style-loader and css-loader

Elixir.ready(function() {
    Elixir.webpack.mergeConfig({
        module: {
            loaders: [
                { test: /\.css$/, loader: "style-loader!css-loader" }
            ]
        }
    });
});

elixir(function(mix) {
    mix.styles(['main.css'], 'public/css/main.css');
    mix.webpack('resources/assets/js/app.js');
    mix.version([
        'css/main.css',
        'js/app.js',
    ]);
});