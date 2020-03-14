//Named Function

function addNum(a,b) {
    return a+b;
}


console.log(addNum(3,6));

//Anonymous Function

let i = function(a,b) {
    return a+b;
}

console.log(i(7,7));

setTimeout(function() {
    console.log("this message is displayed after 5 seconds");
},5000);

// Constructor

let b = new Function("a","b","return a+b;");

console.log(b(7,9));

// Self Invoking Function

(function(a,b){
console.log("in self invoking function");
return a+b;
})(2,6);
