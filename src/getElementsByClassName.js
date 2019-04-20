// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var arr = [];

  var recurse = function (x){

    if(x.classList !== undefined) {
      if(x.classList.contains(className)) {
        arr.push(x);
      }
    }

    if(x.childNodes !== undefined) {
      x.childNodes.forEach( function(element) {
        return recurse(element);
      });
    }
  };

  recurse(document.body);
  return arr;
};