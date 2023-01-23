let testScore = 49;
let myGrade = testScore > 89 ? "A"
:testScore > 79
? "B"
: testScore > 69
? "C"
: testScore > 59
? "D"
: "E";
console.log(`My test grade is a ${myGrade}`);