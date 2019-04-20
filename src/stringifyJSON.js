// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
/*
base case = primitives
array case
object case
*/
  var str = '';

  var recursive = function(obj) {

    if (typeof obj === 'string') {
      return '"' + obj + '"';

    } else if (typeof obj === 'boolean' || typeof obj === 'number' || obj === null) {
      return "" + obj;

    } else if (obj === undefined || obj instanceof Function) {
      return undefined;


    //Array Case
    } else if (Array.isArray(obj)) {
      if (obj.length === 0) {        // ADDED
        return '[]';
      }
      for (let x = 0; x < obj.length; x++) {

        if (x === obj.length - 1) {
          str += recursive(obj[x]) ;
        } else {
          str += recursive(obj[x]) + ',';
        }
      }

      return '[' + str + ']';


      // Object Case
    } else if (typeof obj === 'object') {

      for (var key in obj) {
        str += '"' + key + '"' + ':';
        str += recursive(obj[key]);
        str += ',';
      }

      str = str.slice(0, -1); // ADDED
      return '{' + str + '}';
    }
  };
  return recursive(obj);

};


// console.log(stringifyJSON([8, [[], 3, 4]]));// === JSON.stringify([[[[true, null]]]]));
// console.log(JSON.stringify([8, [[], 3, 4]]));

/* GOALS
-efficiency & concise code
-learning mental problem solving/planning techniques
-learning new features of code / ways of thinking

-strategizing our algorithms
-being more active and engaged in conversations
-bring more knowledge to the taable when we have these meetings
*/


