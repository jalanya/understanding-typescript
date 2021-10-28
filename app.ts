const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

person.role.push('admin'); // This is gonna work! Unfortunately, .push does not catch the error
// person.role[1] = 10; // it can't assign number value to string type definition
// person.role = [0, 'admin', 'user'] // error due to: more elements

console.log(person);

let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Player'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
  // console.log(hobby.map()) // !!! ERROR !!!
}

const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
} = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}

console.log (product);
