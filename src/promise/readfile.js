const fs = require('fs')
const path = require('path')
function readfile(file,callback) {
  fs.readFile(path.join(__dirname,file),'utf-8',(err,data) => {
    if(err) return callback(err,null)
    //回调函数返回异步结果
    callback(null,data)
  })
}
readfile('./components/input.jsx',(err,data) => {
  console.log(data);
  console.log(err);
  
})