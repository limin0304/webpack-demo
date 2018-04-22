'use strict';
import React, { Component } from 'react';
import "../../scss/a.scss";
import "../../fonts/demo.css";
import "../../fonts/iconfont.css";
class A extends Component {
    render() {
        return ( <div> I am here ! < /div> ); 
    }
}
// render( <ShowText /> , document.getElementById('roots'));

// var a = [];
// for (let  i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   }
// }
// a[6]();

// {
// 	let c = "var";
// 	let b = "let";
// }
// // console.log(c);
// // console.log(b);

// class Animal {
//     constructor(){
//         this.type = "animal";
//     }
//     says(say){
//         setTimeout(() => {
//             console.log(this.type + " says " + say); 
//             // 当我们使用箭头函数时，函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
//             // 并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，它的this是继承外面的，因此内部的this就是外层代码块的this。
//         }, 1000)
//     }
// }
// let animal = new Animal()
// animal.says("'I am hungry !'");
// //继承
// class Cat extends Animal {
//     constructor(){
//         super()
//         this.type = "cat";
//     }
// } 
// let cat = new Cat()
// cat.says ("'I like fish!'");

// let e = (x,y) => {
//     console.log(x+y);
// }
// e(2,3);

// let a1 = "1";
// let b1 = "2";
// let c1 = "3";
// console.log(`There are <b>${a1}</b> apple,${b1} bananas,${c1} oranges`);

// let dog = {type: "animal",many: "2"};
// let {type: type2, many: many2} = dog;
// console.log(type2 + many2);

// let {length, len} = "abc";
// console.trace(len);
// let {toString, s} = 3;
// console.log(s);

// var sayHello = (name='dude') => {
//     console.log(`Hello ${name}`)
// }
// sayHello();

// var add = (...num) => {
//     return num.reduce((m,n)=>m+n)
// }
// console.log(add(1,2,3,4));

// class AppComponent extends Component {
//     render(){
//         return <div> Hello222 </div>
//     }
// }
// render(<AppComponent /> , document.getElementById('hello') )

// class List extends Component {
//     render() {
//         return (<ol>
//             {
//                 React.Children.map(this.props.children, (child) => {
//                     return <li className='clickBox' style={{backgroundColor: 'red'}}>{child}</li>
//                 })
//             }
//         </ol>)
//     }
// }
// render(
//     <List>
//         <span>Hello</span>
//         <span>MOTO</span>
//         <span>YES</span>
//     </List>,
//     document.getElementById('list') 
// );

// var clickBoxs = document.querySelectorAll('.clickBox')
// for (let i = 0; i < clickBoxs.length; i++){
//     clickBoxs[i].onclick = function(){
//         console.log(i);
//     }
// }
export default A;