# Practical JavaScript

Practical JavaScript Course from Watch and Code by Gordon Zhu

## Introduction

### What is Practical Javascript?

### The voice in your ear

### Is this course right for you?

### Everything is a todo list

### What you'll build

### The development process

### Approach - three stages

1. Introduction to the mechanics of programming

2. Read code so you can make sense of existing programs. This is the most important part.  

3. Learn through contributing to existing software projects. Role changes from consumer (someone who just reads code) to producer (someone who writes code). All good programmers know that you'll spend much more time reading than writing code.

### Browser - Google Chrome for this course

## Support

- Weekly office hours on Mondays at 6 PM PST
- private Slack group for Premium Membership
- *For all its power, the computer is a harsh taskmaster. Its programs must be correct, and what we wish to say must be said accurately in every detail.* —Alan Perlis

## Version 1 - Requirements

### Requirements

- [x] 1. It should have a place to store todos
- [X] 2. It should have a way to display todos
- [x] 3. It should have a way to add todos
- [x] 4. It should have a way to edit a todo
- [x] 5. It should have a way to remove a todo

## Version 2 - Functions

1. It should have a function to display todos
2. It should have a function to add todos
3. It should have a function to change todos
4. It should have a function to delete todos

## Interlude - Functions and variables

- If you're inside a function, you can look out and see data, but the opposite isn't true. If you're outside, you can't look in.
- Circles and arrows: can draw an arrow from inside a function to outside but not the other way around.

## Interlude - editor setup

- Visual Studio Code

## Version 3 - Objects

### What is an object?

### Objects and functions

- `this` refers to the object
- method is a property that's equal to a function
- anonymous function is a function that doesn't have a name

### V3 Requirements

1. It should store the todos array on an object
2. It should have a displayTodos method
3. It should have an addTodos method
4. It should have a changeTodo method
5. It should have a deleteTodo method

## Interlude - Success is the process

- Ability = Process * Time

- [How to be great at asking coding questions](https://medium.com/@gordon_zhu/how-to-be-great-at-asking-questions-e37be04d0603)

- [debugger](https://www.youtube.com/watch?v=zv_aOlH8S_o&feature=youtu.be)

```JavaScript
// Debugger
function incrementNumber() {
  debugger;
  var currentNumber = 0;
  for (var i = 0; i < 3; i++) {
    currentNumber++;
  }
}

incrementNumber();
```

## Version 4 - Booleans

### V4 Requirements

- todoList.addTodo should add objects
- todoList.changeTodo should change the todoText property
- todoList.toggleComplete should change the completed property

## Version 5 - Loops of Logic

- The for loop
- Looping over arrays

### V5 Requirements

- .displayTodos should show .todoText
- .displayTodos should tell you if .todos is empty
- .displayTodos should show .completed

## Version 6 - Thinking in Code

### Requirements [todomvc](http://todomvc.com/examples/vanillajs/)

- .toggleAll: If everything's true, make everything false
- .toggleAll: Otherwise, make everything true

## Interlude - Data types and comparisons

- Objects (can be as complex as you want)
  - {} // todoList, arrays, functions

- Primitives (building blocks)
  - string
  - number
  - boolean
  - undefined
  - null

### Comparison with primitives (just like math class)

### Comparisons with objects (location in memory)

### How are primitives and objects stored inside of variables?

## Version 7 - HTML and the DOM

- there should be a "Display todos" button and a "Toggle all" button in the app.
- clicking "Display todos" should run todoList.displayTodos.
- clicking "Toggle all" should run todoList.toggleAll.

## Interlude - Don't wonder about things the debugger can tell you

- Use the debugger all the time
- Focus on understanding, not building from scratch

## Version 8 - Getting data from inputs

- our first refactoring
- refactoring is a part of the development process and happens all the time in production.

### V8 Requirements

- It should have working controls for .addTodo
- It should have working controls for .changeTodo
- It should have working controls for .deleteTodo
- It should have working controls for .toggleCompleted

## Version 9 - Escape from the console

### V9 Requirements

- There should be an li element for every todo
- Each li element should contain .todoText
- Each li element should show completed

## Interlude - Functions inside of functions

- runWithDebugger()
- setTimeout()
- forEach()
- addEventListener()
- Buzzwords: higher order functions and callback functions
- Higher Order Functions
  - functions that accept other functions
  - enhance the behavior of other functions
- Callback Functions
  - functions that are passed into higher order functions

## Version 10 - Click to delete

### V10 Requirements

- There should be a way to create delete buttons
- There should be a delete button for each todo
- Each li should have an id that has the todo position
- Delete buttons should have access to the todo id
- Clicking delete should update todoList.todos and the DOM

#### Event Delegation

- [What is DOM Event delegation?](https://stackoverflow.com/questions/1687296/what-is-dom-event-delegation)

## Version 11 - Destroy all for loops

### V11 Requirements

- todoList.toggleAll should use forEach
- view.displayTodos should use forEach

## Interlude - Understanding "this"

- The [cheatsheet](https://github.com/hyosung11/cheatsheet-js)
- Case 1: In a regular function (or if you're not in a function at all), `this` points to `window`. This is the default case.
- Case 2: When a function is called as a method, this points to the object that's on the left side of the dot.
- Case 3: In a function that's being called as a constructor, this points to the object that the constructor is creating.
- Case 4: When you explicitly set the value of `this` manually using `bind`, `apply`, or `call`, it's all up to you.
- Case 5: In a callback function, apply the above rules methodically.

