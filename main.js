"use strict"

// // var a ="test1";
// // var b="test2";

// function testVar(){
//     var a=30;
//     if(true){
//         var a=50;
//         console.log(a);
//     }
//     console.log(a);

// }
// testVar();

// function testLet(){
//     let a=30;
//     if(true){
//         let a=50;
//         console.log(a);
//     }
//     console.log(a);
// }

// for(let i=0;i<10;i++){
//     console.log(i);
// }
// console.log(i);

// const colors=[];
// colors.push("red");
// colors.push("blue");
// // colors="green";
// console.log(colors);
// let name="mohini";
// function makeUppercase(word){
//     return word.toUpperCase();
// }

// let template=`<h1>${makeUppercase('hello')}, ${name}</h1><p>this is a simple Template in Javascript</p>`;
// document.getElementById('template').innerHTML=template;
let theString="Hello,my name is Brad and I love JavaScript";

//startwioth
//endswith
//includers

// console.log(theString.startsWith('Hello'));
// console.log(theString.endsWith('JavaScript'));
//console.log(theString.includes('love'));

//Hex
//console.log(0xFF);
//Binary
//console.log(0b1010);
//Octal
//console.log(0o543);

// console.log(Number.isFinite(2));
// console.log(Number.isFinite(-2));
// console.log(Number.isFinite(Infinity));
// console.log(Number.isFinite(NaN));
// console.log(Number.isNaN(2));
// console.log(Number.isNaN('string'));
// console.log(Number.isInteger(2));
// console.log(Number.isInteger(-2));
// console.log(Number.isInteger(Infinity));

// function greet($greeting="Hello World"){
//     console.log($greeting);
// }
// //greet('Hello');
// greet();

//  let args1=[1,2,3];
//  let args2=[4,5,6];

//  function test(){
//      console.log(args1+','+args2);
//  }
// //test.apply(null,args);
//  test(...args1,...args2);

// var myArray=[11,23,34,65,34];
// let mySet=new Set(myArray);
// mySet.add(100);
// mySet.add({a:1,b:2});
// mySet.delete(23);
// console.log(mySet);
// mySet.clear();
// console.log(mySet);
// mySet.add(100);
// mySet.add(200);

// //console.log(mySet.size)
// mySet.forEach(function(val){
// console.log(val);
// })

// let myMap=new Map([['a1','Hello'],['b2','GoodBye']]);
// myMap.set('c3','Foo');
// myMap.delete('a1');
// console.log(myMap);
// console.log(myMap.size);

// let carweakset=new WeakSet();

// let car1={
//     make:"Honda",
//     model:'Civic'
    
// }
// carweakset.add(car1);
// let car2={
//     make:"Toyota",
//     model:'Canry'
    
// }
// carweakset.add(car2);
// carweakset.delete(car2);
// console.log(carweakset);
//  let car1={
//          make:"Honda",
//           model:'Civic'
//  }    
//  let key1={
//     id:1
// }
// let car2={
//     make:"Toyota",
//      model:'Canry'
// }    
// let key2={
// id:2
// }
//  let carweakMap =new WeakMap();
 

//  carweakMap.set(key1,car1);
//  carweakMap.set(key2,car2);
//  carweakMap.delete(key1);

//  console.log(carweakMap);

//Arrow Functions
// function prefixer(prefix){
//     this.prefix=prefix;
// }
// prefixer.prototype.prefixArray=function(arr){
   
//     return arr.map((x)=>{
//         console.log(this.prefix + x);
//     });
// }
// let pre=new prefixer('Hello ');
// pre.prefixArray(['Brad','Jeff']);
// let add=function(a,b){
//     let sum=a+b;
//     console.log(sum);
//      return false
// let add=(a,b)=>{
//          let sum=a+b;
//          console.log(sum);
//           return false  
//  }
// add(6,2);

//immediatly Resolved

// var mypromise=Promise.resolve('Foo');

// mypromise.then((res)=>console.log(res));

// var mypromise=new Promise(function(resolve,reject){
// setTimeout(()=>resolve(6),2000);
// });
// mypromise.then((res)=>{
//     res+=3;
//     console.log(res);
// });

// function getData(method, url){
//     return new Promise(function(resolve, reject){
//       var xhr = new XMLHttpRequest();
//       xhr.open(method, url);
//       xhr.onload = function(){
//         if(this.status >= 200 && this.status < 300){
//           resolve(xhr.response);
//         }else {
//           reject({
//             status: this.status,
//             statusText: xhr.statusText
//           });
//         }
//       };
//       xhr.onerror = function(){
//         reject({
//           status: this.status,
//           statusText: xhr.statusText
//         });
//       };
//       xhr.send();
//     });
//   }
//   getData('GET', 'http://jsonplaceholder.typicode.com/todos').then(function(data){
//     let todos = JSON.parse(data);
//     let output = '';
//     for(let todo of todos){
//       output += `
//         <li>
//           <h3>${todo.title}</h3>
//           <p>Completed: ${todo.completed}</p>
//         </li>
//       `;
//     }
  
//     document.getElementById('template').innerHTML = output;
//   }).catch(function(err){
//     console.log(err);
//   });

function *g1(){
    console.log('Hello');
    yield 'Yield 1 Ran..';
    console.log('World');
    yield 'Yield 2 Ran...';
    return 'Returned..';
  }
  
  var g = g1();
//   console.log(g.next().value);
//   console.log(g.next());
//   console.log(g.next());
//   console.log(g.next().value);

for(let val of g){
    console.log(val);
}
