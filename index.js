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
