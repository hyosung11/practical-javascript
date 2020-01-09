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

var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};

todoList.addTodo('boolean testing');
todoList.toggleCompleted(0);
