describe('To Do List: ', function(){
  beforeEach(function(){
    browser.get('http://127.0.0.1:8080');
  });

  it('Loads the homepage', function(){
    expect(browser.getTitle()).toEqual("To do List");
  });

  it('can store a item in the to do list', function(){
    element(by.model('listCtrl.taskItem')).sendKeys('Pay Bills');
    element(by.id('Add')).click();
    expect(element(by.binding("item.task")).getText()).toEqual('Pay Bills')
  });

  it('can reset and clear all tasks', function(){
    element(by.model('listCtrl.taskItem')).sendKeys('Pay Bills');
    element(by.id('Add')).click();
    element(by.id('Clear')).click();
    expect(element(by.css(".jumbotron")).getText()).toEqual('Reset list');
  });

});
