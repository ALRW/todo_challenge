(function(){
  var toDoListPage = angular.module('ToDoList', ['ngResource']);

  toDoListPage.controller("ListController", function(){
    this.taskList = task;
  });

  var task = {
    item: "Pay Bills",
    status: 'incomplete'
  }
})();
