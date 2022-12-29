
//how to add and remove data using parameters for that we use "process.argv"
console.log(process.argv[2])
let fs=require('fs')
const data1=process.argv
if(data1[2]=='add'){
    fs.writeFileSync(data1[3],data1[4])
}else if(data1[2]=='remove'){
    fs.unlinkSync(data1[3])
}
else{
    console.log('invalid data')
}