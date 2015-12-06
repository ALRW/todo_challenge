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
    };

    self.clearTasks = function(){
      self.taskList = [];
    };

    self.removeTask = function(task){
      self.taskList = self.taskList.filter(function(item){
        if (item.task !== task){
          return item
        }
      });
    };
  });
})();
