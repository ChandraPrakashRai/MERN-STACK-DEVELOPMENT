console.log(a);      // ✅ <uninitialized> ya temporal dead zone  undefined (hoisted, but value not assigned)
console.log(b);      // ❌ ReferenceError (in TDZ)
greet();             // ✅ Works (function hoisted completely)

var a = 10;
let b = 20;

function greet() {
  console.log("Hello from hoisted function!");
}
