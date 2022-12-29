const http =require('http')
// data={name:'vitthal',id:12}
const data=require('./index1')
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'})
    resp.write('hello world');
    resp.end();
}).listen(8080);
// http.createServer( (req, res) =>{
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write(JSON.stringify());
//   res.end();
// }).listen(8080);