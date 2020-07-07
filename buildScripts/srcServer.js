import express  from 'express';
import path  from 'path';
import open  from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev'


const port = 3000;

//create an instance of express
const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo:true,
  publicPath:config.output.publicPath
}))

//tell express which routes it should handle
app.get('/', function(req,res){ //handles any references to /
  //look at the url then send the file we are requesting
  res.sendFile(path.join(__dirname, '../src/index.html'))

})
app.listen(port, function(err){
  if(err){
    console.log(err)
  }else{
    open(`http://localhost:${port}`)
  }
})
