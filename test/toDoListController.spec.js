describe('ToDoListController: ', function(){
  beforeEach(module('ToDoList'));

  var ctrl
  var task = "Pay Bills"

  beforeEach(inject(function($controller){
    ctrl = $controller('ToDoListController');
  }));

  it('initializes with an empty list and search box', function(){
    expect(ctrl.taskList).toEqual([])
    expect(ctrl.taskItem).toBeUndefined();
  });

  describe('#addTask', function(){
    it('adds a new task to the task list', function(){
      ctrl.taskItem = task
      ctrl.addTask();
      expect(ctrl.taskList[0].task).toEqual('Pay Bills')
    });
  });
});
