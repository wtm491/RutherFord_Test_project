"use strict";


function ToDoList() {  
  const todoController = this;
  
  //Test array to populate list
  todoController.toDoItems = [
    {
    name: 'Test item 1',
    completed: false,
    closed: false,
    },
    {
    name: 'Test item 2',
    completed: false,
    closed: false,
    },
    {
    name: 'Test item 3',
    completed: false,
    closed: false,
    },
   
  ]
  
  // Cross item out when complete button cliked
  todoController.completeTask = function(completed) {
    console.log(`Cross out item when complete button clicked.`);
    return completed = true;
  }

  // Remove item when x button clicked
  todoController.removeTask = function(closed) {
    console.log(`Remove item when x button clicked.`);
    return closed = true;
  }

  // Add new item when add button clicked
  todoController.add = function(addTask) {
    todoController.toDoItems.push({name: addTask, completed: false, closed: false});
    console.log(`Add new item when add button clicked.`);
  }
};

angular
  .module("todoApp")
  .controller("ToDoList", ToDoList);