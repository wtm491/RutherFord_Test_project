function todoItem() {  
    const todoController = this;
    console.log(todoController)
  };

  angular.module('todoApp')
  .component('todoItem', {
      controller: todoItem,
      template: `
      <li ng-class="{complete: $ctrl.item.completed}">
        <button class="btnComplete" ng-if="!$ctrl.item.completed" ng-click="$ctrl.completeTask({item: $ctrl.item})">Complete</button>
            {{$ctrl.item.name}}
        <button class="btnClose" ng-click="$ctrl.removeTask({item: $ctrl.item})">x</button>
    </li>
      `,
      bindings: {
          'item': '<',
          'removeTask': '&',
          'completeTask': '&'
      }
  })