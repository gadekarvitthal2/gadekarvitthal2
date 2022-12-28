let fc=require('./index1') //this is non-globle function
let fs=require('fs')
fs.writeFileSync("vitthal.html",'<h1>This is vitthal gadekar from Pune</h1>'  )
console.log(__dirname,__filename)
let array=[1,2,3,4,5,6]
console.log(array.filter((item)=>item>4))

