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
    expect(element.all(by.binding("item.task")).first().getText()).toEqual('Pay Bills')
  });

  it('can reset and clear all tasks', function(){
    element(by.id('ClearAll')).click();
    expect(element(by.css(".jumbotron")).getText()).not.toMatch(/Pay Bills/);
  });

  xit('can remove a single item from the list', function(){
    element.all(by.model('listCtrl.taskItem')).first().sendKeys('Buy Car');
    element.all(by.id('Add')).first().click().then(function(){
      element(by.id('Remove')).click().then(function(){
        expect(element.all(by.binding("item.task")).first().getText()).toEqual('Pay Bills');
      })
    })

  });

  xit("can show whether a task is complete or not", function(){
    expect(element.all(by.id('status')).first().getText()).toEqual('Incomplete');
    element.all(by.id('status')).first().click().then(function(){
      element(by.id('thirdtab')).click(). then(function(){
        setTimeout(function(){
        expect(element(by.id('status')).getText()).toEqual('Complete');}, 1000);
      });
    })
  });

  xit("can clear all completed tasks", function(){
    element(by.model('listCtrl.taskItem')).sendKeys('Buy Car');
    element(by.id('Add')).click();
    element.all(by.id('status')).last().click();
    element(by.id('Clear')).click();
    expect(element.all(by.binding("item.task")).last().getText()).toEqual('Pay Bills')
  });

  xit('tabs can be used to sort tasks', function(){
    element(by.model('listCtrl.taskItem')).sendKeys('Buy Car');
    element(by.id('Add')).click();
    element.all(by.id('status')).last().click();
    element(by.id('secondtab')).click();
    expect(element(by.binding("item.task")).getText()).toEqual('Pay Bills')
    element(by.id('thirdtab')).click();
    expect(element(by.binding("item.task")).getText()).toEqual('Buy Car')
  });
});
