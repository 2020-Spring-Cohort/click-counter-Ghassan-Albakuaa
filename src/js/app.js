








describe("Counting clicks" , function(){
  var count = 0;
  beforeEach(function(){
    count++;
  });
  afterEach(function(){
    count=0;
  });
  it ("has a counter that increments" , function(){
    expect(count).toBe(1);
  });
});




describe("Pending specs", function(){

  xit("can start with an xit", function(){
    expect(true).toBe(true);
  });

  it("is a pending test if there is no callback function");

  it("is pending if the pending function is invoked inside the callback", function(){
    expect(2).toBe(2);
    pending();
  });

});

/*
beforeEach(function() {
           var fix= '<div id="click"</div>';
           document.body.insertAdjacentHTML(
          'afterbegin' , fix);
           });

afterEach(function () {
  document.body.removeChild(document.getElementById('click'));
});

describe('content' , function () {
  it('show div', function (){
    showDiv();
  })
})

*/
it("allows for easy type checking", function() {
        expect([]).toEqual(jasmine.any(Array));
        expect(function(){}).toEqual(jasmine.any(Function));
      });


 describe("value of clicks Matchers", function() {
      it("allows for === and deep equality", function() {
        expect(1.2*1.2).toBe(1.44);
        expect(1.4*1.4).toBe(1.9599999999999997);
      });
      
      it("allows for easy truthy / falsey checking", function() {
        expect(0).toBeFalsy();
        expect([]).toBeTruthy();
      });
      
      it("allows for checking contents of an object", function() {
        expect([1,2,3]).toContain(1);
        expect({name:'Ghassan', job:'Student'}).toEqual(jasmine.objectContaining({name:'Ghassan'}));
      });
    });