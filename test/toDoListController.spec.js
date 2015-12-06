describe('ToDoListController: ', function(){
  beforeEach(module('ToDoList'));

  var ctrl
  var task = "Pay Bills"
  var task1 = "Buy Car"

  beforeEach(inject(function($controller){
    ctrl = $controller('ToDoListController');
  }));

  it('initializes with an empty list and search box', function(){
    expect(ctrl.taskList).toEqual([])
    expect(ctrl.taskItem).toBeUndefined();
  });

  describe('#addTask', function(){
    it('adds a new task to the task list', function(){
      ctrl.taskItem = task;
      ctrl.addTask();
      expect(ctrl.taskList[0].task).toEqual('Pay Bills')
    });
  });

  describe('#clearTasks', function(){
    it('clears all tasks', function(){
      ctrl.taskItem = task;
      ctrl.addTask();
      ctrl.clearTasks();
      expect(ctrl.taskList).toEqual([]);
    });
  });

  describe('#removeTask', function(){
    it('removes a single task', function(){
      ctrl.taskItem = task;
      ctrl.addTask();
      ctrl.taskItem = task1;
      ctrl.addTask();
      ctrl.removeTask(task1);
      expect(ctrl.taskList).toEqual([{ task: 'Pay Bills', complete: false }]);
    });
  });
});
