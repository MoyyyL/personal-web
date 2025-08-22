// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // El modo que pases en la CLI (webpack --mode production) sobrescribirá esto si lo necesitas.
  mode: 'development',
  entry: './src/script.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/', // importante para que las rutas absolutas funcionen
  },
  devtool: 'eval-source-map',
  devServer: {
    watchFiles: ['./src/index.html'],
    static: {
      directory: path.join(__dirname, 'public'), // sirve public/ en la raíz
      publicPath: '/',                            // => /img/archivo.png
    },
    port: 8080,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // minify: false, // opcional para depurar
    }),
    // Copia el contenido de public a dist en el build
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, 'dist') },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: false, // evita que html-loader reescriba src/srcset
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
