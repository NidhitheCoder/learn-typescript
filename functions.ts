// function add(num1:number, num2:number):number {
// function add(num1:number, num2?:number):number {
  function add(num1:number, num2:number=20):number {
  if(num2) {
  return num1 + num2;
  }
  return num1;
};

console.log(add(5,10));
// console.log(add(5,'10')); it is return an error parameter type number error.
console.log(add(4));
