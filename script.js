// var todoList = {
//   todos: ['item1', 'item2', 'item3'],
//   displayTodos: function() {
//     console.log('My Todos', this.todos);
//   },
//   addToDo: function(todo) {
//     this.todos.push(todo);
//     this.displayTodos();
//   },
//   changeTodo: function(position, newValue) {
//     this.todos[position] = newValue;
//     this.displayTodos();
//   },
//   deleteTodo: function(position) {
//     this.todos.splice(position, 1);
//     this.displayTodos();
//   }
// };
//
// todoList.deleteTodo(1);

// Debugger
// function incrementNumber() {
//   debugger;
//   var currentNumber = 0;
//   for (var i = 0; i < 3; i++) {
//     currentNumber++;
//   }
// }
//
//
// incrementNumber()

// Version 4 - Booleans

// var todoList = {
//   todos: [],
//   displayTodos: function() {
//     console.log('My Todos', this.todos);
//   },
//   addTodo: function(todoText) {
//     this.todos.push({
//       todoText: todoText,
//       completed: false
//     });
//     this.displayTodos();
//   },
//   changeTodo: function(position, todoText) {
//     this.todos[position].todoText = todoText;
//     this.displayTodos();
//   },
//   deleteTodo: function(position) {
//     this.todos.splice(position, 1);
//     this.displayTodos();
//   },
//   toggleCompleted: function(position) {
//     var todo = this.todos[position];
//     todo.completed = !todo.completed;
//     this.displayTodos();
//   }
// };
//
// todoList.addTodo('boolean testing');
// todoList.toggleCompleted(0);

// Version 5 - Loops of Logic

var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      console.log('My Todos:');
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    // this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    // this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    // this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // Get number of completed todos.
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    // Case 1: If everything's true, make everything false.
    if (completedTodos === totalTodos) {
      // make everything false
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    // Case 2: Otherwise, make everything true.
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  }
};

todoList.addTodo('first');
todoList.addTodo('second');
todoList.addTodo('third');
todoList.toggleAll();
todoList.toggleCompleted(0);
// todoList.toggleCompleted(1);
//
// todoList.toggleCompleted(2)
// todoList.toggleAll();
todoList.displayTodos()
