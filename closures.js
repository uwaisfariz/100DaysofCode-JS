//Example 0
  
  var someFunction = function(){
    var a = 3, b = 5;
  
    var someOtherFunction = function(){
      var b = 7, c = 11;
  
      //at this point a is 3, b is 7 and c is 11
  
      a += b + c;
  
      //at this point a is 21, b is 7 and c is 11
    };
  
    //at this point a is 3, b is 5 and c is not defined
  
    someOtherFunction();
  
    //at this point a is 21, b is 5
  };

  //Example 1

  function displayMyName() {
    let name = "Dominic";
    function printName() {
      console.log(name);
    }
    return printName;
  }
  
  var myName = displayMyName();
  myName();

//Example 2

var before = 100;
function testFunction() {
    console.log(before); // will output 100
    console.log(after); // will output 99
}
var after = 99;
testFunction();


//Example 3

function output100() {
    // Local variable that ends up within closure
    var num = 6;
    var sayAlert = function() { console.log(num); }
    num++;
    return sayAlert;
}
var sayNumber = output100();
sayNumber(); // alerts 7