describe('To Do List', function(){
  it('has a title', function(){
    browser.get('http://127.0.0.1:8080');

    expect(browser.getTitle()).toEqual("To do List");
  });
});
