<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

`Explain:` First, here declared a variable as `greeting`, Instead, there's an attempt to create an object and assign it to a misspelled variable `greetign`. `greeting` variable is not being used. However, JavaScript is allows to create a new variable by misspelling an existing one. In this case, `greetign` becomes a new global variable, and `greeting` remains undefined.

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

`Explain:` In this code, when sum function called with two parameters then it try to add these two parameters and returns the result.
Then, the function sum is called with the arguments 1 and "2".
Here, 1 is number and "2" is string. In this case, it will try to convert the number 1 to a string and concatenate it with the string "2". Because JavaScript does automatic type conversion.
However, the + operator is used for both addition and string concatenation. So, "1" is concatenated with "2". when function calls and stores a variable, it console log the variable and displays the result "12".

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

`Explain:` In this code, there is an array food containing four food items. There is also an object info with a property favoriteFood, try to reassigning a new food item here. However, this reassignment does not affect the original food array in any way. Because in JavaScript arrays and objects are reference types variables. it is actually stores references to the memory locations. So, modification of the info object's property does not affect the original food array.

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

`Explain:` In this code, there's a JavaScript function called sayHi that takes one parameter name. The function returns a string that includes the provided name parameter inside a template literal.
when the function is called its expects a name parameter to be passed but here no argument is provided. So, the name parameter inside the function is undefined.

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

`Explain:` In this code, there's a variable count initialized to 0 and an array nums containing four elements: [0, 1, 2, 3]. ForEach method is used on the nums array. Inside the forEach loop, its takes a parameter num and the function checks the current element num is truthy or not, if it is truthy then it increments the count variable by 1. Only 0 elements in this nums array is false value.

</p>
</details>
