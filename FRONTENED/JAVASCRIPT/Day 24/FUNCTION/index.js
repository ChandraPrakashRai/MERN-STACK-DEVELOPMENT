console.log("=== 1) Function Declaration (hoisted) ===");
// can be called before its definition (hoisting)
console.log("sum(2,3) ->", sum(2, 3)); // 5
function sum(a, b) {
  return a + b;
}

console.log("\n=== 2) Function Expression (named/anonymous assigned to variable) ===");
// not hoisted the same way — must be defined before use
const multiply = function (a, b) {
  return a * b;
};
console.log("multiply(4,5) ->", multiply(4, 5)); // 20

console.log("\n=== 3) Arrow Function (short syntax, lexical `this`) ===");
const square = x => x * x;
console.log("square(6) ->", square(6)); // 36

console.log("\n=== 4) Immediately Invoked Function Expression (IIFE) ===");
// runs right away, useful for creating a private scope
const iifeResult = (function (name) {
  const greeting = `Hello, ${name}! (from IIFE)`;
  return greeting;
})("Chandra");
console.log("IIFE returned ->", iifeResult);

console.log("\n=== 5) Generator Function (yields multiple values lazily) ===");
// use function* and yield; iterate with .next() or for..of
function* idGenerator(start = 1) {
  let id = start;
  while (true) {
    yield id++;
  }
}
const gen = idGenerator(100);
console.log("gen.next().value ->", gen.next().value); // 100
console.log("gen.next().value ->", gen.next().value); // 101
console.log("gen.next().value ->", gen.next().value); // 102