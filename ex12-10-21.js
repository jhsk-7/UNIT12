const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];


// Part 1 - find water type creature.
const creature = mythicalCreatures.find(function(creature){
    return creature.type === "Water"
})
console.log(creature.name)

// Part 2 - find the Griffin index.
const griffinIdx = mythicalCreatures.findIndex(function(creature){
    return creature.name === "Griffin"
})
console.log(mythicalCreatures[griffinIdx])

// Part 3 - find an enchanted forest creature.
const findEnchanted = mythicalCreatures.find(function(creature){
    return creature.lastSeen === "Enchanted Forest"
})
console.log(findEnchanted)