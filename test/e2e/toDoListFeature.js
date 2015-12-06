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
    expect(element(by.binding("item.task")).getText()).toEqual('Pay Bills Remove')
  });

  it('can reset and clear all tasks', function(){
    element(by.model('listCtrl.taskItem')).sendKeys('Pay Bills');
    element(by.id('Add')).click();
    element(by.id('Clear')).click();
    expect(element(by.css(".jumbotron")).getText()).toEqual('Reset list');
  });

  it('can remove a single item from the list', function(){
    element(by.model('listCtrl.taskItem')).sendKeys('Pay Bills');
    element(by.id('Add')).click();
    element(by.model('listCtrl.taskItem')).sendKeys('Buy Car');
    element(by.id('Add')).click();
    element.all(by.id('Remove')).last().click();
    expect(element(by.binding("item.task")).getText()).toEqual('Pay Bills Remove')
  });
});
