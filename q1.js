/**/
// write your code here

function is_array(input) {
  if (input === [""]) {
    return true;
  } else {
    return false;
  }
}

console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));

// let is_array = function (input) {
//   if (toString.call(input) === "[object Array]") {
//     return true;
//     return false;
//   }
// };
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
