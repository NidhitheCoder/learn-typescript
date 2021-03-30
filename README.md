# learn-typescript
Learn the basics of typescript with the help of youtube video tutorial.

## What is typescript ?
- Typescript is an open source programming language developed by microsoft. typed superset of javascript.
- Compile down to plain javascript.

## Why we are using typescript 
- Its relation to javascript.
- Optional static typing and and type interface.
- Specifing type is completely optional.
- IDE Support.
- Rapid growth and usage.

## Environmental setup
- Download and install nodejs.
- Install typescript (Npm install -g typescript).
- For type script version check Use the command ' tsc -v'.
- To run ts file 'tsc filename'
- To create js file for ts file run 'node filename'.
- Change make sudden reflection into js file then use ' tsc main.ts --watch'

## Variable declarations
- use Let and Const keywords.
- const type variables should be initialized.

## Variable types.
- types - Boolean, Number, String,enum, null and undefined.
- eg.
  `
   let sample:Boolean = true;
   `

- Advantages :-
  - Helps to reduce errors in our program with static type checking.
  - Helps to intellisence(specific type related items only shown in suggection list).
- Two syntaxes for declaring array type:-
  - let id1:number[] = [1,2,3];
  - let id2:Array<number> = [1,2,3];
- Type inference
- Union of type of same variable(provide intellisence and restrict to that specified datatypes).



