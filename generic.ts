const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfString: Array<string> = ['Hello', 'World']

function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

reverse(arrayOfString)
reverse(arrayOfNumbers)
