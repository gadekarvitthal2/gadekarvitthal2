const { error } = require('console');
const fs=require('fs');
const path = require('path');
const dirPath=path.join(__dirname,'crud-file');
const filePath=`${dirPath}/crud-file.txt`;
//<here we creted file into crud-file folder >
fs.writeFileSync(`${dirPath}/crud-file.txt`,'this crud operation file')


// fs.readFile(filePath,'utf8',(error,file)=>{
//     // file.map(item=>console.log(item))
//     console.log(file) //we get the directly data
// })


//<-this file is updated->
// fs.appendFile(filePath,'this data is appended into crud file',(error)=>{
//     console.log(error)
// })

// fs.rename(filePath,`${dirPath}/crud-operation.txt`,(error)=>{
//     console.log(error)
// })


//<-this file is for deletion->
// fs.unlinkSync(filePath)



