var array1 = ['yo', 'hi'];
array1[0] = array1[1]; // array1 = ['yo', 'hi'] => ['hi', 'hi' ]
console.log(array1);

var array2 = ['bye', 'later'];
array2.splice(1, 1); // array2 = ['bye', 'later'] => ['bye']
console.log(array2);

var array3 = [];
array3[0] = array1[0]; // array3 = [] => ['hi']
console.log(array3);
array3[1] = array2[0]; // array3 = ['hi'] => ['hi', 'bye']
console.log(array3);
