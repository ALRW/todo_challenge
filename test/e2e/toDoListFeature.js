describe('To Do List: ', function(){
  beforeEach(function(){
    browser.get('http://127.0.0.1:8080');
  });

  it('Loads the homepage', function(){
    expect(browser.getTitle()).toEqual("To do List");
  });

  it('can store a item in the to do list', function(){
    element(by.model('toDoCtrl.toDoTerm')).sendKeys('Pay Bills');
    element(by.id('Add')).click();
    expect(element(by.binding("list.item")).getText()).toEqual('Pay Bills')
  });

});
