//12 inch = 1ft

// inch to feet

function inchToFeet(inch){
    const feet = inch / 12;
    return feet
}

// const ph =inchToFeet(80);
// // console.log(ph);

function inToFt (inches){

    const ft = inches / 12;
    const feetNum = parseInt(ft);
    const findInches = inches % 12 ;
    const result = feetNum + " ft " + findInches + " inches"; 
    return result;  
}
const ru = inToFt(62);
// console.log(ru);


