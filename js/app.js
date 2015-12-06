(function(){
  var toDoListPage = angular.module('ToDoList', ['ngResource']);

  toDoListPage.controller("ToDoListController", function(){
    var self = this;
    var newItem
    self.taskList = [];

    self.addTask = function(){
      newItem = {
        task: self.taskItem,
        status: "Incomplete"
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

    self.changeStatus = function(task){
      self.taskList.forEach(function(item){
        if(item.task === task && item.status ==="Incomplete"){
          item.status = "Complete";
        }
        else if(item.task === task && item.status === "Complete"){
          item.status = "Incomplete";
        }
      });
    };

  });
})();
