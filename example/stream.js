/*
 * @Author: mhc 
 * @Date: 2018-09-08 16:17:44 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-09-08 16:34:11
 */

const fs = require('fs');
const path = require('path');

const readMePath = path.resolve(__dirname, '../README.md');


/* 读写流文件 */
const myReadStream = fs.createReadStream(readMePath, 'utf8');

const myWriteStream = fs.createWriteStream('./writeStream.md','utf8');

// let data ='';
myReadStream.on('data', (chunk)=>{
    // data += chunk;
    myWriteStream.write(chunk);
});

myReadStream.on('end', ()=>{
    // console.log(data);
    
});

/* 管道方法 */
myReadStream.pipe(myWriteStream);