const os = require('os')
const path = require('path')
const {readFileSync, writeFileSync} = require('fs')

// os module methods

const methods = {
    name: os.type(),
    user:os.userInfo(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem(),
    uptime: os.uptime()
}

// path module methods

pathes = {
    join: path.join('folder', 'subfolder','file'),
    base: path.basename(path.join('folder', 'subfolder','file')),
    absolutePath: path.resolve(__dirname, 'folder','sub','file')
}

//  fs module synchronize methods

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

const text = 'this is the content of the result file  '
writeFileSync('./content/result.txt',text)
writeFileSync('./content/result.txt',text,{flag:'a'})// this will be appended

//fs module asynchronize methods

/* fs.readFile (Asynchronous): fs.readFile is 
an asynchronous method used to read the contents of a file. 
It takes a callback function as an argument, which will be 
called when the file read operation is completed. This method
 is non-blocking, meaning it won't block the execution of other
  code while it reads the file. You can continue executing other 
  tasks while waiting for the file read to finish. that meanns 
  the excussion will be splited to do both tasks */

const fs = require('fs');
fs.readFile('./content/first.txt','utf8',(err,data)=>{
    if (err){
        console.log(err)
        return ;
    }
    console.log(data)
})
console.log('This wil be logged before the content of first.txt\
, because we have used asynchronous read method')

// http module: refer to httpModeule.js file

