//This file isn't transpiled, so must use common js and es6

//Register babel to transpile before our tests run
require('babel-register')()

//Disable webpack features that mocha doesn't understand
//treat this like an empty function
require.extensions['.css'] = function(){}

