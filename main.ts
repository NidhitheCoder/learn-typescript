export {}
let message = "Hello world I am here";
console.log(message);

let x = 10;
const y = 20;

let sum;
// const toatal; // return an error that const variable must be initialized.
const title = "Sample project";

let isBeginner:boolean = true;
let total:number = 0;
let name:string = "Smith";

let sentance :string = `My name is ${name}
I am a beginner in typescript`;

console.log(sentance);

let n:null = null;
let m:undefined = undefined;
let isNew :boolean = null;
let myName:string = undefined;

let list1:number[] = [1,2,3];
let list2:Array<number> = [1,2,3];

// Tupling
let list3:[string,number] = ["name",22];

// enum
enum Color {red=4,blue,green};

let c:Color = Color.green;
console.log(`c is ${c} `);

let randomValue:any = 10;
randomValue = "Help";
randomValue = true;

let myVariable :any = 20;
myVariable();
myVariable.toUpperCase();

function hasName(obj:any):obj is {name : string}{
  return !!obj && 
  typeof obj === "object" && 
  name in obj;
}

if(hasName(myVariable)){
  console.log("Myvariable ", myVariable);
}
(myVariable as string).toUpperCase();

// // unknown
// let newVar:unknown = 10;
// // newVar(); //trow error becouse of define as unknown datatype 
// (newVar as string).toUpperCase();
// console.log()