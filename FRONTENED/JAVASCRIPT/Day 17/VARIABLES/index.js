 console.log("VARIABLES...");

//   1. Let 
let a = 5;
console.log(a);
a=10;  // updation is possible in let
console.log(a);

// 2. const

const c = 15;
console.log(c);
// c=20;
console.log(c); // reupdation is not possible
//  ak bar jo value assign ho gyi vo ho gyi 
//  const me value ko dubara assign nhi kr skte


// 3. var (sbse puran way of using variable)

var d = 2;
console.log(d);
var d = 13;  // possible in var 
console.log(d);

if(true){
    var e = "hii";
}

console.log(e); // o/p = hii