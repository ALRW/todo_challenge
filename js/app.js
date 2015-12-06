(function(){
  var toDoListPage = angular.module('ToDoList', ['ngResource']);

  toDoListPage.controller("ToDoListController", function(){
    var self = this;
    var newItem
    self.taskList = [];

    self.addTask = function(){
      newItem = {
        task: self.taskItem,
        complete: false
      };
      self.taskList.push(newItem);
      console.log(self.taskList);
    };

    self.clearTasks = function(){
      self.taskList = [];
    };
  });
})();
