function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

printResult(add(5, 12));

//let combinedValues: Function;
let combinedValues: (a: number, b: number) => number;

combinedValues = add;
// combinedValues = 5; // error if you assign a number value to a function type;
// combinedValues = printResult; // no compile error and the result is undefined when combinedValues is defined as general Function definition.
// combinedValues = printResult; // compile error when combinedValues is defined using a specify Function definition.
console.log(combinedValues(8, 8));
