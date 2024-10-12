# JavaScript Cheatsheet

## 1. Variables
- **`let`**: Declares a block-scoped variable.
  ```js
  let x = 5;
  ```
- **`const`**: Declares a constant block-scoped variable.
  ```js
  const pi = 3.14;
  ```
- **`var`**: Declares a function-scoped variable (legacy).
  ```js
  var name = "Dev";
  ```

## 2. Data Types
- **String**:
  ```js
  let str = "Hello, World!";
  ```
- **Number**:
  ```js
  let num = 42;
  ```
- **Boolean**:
  ```js
  let isJavaScriptFun = true;
  ```
- **Array**:
  ```js
  let arr = [1, 2, 3, 4];
  ```

- **Object**:
  ```js
  let person = {
    name: "Dev",
    age: 25
  };
  ```

## 3. Functions
- **Function Declaration**:
  ```js
  function greet(name) {
    return "Hello, " + name;
  }
  ```

- **Arrow Function**:
  ```js
  const greet = (name) => `Hello, ${name}`;
  ```

## 4. Conditionals
- **If-Else Statement**:
  ```js
  if (x > 10) {
    console.log("x is greater than 10");
  } else {
    console.log("x is less than or equal to 10");
  }
  ```

- **Switch Statement**:
  ```js
  switch (day) {
    case "Monday":
      console.log("It's Monday!");
      break;
    default:
      console.log("It's not Monday.");
  }
  ```

## 5. Loops
- **For Loop**:
  ```js
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  ```

- **While Loop**:
  ```js
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  ```

- **ForEach Loop (for arrays)**:
  ```js
  const arr = [1, 2, 3, 4];
  arr.forEach(item => console.log(item));
  ```

## 6. Arrays and Methods
- **Push and Pop**:
  ```js
  let fruits = ["apple", "banana"];
  fruits.push("orange"); // ["apple", "banana", "orange"]
  fruits.pop(); // ["apple", "banana"]
  ```

- **Map, Filter, and Reduce**:
  ```js
  let numbers = [1, 2, 3, 4];
  let doubled = numbers.map(num => num * 2); // [2, 4, 6, 8]
  let even = numbers.filter(num => num % 2 === 0); // [2, 4]
  let sum = numbers.reduce((total, num) => total + num, 0); // 10
  ```

## 7. Object Methods
- **Accessing Object Properties**:
  ```js
  let person = {
    name: "Dev",
    age: 25
  };
  console.log(person.name); // "Dev"
  ```

- **Adding Methods to Objects**:
  ```js
  let car = {
    make: "Tesla",
    model: "Model 3",
    start: function() {
      console.log("Car started");
    }
  };
  car.start(); // "Car started"
  ```

## 8. Events (in a browser)
- **Handling Click Events**:
  ```html
  <button onclick="alert('Button clicked!')">Click me</button>
  ```

- **Adding Event Listeners**:
  ```js
  document.querySelector("button").addEventListener("click", function() {
    alert("Button clicked!");
  });
  ```

## 9. Promises and Async-Await
- **Promise**:
  ```js
  let promise = new Promise(function(resolve, reject) {
    let success = true;
    if (success) {
      resolve("Promise fulfilled!");
    } else {
      reject("Promise rejected.");
    }
  });

  promise.then(function(message) {
    console.log(message);
  });
  ```

- **Async-Await**:
  ```js
  async function fetchData() {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  }
  ```

## 10. DOM Manipulation
- **Selecting Elements**:
  ```js
  let element = document.getElementById('myElement');
  let elements = document.querySelectorAll('.myClass');
  ```

- **Changing Content**:
  ```js
  element.innerHTML = "New content!";
  ```

- **Changing Styles**:
  ```js
  element.style.color = "blue";
  ```
