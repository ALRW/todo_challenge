(function(){
  var toDoListPage = angular.module('ToDoList', ['ngResource']);

  toDoListPage.controller("ToDoListController", function(){
    var self = this;

    self.taskList = [];
  });
})();
