console.log("generator function");

function* generatorFunc() {
  yield 2019;
  return "self learn redux-saga";
}

const result = generatorFunc();

console.log("result", result.next());
console.log("result2", result.next());

console.log("infinite loop");

function* infiniteFunc() {
  while (true) {
    yield "im listening...";
  }
}

const interator = infiniteFunc();
console.log("infinite1", interator.next());
console.log("infinite2", interator.next());

console.log("generator function: generator in generator");

function* printName() {
  yield "redux-saga";
}

function* hello() {
  yield "Hello";
  yield* printName();
  yield ".End!";
}

const iterator = hello();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
