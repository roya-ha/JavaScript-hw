//Student Information
let studentName = "Roya";
let age = 20;
let score = "87.456";

//Strings Methods 
console.log(studentName.toUpperCase());
console.log(studentName.toLowerCase());
console.log(studentName.trim());
console.log(studentName.length);

//Type Conversion
let numberAge = Number(age);
let numberScore = Number(score);

console.log(typeof numberAge);
console.log(typeof numberScore);

//"NaN" Practice
let result = Number("Hello");
console.log(result);
console.log(typeof result);

//Type Coercion
console.log("10" + 5);
console.log("10" - 5);
console.log("10" * 5);

//Debugging Challenge
let StudentName = "Sara";
console.log(StudentName);
console.log("Hello");

//Bonus Challenge
console.log("Student: " + studentName.toUpperCase());
console.log("Age: " + Number(age));
console.log("Score: " + Number(score));