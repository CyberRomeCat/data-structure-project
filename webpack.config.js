const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/hashmap.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};