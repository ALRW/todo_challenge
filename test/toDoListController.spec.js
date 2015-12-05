describe('ToDoListController: ', function(){
  beforeEach(module('ToDoList'));

  var ctrl

  beforeEach(inject(function($controller){
    ctrl = $controller('ToDoListController');
  }));

  it('initializes with an empty list and search box', function(){
    expect(ctrl.taskList).toEqual([])
    expect(ctrl.taskItem).toBeUndefined();
  });

  describe('#addTask', function(){

  });
});
