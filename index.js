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


console.log('--------------THIS VARIABLE IN ARROW FUNCTION--------------');

/*
 * in Arrow function share the lexical 'this' keyword of its surrounding
 */

// ES5
const box5 = {
    position: 1,
    color: 'green',
    clickMe: function () {
        // Here 'this' variable point to the box object
        console.log(this);

        /*
         * To get the box object in this annonimous function then assign 'this' in another variable(self)
         * Then self variable point to the box object
         * Kind of small [hack]
         */
        const self = this;

        document.querySelector('.box-green').addEventListener('click', function () {
            //This annonimous function is regular function so here 'this' does not point box object
            alert(`This is number ${self.position} box and its color is ${self.color}`);
        });
    }
}

//box5.clickMe();

// ES6
const box6 = {
    position: 1,
    color: 'green',
    clickMe: function () {
        // Here 'this' variable point to the box object so the down arrow function can share 'this' variable
        console.log(this);

        document.querySelector('.box-green').addEventListener('click', () => {
            //This arrow function can access 'this' keyword of it surrounding
            alert(`This is number ${this.position} box and its color is ${this.color}`);
        });
    }
}

box6.clickMe();

/*
ES6 If we use arrow function that attatch with an object then 'this' variable does not point to the object. 'this' point to its surrounding which is window object
*/

const box = {
    position: 2,
    color: 'blue',
    clickMe: () => {
        // Here 'this' point window object because arrow function share 'this' of its surrounding which is window
        console.log(this);
    }
}

box.clickMe();

////////////////////////////////////////
console.log('--------------MAP OF ES6--------------');

const question = new Map();

question.set('question', 'Which is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Congratulation! this is the right answer');
question.set(false, 'Wrong answer! Plese try again.');


//console.log(question.get('question'));
//console.log(question.size);
//
//if (question.has(4)) {
//    question.delete(4);
//}
//console.log(question.size);

//question.clear();

////////////////////////////////////////
console.log('--------------Simple quize app--------------');

// Print the question
console.log(question.get('question'));

// Print the option
question.forEach((value, key) => {
    if (typeof (key) === 'number')
        console.log(`Answer ${key}: ${value}`);
});

const ans = parseInt(prompt('Write your answer'));

// Print if the answer is correct or wrong
console.log(question.get(ans === question.get('correct')));
