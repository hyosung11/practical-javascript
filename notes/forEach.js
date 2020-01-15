const students = ['Sohee', 'Omi', 'SungOh', 'HyoSung'];

function logName(name) {
  console.log(name);
}

// logName(family[0])
// logName(family[1])
// logName(family[2])
// logName(family[3])

// for (let i = 0; i < family.length; i++) {
//   logName(family[i])
// }

// students.forEach(logName)

// family.forEach(function logName(name) {
//   console.log(name);
// });

// family.forEach(function(name) {
//   console.log(name);
// })

function forEach(myArray, myFunction) {
  for (let i = 0; i < myArray.length; i++) {
    myFunction(myArray[i]);
  }
}

// forEach(students, function(student) {
//   console.log(student);
// })

forEach(students, logName);
