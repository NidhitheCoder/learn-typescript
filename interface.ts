// Normal way . it is very difficult when large number of parameters
function fullName(person: { firstName: string; lastName: string }) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: "Smith",
  lastName: "Kane",
};

fullName(p);

//  New and easy way with interface
interface Person {
  firstName: string;
  lastName: string;
}

function fullName2(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p2 = {
  firstName: "Sara",
  lastName: "Williams",
};

fullName2(p2);
