// Case 1: In a regular function (or if you're not in a function at all), `this` points to `window`. This is the default case.

// function logThis() {
//   console.log(this);
// }
//
// logThis();
// window in the browser

// In strict mode, `this` will be `undefined` instead of `window`.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

// Case 2: When a function is called as a method, this points to the object that's on the left side of the dot.

/*
 * You can also think of this as the "left of the dot" rule.
 * For example, in myObject.myMethod(), `this` will be myObject
 * because myObject is to the left of the dot.
 *
 * Of course, if you're using this syntax myObject['myMethod'](),
 * technically it would be the "left of the dot or bracket" rule,
 * but that sounds clumsy and generally terrible.
 *
 * If you have multiple dots, the relevant dot is the one closest
 * to the method call. For example, if you have one.two.hi();
 * `this` inside of hi will be two.
 */

// var myObject = {
//   myMethod: function() {
//     console.log(this);
//   }
// };
//
// myObject.myMethod(); // myObject

// Case 3: In a function that's being called as a constructor, this points to the object that the constructor is creating.

// function Person(name) {
//   // this = {};
//   this.name = name;
//   // return this;
// }
//
// const omi = new Person('Omi');
// console.log(omi); // {name: 'Omi'}

// Case 4: When you explicitly set the value of this manually using bind, apply, or call, it's all up to you.

// function logThis() {
//   console.log(this);
// }

// logThis();

// `bind`
// Method on functions
// Returns a copy of the function where `this`
// is set to the first argument passed into .bind().

// var explicitlySetLogThis = logThis.bind({name: 'Gordon'});
//
// explicitlySetLogThis(); // {name: 'Gordon'}

// logThis.apply({name: 'Sohee'});
// logThis.call({name: 'Sohee'});

// function logThisWithArguments(greeting, name) {
//   console.log(greeting, name);
//   console.log(this);
// }

// logThisWithArguments('Namaste', 'SungOh');

// logThisWithArguments.apply({name: 'SungOh'}, ['hola', 'SungOh']);
// logThisWithArguments.call({name: 'SungOh'}, 'hola', 'SungOh');

//
// // Note that a function returned from .bind (like `boundOnce` below),
// // cannot be bound to a different `this` value ever again.
// // In other words, functions can only be bound once.
// var boundOnce = logThis.bind({name: 'The first time is forever'});
//
// // These attempts to change `this` are futile.
// boundOnce.bind({name: 'why even try?'})();
// boundOnce.apply({name: 'why even try?'});
// boundOnce.call({name: 'why even try?'});

// Case 5: In a callback function, apply the above rules methodically.

// function outerFunction(callback) {
//   callback();
// }
//
function logThis() {
  console.log(this);
}
//
// /* Case 1: The regular old default case. */
//
// outerFunction(logThis); // window

/* Case 2: Call the callback as a method
 * (You'll probably NEVER see this, but I guess it's possible.) */

// function callAsMethod(callback) {
//   var weirdObject = {
//     name: "Don't do this in real life"
//   };
//
//   weirdObject.callback = callback;
//   weirdObject.callback();
// }
//
// callAsMethod(logThis); // `weirdObject` will get logged to the console

/* Case 3: Calling the callback as a constructor.
 * (You'll also probably never see this. But in case you do...) */

function callAsConstructor(callback) {
  new callback();
}

callAsConstructor(logThis); // the new object created by logThis will be logged to the console

/* Case 4: Explicitly setting `this`. */

function callAndBindToGordon(callback) {
  var boundCallback = callback.bind({name: 'Gordon'});
  boundCallback();
}

callAndBindToGordon(logThis); // {name: 'Gordon'}

// In a twist, we give `callAndBindToGordon` a function that's already been bound.
var boundOnce = logThis.bind({name: 'The first time is forever'});
callAndBindToGordon(boundOnce); // {name: 'The first time is forever'}
