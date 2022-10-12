'use strict';
console.log('laikas.js')

// 6-12 = rytas 
// 13-18 = diena 
// 19-23 = vakaras 
// 24 - 5 = naktis

let laikas = 2;

if (laikas >= 6 && laikas <= 12){
    console.log('labas rytas');
}else if(laikas >= 13 && laikas <= 18){
    console.log('laba diena');
}else if(laikas >= 19 && laikas <= 23){
    console.log('labas vakaras')
}else if(laikas = 24 && laikas <= 5){
    console.log('labanakt')
}

// =======

let diena = Math.floor(Math.random() * 7) + 1
    console.log(diena);

    // if (diena === 1 ){
    //     console.log('Pirmadienis');
    // }else if(diena === 2){
    //     console.log('Antradienis');
    // }else if(diena === 3){
    //     console.log('Treciadienis');
    // }else if(diena === 4){
    //     console.log('Ketvirtadienis');
    // }else if(diena === 5){
    //     console.log('Penktadienis');
    // }else if(diena === 6){
    //     console.log('Sestadienis');
    // }else if(diena === 7){
    //     console.log('Sekmadienis');
    // }    

    // ==============

    switch(diena){
        case 1:
            console.log('Pirmadienis');
        break;
        case 2:
            console.log('Antradienis');
        break;
        case 3:
            console.log('Treciadienis');
        break;
        case 4:
            console.log('Ketvirtadienis');
        break;
        case 5:
            console.log('Penktadienis');
        break;
        case 6:
            console.log('Sestadienis');
        break;
        case 7:
            console.log('Sekmadienis');
        break;
        default:
            console.log('Neteisinga diena');
    }