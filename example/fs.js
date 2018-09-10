/*
 * @Author: mhc 
 * @Date: 2018-09-08 15:09:39 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-09-08 15:54:35
 */

const fs = require('fs');
const path = require('path');

const readMePath = path.resolve(__dirname,'../README.md');

/* 读写文件 */
// //同步方法
// const readme = fs.readFileSync(readMePath,'utf8');
// fs.writeFileSync('write.md',readme );

// // 异步方法
// fs.readFile(readMePath, 'utf8', (err,data)=>{
//     if(!err){
//         console.log('data is read')
//         fs.writeFile('writeMe.md', data , err=>{
//             console.log('write is finished')
//         });
//     }else{
//         console.log(err);
//     }
// });

stram'
//创建stuff/writeMe.me
fs.mkdir('stuff', err=>{
    if(!err){
        fs.readFile(readMePath, 'utf8', (err, data)=>{
            if(!err){
                fs.writeFile('./stuff/writeMe.md', data, err=>{
                    console.log(data)
                    if(!err){
                        console.log('write is finished')
                    }else{
                        console(err, 'writeFile');
                    }
                })
            }else{
                console.log(err, 'readFile');
            }
        })
    }else{
        console.log(err, 'mkdir');
    }
})

