const findTheOldest = function(people) {
    let highAge = 0;
    let age;
    let oldest;
    people.map(person => {
        if (person.yearOfDeath) {
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            age = 2022 - person.yearOfBirth;
        }
        
        if (age > highAge) {
            oldest = person;
            highAge = age;
        }
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
