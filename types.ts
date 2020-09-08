//string number boolean object tuple any function

//boolean
const flag: boolean = false;

//number
const int: number = 42;
const float: number = 42.2;
const num: number = 3e10;

// string
const message: string = 'Hello world';

//array
const numberArray1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numberArray2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const words: string[] = ['Hello', 'world'];

//Tuple
const tuple: [string, number] = ['Pew pew', 42];

//Any
let variable: any = 42
variable = 'new string'
variable = []

//function
const someFoo = (name: string): void => {
  console.log(name);
}

someFoo('Hello')

//Never
const throwError = (message: string): never => {
  throw new Error(message)
}

const inf = (): never => {
  // let a = false
  while (true) {
    // a = !a;
  }
}

//Type
type Login = string
const login: Login = 'admin';

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234zxc'

type SomeType = string | null | undefined
