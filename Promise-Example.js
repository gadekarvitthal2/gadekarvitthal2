let a=10;
let b=0;

let NodePromise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let b=30
        resolve(b)    
    }, 2000);
    
})

NodePromise.then((item)=>{
    console.log(item+10)
})