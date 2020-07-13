import {expect} from "chai"
import jsdom from "jsdom";
import fs from "fs"

describe('Our first test',()=>{
  it('should pass',()=>{
    expect(true).to.equal(true)
  })
})

describe('index.html',()=>{
  it('should say hello',(done)=>{
    //hold html file in memory
    const index = fs.readFileSync('./src/index.html','utf-8')
    //define the jsdom environment
    //window represents the window in the browser
    jsdom.env(index,function(err,window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Hello world')
      //mocha knows that its safe to evaluate whether the test is true or false
      done()
      window.close()
    })
  })
})



