console.log('Your code goes here...')

// Basic/Core types JS
const number1 = 2.5;

const string1 = 'This is string';

const boolean1 = true;

const object1 = {'Hi object': 1};

const array1 = ["Hi array"]; 

// Typescript adds some extensions

// we cant push to this -> change lenght and type
const tupple1: [number, string] = [ 3, 'menager'];

// Enumerate
// ex. 1
enum Role {ADMIN, READ_ONLY, AUTHOR}
// ex. 2
enum Role2 {ADMIN = 5, READ_ONLY, AUTHOR}

const personWithEnum: {
    name: string,
    age: number,
    hobbies: string[],
    role: Role
} = {
    name: "Dino",
    age: 36,
    hobbies: ['Sports', 'Formula 1'],
    role: Role.ADMIN
};

const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string]
} = {
    name: "Dino",
    age: 36,
    hobbies: ['Sports', 'Formula 1'],
    role: [2, 'author'] 
};

// How to push -> we can still push 
person.role.push('try');
// Change type !not allowed
//person.role[1] = 10;
// Change length !not allowed
//person.role = [0, 'admin', 'menager']

// Any array type mix (Back in JS world)
let anyTypeMix: any;
anyTypeMix = ["Dino", 1]

// Specific array type mix
let favoriteActivities: string[];
favoriteActivities = ["Dino", "Lozina"];

console.log(person.name);

// For loop ex.1
for (const hobby of person.hobbies){
    // Do something
    console.log(hobby.toUpperCase())
}




