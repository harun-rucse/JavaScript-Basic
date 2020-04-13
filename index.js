// Loop of ES6 / ES2015

// Birth year
const yearOfBirth = [1990, 1995, 1987, 2000, 1999];

// ForEach loop get a callback function with parameter [currElement, currIndex, fullArray ]
yearOfBirth.forEach((el, index, entierArr) => {
    console.log(el);
    console.log(index);
    console.log(entierArr);
});

// Print the current ages
yearOfBirth.forEach(el => {
    const age = new Date().getFullYear() - el;

    console.log(age);
});

// map function/loop
// map loop get a callback function with parameter [currElement, currIndex, fullArray ] and also this return an array
yearOfBirth.map((el, index, entierArr) => {
    console.log(el);
    console.log(index);
    console.log(entierArr);
});

const ages = yearOfBirth.map(el => new Date().getFullYear() - el);

console.log(ages);


////////////////////////////////////////
// This variable
console.log('--------------THIS VARIABLE--------------');

/*
 * in a regular function 'this' variable point to the Global Execution Context object which is window object
 
 * in a method that attatch with an object 'this' variable point to the attatch object
 */

console.log(this);

function fn() {
    // This point window obj
    console.log(this);
}
fn();

const max = {
    name: 'Max Smith',
    yearOfBirth: 1988,
    calcAge: function () {
        //'this' point to the max object
        console.log(this);
    }
}

max.calcAge();


const jane = {
    name: 'Jane Smith',
    yearOfBirth: 1998,
    calcAge: function () {
        //'this' point to the max object
        console.log(this);

        function inner() {
            //inner() function is a regular function so 'this' point to the window object not the jane obj
            console.log(this);
        }
        inner();
    }
}

jane.calcAge();

const anne = {
    name: 'Anne',
    yearOfBirth: 2000,
    calcAge: function () {
        //'this' point to the anne object
        console.log(this);

        function inner() {
            //inner() function is a regular function so 'this' point to the window object not the anne obj
            console.log(this);
            const bob = {
                name: 'Bob',
                yearOfBirth: 1978,
                calcAge: function () {
                    //'this' point to the bob object
                    console.log(this);
                }
            }
            bob.calcAge();
        }
        inner();
    }
}

// This point to the max object
anne.calcAge();
