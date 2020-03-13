function ToDoList() {  
    const todoController = this;
    
    //test array to populate list
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
    todoController.completeTask = function(item) {
        console.log('completed');
        let index = todoController.getItemIndex(item);
        console.log(index);
        todoController.toDoItems[index].completed = true;
    }

    //Search list for specific item
    todoController.getItemIndex = function(item) {
        for (let index = 0; index < todoController.toDoItems.length; index++) {
            const element = todoController.toDoItems[index];
            console.log(element,item);
            if ( element.name === item.name )
                return index;
        }
        
    }
  
    // Remove item from list when x button clicked
    todoController.removeTask = function(item) {
        let index = todoController.getItemIndex(item);

        todoController.toDoItems.splice(index,1);
    }
  
    // Add new item when add button clicked
    todoController.add = function(addTask) {
      todoController.toDoItems.push({name: addTask, completed: false, closed: false});
      console.log(`Add new input item when add button clicked.`);
    }
  };

  angular.module('todoApp')
  .component('todoList', {
      controller: ToDoList,
      template: `
      <input type="text" ng-model="filter" placeholder="Search To-Dos" />

      <ol>
        <todo-item 
            ng-repeat="item in $ctrl.toDoItems | filter: filter"
            item="item"
            complete-task="$ctrl.completeTask(item)" 
            remove-task="$ctrl.removeTask(item)"
        >
        </todo-item>      
      </ol>

      <input id="input" type="text" ng-model="addTask" placeholder="Add to list" />
      <button type="submit" class="btnAdd" ng-click="$ctrl.add(addTask)">Add</button>  
      `
  })