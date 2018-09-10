# learn NodeJs

## global全局对象

* 全局变量在所有模块中均可使用。 以下变量虽然看起来像全局变量，但实际上不是。 它们的作用域只在模块内，详见 module文档：

```js

    __dirname //当前执行文件所在的目录

    __filename //当前执行文件的绝对路径

    exports

    module

    require

```

* 下面列出的对象都是针对 Node.js 的。 有些内置对象是 JavaScript 语言本身的一部分，它们也是全局的。

```js

    Buffer

    clearImmediate(immediateObject)

    clearInterval(intervalObject)

    clearTimeout(timeoutObject)

    console

    process

    setImmediate(callback[, ...args])

    setInterval(callback, delay[, ...args])

    setTimeout(callback, delay[, ...args])

    URL

    URLSearchParams

```

## 回调函数

* callback

## 模块

* module.exports

* exports

* require

* node模块中 module.exports = exports

## 事件

* 大多数 Node.js 核心 API 都采用惯用的异步事件驱动架构，其中某些类型的对象（触发器）会周期性地触发命名事件来调用函数对象（监听器）。例如，net.Server 对象会在每次有新连接时触发事件；fs.ReadStream 会在文件被打开时触发事件；流对象 会在数据可读时触发事件。所有能触发事件的对象都是 EventEmitter 类的实例。 这些对象开放了一个 eventEmitter.on() 函数，允许将一个或多个函数绑定到会被对象触发的命名事件上。 事件名称通常是驼峰式的字符串，但也可以使用任何有效的 JavaScript 属性名。当 EventEmitter 对象触发一个事件时，所有绑定在该事件上的函数都被同步地调用。 监听器的返回值会被丢弃。

```js
    const events = require('events');
    const myEmitter = new events.EventEmitter();
    myEmitter.on('someEvent', message=>{
        console.log(message)
    });
    myEmitter.emit('someEvent','The event was emit');

```

## 文件系统

### 读写文件

* 所有的文件系统操作都有异步和同步两种形式。

* 异步形式的最后一个参数都是完成时回调函数。 传给回调函数的参数取决于具体方法，但回调函数的第一个参数都会保留给异常。 如果操作成功完成，则第一个参数会是 null 或 undefined。

* 当使用同步操作时，任何异常都会被立即抛出，可以使用 try/catch 来处理异常，或让异常向上冒泡。

```js
    const fs = require('fs');
    const path = require('path');

    const readMePath = path.resolve(__dirname,'../README.md');

    //同步方法
    const readme = fs.readFileSync(readMePath,'utf8');
    fs.writeFileSync('write.md',readme );

    // 异步方法
    fs.readFile(readMePath, 'utf8', (err,data)=>{
        if(!err){
            console.log('data is read')
            fs.writeFile('writeMe.md', data , err=>{
                console.log('write is finished')
            });
        }else{
            console.log(err);
        }
    });

```

### 删除创建目录

