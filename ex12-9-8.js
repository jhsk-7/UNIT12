// Task 1 - accepting open-ended arguments.
sightings = (...sightings) => { 
    return sightings
}

console.log(`Today we observed ${sightings('Lions',' Tigers',' Bears ')}`)


// Task 2 - making master list of habitats
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];

const generalHabitats = [...forestHabitats, ...savannahHabitats]

console.log(generalHabitats)


// Task 3 - new object reporting new population and adding additional properties.
const rhinoStatus = {
	population  : 500,
	status      : "Endangered"
};

const rhinosMarch25 = {
    ...rhinoStatus, 
    date        : "2025-03-03",
    population  : 498, 
    habitat     : "Lower Savannah"
}

console.log(rhinosMarch25)


// Task 4 - copy object and add property to copy.
const lionProfile = {
	name    : "Leo",
	age     : 5,
	species : "Lion"
};

const lionProfileCopy = {
    ...lionProfile,
    genetics    : "Athletic"
}

console.log(lionProfileCopy, lionProfile)
// Observation:
// The copy does not change the original. 
// The spread operation creates a shallow copy. 


// Task 5 - copy object and change a property.
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply  : {
		herbivores  : "Abundant",
		carnivores  : "Sufficient"
	}
};

const ecosystemHealthUpdate = {
    ...ecosystemHealth,
    foodSupply : {...ecosystemHealth.foodSupply, carnivores: "Swelling"}
}

console.log('Updated ecosystem', ecosystemHealthUpdate)
console.log('Original ecosystem',ecosystemHealth)
// Observation:
// The behavior observed is we have two different objects. Based 
// on the course videos, the original object was suppsoed to be changed.
// But that is not what I observed.