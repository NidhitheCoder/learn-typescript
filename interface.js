// Normal way . it is very difficult when large number of parameters
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "Smith",
    lastName: "Kane"
};
fullName(p);
function fullName2(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p2 = {
    firstName: "Sara",
    lastName: "Williams"
};
fullName2(p2);
