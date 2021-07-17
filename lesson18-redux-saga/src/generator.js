console.log("generator function");

function* generatorFunc() {
  yield 2019;
  return "self learn redux-saga";
}

const result = generatorFunc();

console.log("result", result.next());
console.log("result2", result.next());
