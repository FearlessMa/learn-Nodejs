/*
 * @Author: mhc 
 * @Date: 2018-09-08 14:23:52 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-09-08 15:04:16
 */

const events = require('events');
const util = require('util');

const myEmitter = new events.EventEmitter();

const Person = function(name){
    this.name = name ;
}

//util是工具类 inherits继承
util.inherits(Person, events.EventEmitter);

const xiaoming = new Person('xiaoming');

const lili = new Person('lili');

const person = [xiaoming, lili];

person.forEach(person=>{
    person.on('say',(message)=>{
        console.log(person.name +'say : '+ message);
    })
});

xiaoming.emit('say','I am xiaoming');
lili.emit('say','I am lili');

// myEmitter.on('someEvent', message=>{
//     console.log(message)
// });

// myEmitter.emit('someEvent','The event was emit');

