"use strict";

const firebase = require("firebase");
require("firebase/firestore");

var db = firebase.firestore();

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
    //Add to array
    todoController.toDoItems.push({name: addTask, completed: false, closed: false});
    //Add to Firestore
    db.collection("item").add({
        name: addTask,
        completed: false,
        closed: false
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

    console.log(`Added new item successfully!`);
  }
};

//Verify to make sure document item was successfully added to Firestore
db.collection("item").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});


angular
  .module("todoApp")
  .controller("ToDoList", ToDoList);