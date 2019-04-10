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

async function getResult() {
  const res1 = await readFileByPromise('./readfie.js')
  console.log(res1);
  const res2 = await readFileByPromise('./readByPromise.js')
  console.log(res2);
  
}
getResult()