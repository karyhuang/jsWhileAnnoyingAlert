var answer = prompt("Are we there yet?");

// check if the entire string is 'yes' or 'yeah'
while (answer !== "yes" && answer !== "yeah") {
  var answer = prompt("Are we there yet?");
}
alert("YAY! We finally made it!");


// ADVANCED VERSION: any string that contains the word 'yes' will work
var answer2 = prompt("Advanced Version: Are you there yet?");

// indexOf(x) is -1 means x does not exist in the string
// if x exists in the string, indexOf(x) will return its starting position
// if 'yes' does not exist in the answer2 string, it will keep asking
while (answer2.indexOf('yes') === -1) {
  var answer2 = prompt("Are we there yet?");
}
alert("YAY! You finally made it!");