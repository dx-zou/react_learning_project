const fs = require('fs')
const path = require('path')

function readFileByPromise(file) {
  return new Promise(function(resolve,reject) {
    fs.readFile(path.join(__dirname,file),'utf-8',(err,data) => {
      if(err) return reject(err)
      resolve(data)
    })
  })
}

readFileByPromise('./readfile.js').then( res => {
  console.log(res);
  return readFileByPromise('../views/class-extends/class.js')
}).then(res => {
  console.log(res);
  return readFileByPromise('../views/class-extends/clas.js')
}).catch(err => {
  console.log(err);
  
})