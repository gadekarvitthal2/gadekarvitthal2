//In this file we can create a bunch of file in pertculer folder
//and read the file name 

const { dir } = require('console')
const fs=require('fs')
const path=require('path')
let dirPath=path.join(__dirname,'files')

for(let i=0;i<4;i++){
    fs.writeFileSync(dirPath+"/vitthal"+i+".txt",'this.is my file')
}

fs.readdir(dirPath,(err,files)=>{
files.map(item=>console.log(item))
})
