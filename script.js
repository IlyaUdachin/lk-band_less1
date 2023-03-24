// console.log("First");

// setTimeout(function() {
//   console.log("Second")
// }, 10);

// setTimeout(function() {
//   console.log("Fourh")
// }, 0);

// console.log("Third");


function foo() {
  console.log("foo");
}

function bar() {
  foo();
  console.log("bar");
}

function baz() {
  bar();
  console.log("baz");
}

// foo()
// bar()
baz();

// baz => bar => foo

function getBook(book, result) {
  result(book);
}

getBook("Исскуство программирования", function(b) {
  console.log(b + " is good!");
})

let p1 = new Promise(function(resolve, reject) {
  let n = Math.random();
  if (n > 0.5) {
    resolve("Хлеб был куплен.");
  } else {
    reject("Проблемки с хлебушком =(")};
});

let p2 = new Promise(function(resolve, reject) {
  let n = Math.random();
  if (n > 0.2) {
    resolve("Хлебушек нарезан");
  } else {
    reject("Что-то посло не так");
  }
})

p1
  .then(function(result) {
    console.log(result);
    return p2;
  })
  .then(function(result2) {
    console.log(result2)
    console.log("Ужин удался!")
  })
  .catch(function(err) {
    console.warn(err);
  })