const http = require('http')
/*
const server = http.createServer((req, res)=>{
    if (req.url === "/"){
        res.end('welcome to our home page')
    }
    if (req.url === '/about'){
        res.end('here is our short history')
    } 
    res.end("Eror")
})

server.listen(5000)

*/

const _ = require('lodash')
const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)
  