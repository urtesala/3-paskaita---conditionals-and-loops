'use strict';
console.log('terenary.js');

// let sentence = '';
// let name = 'Mike';
// let town = 'Kaunas';
// /*  
// sukurti kintamji isStudent (boolean), sukurti kintamaji Name - irasom varda. sukurti town ir irasysim miesta. 
// norim sugeneruoti sakini kintamajame sentence. 
// <vardas> gyvena <miestas> ir studijuoja/ ir dirba
// James gyvena London ir studijuoja
// Mike gyvena Kaunas ir dirba
// */

// let isStudent = false;
// let dirbaArStudijuoja = isStudent ? 'studijuoja' : 'dirba';

// // if (isStudent === true) {
// //   dirbaArStudijuoja = 'studijuoja';
// // } else {
// //   dirbaArStudijuoja = 'dirba';
// // }
// // isStudent === true ? (dirbaArStudijuoja = 'studijuoja') : (dirbaArStudijuoja = 'dirba');

// // sentence = `${name} gyvena ${town} ir ${dirbaArStudijuoja}`;
// sentence = `${name} gyvena ${town} ir ${isStudent ? 'studijuoja' : 'dirba'}`;

// console.log(sentence);

// if (isStudent === true) {
//   // true
// } else {
//   // false
// }

// terenary

// <Salyga> ? true : false ;

// ternary uzduotis

// sukurti kintamanji is isLoggedIn (boolean)
let isLoggedIn = true;
let message = `You are currently${isLoggedIn ? '' : ' not'} logged in to the System`;
// message = 'You are currently not logged in to the System';
console.log(message);