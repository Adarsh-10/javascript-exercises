const findTheOldest = function(people) {
    return people.sort((a, b) => {
        const tdy = new Date();
        let aDeath;
        let bDeath;
        if (!a.yearOfDeath) {
            aDeath = tdy.getFullYear();
        } else {
            aDeath = a.yearOfDeath;
        }

        if (!b.yearOfDeath) {
            bDeath = tdy.getFullYear();
        } else {
            bDeath = b.yearOfDeath;
        }
        const aAge = aDeath - a.yearOfBirth;
        const bAge = bDeath - b.yearOfBirth;

        if (aAge > bAge) {
            return -1;
        } else {
            return 1;
        }

    })[0];

};

// Do not edit below this line
module.exports = findTheOldest;
