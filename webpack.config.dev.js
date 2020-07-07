import path from 'path';

export default {
  //enable debugging info as you run the app
  debug: true,
  //generate a source map bu specifyng the devtool settings
  devtool: 'inline-source-map',
  //webpack to display a list of all the files its bundling
  noInfo: false,
  //a list of options ie inject middleware for hot reloading
  entry: [
    //get the full path
    path.resolve(__dirname, 'src/index')
  ],
  //targeting web
  target: 'web',
  //tell webpack where to create the dev bundle
  // webpack won't create any physical files but it will create a bundle in
  // memory and serve it to the browser
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    //place bundle.js in the root of the src directory
    //simulates the existance in the directory
    filename: 'bundle.js'
  },
  plugins: [],
  //tell webpack the file type to handle
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
