
let age = Number( prompt("How old are you?"));
if (age < 0){
  alert("error message");
} if (age === 21){
    alert("Happy 21st Birthday");

} if (age % 2 !== 0){
  alert("your age is odd!")
} if (age % Math.sqrt(age) === 0){
    alert("perfect square");
}