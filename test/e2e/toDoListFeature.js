describe('To Do List: ', function(){
  beforeEach(function(){
    browser.get('http://127.0.0.1:8080');
  });

  beforeEach(function(){
    element(by.model('listCtrl.taskItem')).sendKeys('Pay Bills');
    element(by.id('Add')).click();
  });

  it('Loads the homepage', function(){
    expect(browser.getTitle()).toEqual("To do List");
  });

  it('can store a item in the to do list', function(){
    expect(element(by.binding("item.task")).getText()).toEqual('Pay Bills')
  });

  it('can reset and clear all tasks', function(){
    element(by.id('ClearAll')).click();
    expect(element(by.css(".jumbotron")).getText()).not.toMatch(/Pay Bills/);
  });

  it('can remove a single item from the list', function(){
    element(by.model('listCtrl.taskItem')).sendKeys('Buy Car');
    element(by.id('Add')).click();
    element.all(by.id('Remove')).last().click();
    expect(element(by.binding("item.task")).getText()).toEqual('Pay Bills')
  });

  it("can show whether a task is complete or not", function(){
    expect(element(by.id('status')).getText()).toEqual('Incomplete');
    element(by.id('status')).click();
    expect(element(by.id('status')).getText()).toEqual('Complete');
  });

  it("can clear all completed tasks", function(){
    element(by.model('listCtrl.taskItem')).sendKeys('Buy Car');
    element(by.id('Add')).click();
    element.all(by.id('status')).last().click();
    element(by.id('Clear')).click();
    expect(element.all(by.binding("item.task")).last().getText()).toEqual('Pay Bills')
  });

  it('tabs can be used to sort tasks', function(){
    element(by.model('listCtrl.taskItem')).sendKeys('Buy Car');
    element(by.id('Add')).click();
    element.all(by.id('status')).last().click();
    element(by.id('secondtab')).click();
    expect(element(by.binding("item.task")).getText()).toEqual('Pay Bills')
    element(by.id('thirdtab')).click();
    expect(element(by.binding("item.task")).getText()).toEqual('Buy Car')
  });
});
