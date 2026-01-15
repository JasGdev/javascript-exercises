const findTheOldest = function(list) {
    let sorted = list.sort((a, b) => {
        if ("yearOfDeath" in a && "yearOfDeath" in b){
            aAge = a.yearOfDeath - a.yearOfBirth;
            bAge = b.yearOfDeath - b.yearOfBirth;
            return bAge - aAge
        } else if ("yearOfDeath" in a){
            //b has no year of death
            aAge = a.yearOfDeath - a.yearOfBirth;
            bAge = new Date().getFullYear() - b.yearOfBirth;
            return bAge - aAge
        }  else {
            //a has no year of death
            bAge = b.yearOfDeath - b.yearOfBirth;
            aAge = new Date().getFullYear() - a.yearOfBirth;
            return bAge - aAge
        }
        
    })
    return sorted [0]

};

// Do not edit below this line
module.exports = findTheOldest;
