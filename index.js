// Write your code here:
var student = {
	name : "Ranjan",
	age: 25,
	rollno : 7,
};

student.address = {
    City : "sasaram",
	State: "bihar"
}

//console.log(student);
delete student.rollno;
console.log(student);