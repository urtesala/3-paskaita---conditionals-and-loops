'use strict';
console.log('uzduotys.js');

// grupe ============

let zmoniuSk = 18;

let atsakymas = '';

if(zmoniuSk === 0) {
    atsakymas = 'ne grupe'
} else if (zmoniuSk === 1) {
    atsakymas = 'solo';
}else if (zmoniuSk === 2) {
    atsakymas = 'duetas';
}else if (zmoniuSk === 3) {
    atsakymas = 'trio';
}else if (zmoniuSk === 4) {
    atsakymas = 'kvartetas';
}else {
    atsakymas = 'didele grupe'
}

console.log(atsakymas);

// -------------------- vardai

let vardas = 'urte';
let vardassk = vardas.length;

if(vardassk > 5) {
    vardassk = 'ilgas vardas'
} else if (vardassk <5) {
        vardassk = 'trumpas vardas';
}

console.log(vardassk)

// ===== client age

let legalAge = 18;
let clientAge = 17;

if (clientAge>legalAge){
    console.log('can drive')
} else if(clientAge<legalAge){
    console.log('cant drive')
}

// ========iphone user

let phone = 'samsung';
let iPhone = 'iPhone';

if(phone === iPhone){
    console.log('Naudoja iPhone')
}else {
    console.log('Naudoja ne iPhone')
};

// =====auto

let car = 'Mini';

switch (car) {
  case 'VW':
  case 'Audi':
  case 'Bentley':
  case 'Bugatti':
  case 'Lamborghini':
  case 'Porsche':
    console.log('Mašina priklauso VW group');
    break;
  case 'BMW':
  case 'Mini':
  case 'Rolls-Royce':
    console.log('Mašina priklauso BMW group');
    break;
  default:
    console.log('Nepriklauso nei vienam');
}

// if (
//   car === 'VW' ||
//   car === 'Audi' ||
//   car === 'Bentley' ||
//   car === 'Bugatti' ||
//   car === 'Lamborghini' ||
//   car === 'Porsche'
// ) {
//   console.log('VW group priklauso');
// } else if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce') {
//   console.log('BMW group priklauso');
// } else {
//   console.log('Nepriklauso nei vienam');
// }


// ========= admin user

// Perdaryti admin ir user11 uzduoti su && ar || 
// sutaupant eiluciu ir pasikartojima (jei nebuvote pasidare 
//     jau pries tai su && ar ||)



// if(userName==="admin"){
//         return password==="master",
//         console.log('Sveiki, admin');
//       }else if(userName==='!=admin'){
//         return password===userName+"11",
//         console.log('Sveiki, vartotojau')
//       }

let username = 'kurmis';
let password = 'kurmis11';



if (username === '') {
  console.log('viso gero');
} else if (username === 'admin'&& password === 'master') {
    console.log('hello admin');
  } else if (username !== 'admin' && password === `${username}11`) {
    console.log(`welcome back ${username}`);
} else {
  console.log('neteisingas slaptazodis');
}


// ----lyginiai etc

let sk = 458710;

if (sk % 2 === 0) {
  // lyginis
  console.log(sk, 'lyginis');
} else {
  console.log(sk, 'nelyginis');
}

console.log(sk, `${sk % 2 === 0 ? '' : 'ne'}lyginis`);
console.log(sk, sk % 2 === 0 ? 'lyginis' : 'nelyginis');