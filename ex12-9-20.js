// Task 1 - Destructuring the coordinates.
const coordinates = {x: 34, y: 42, z: 67};
const {x, y, z} = coordinates
console.log(`You will start your journey at ${x}', ${y}', ${z}'`)


// Task 2 - destructure first and second. Spread the rest.
const locations = {
	first: "Cave of Wonders",
	second: "Lake of Mystery",
	third: "Mount of Ages",
	fourth: "Desert of Shadows"
};
const {first, second, ...remaining} = locations
console.log(`Go to ${first}. Then go to ${second}.`)


// Task 3 - ________________________
const doorCode = {
	upper: "Alpha",
	lower: "Omega"
};
const {
	upper,
	middle = remaining.third,
	lower
} = doorCode;
console.log(`Door code sequence: ${upper}, ${middle}, ${lower}`);


// Task 4 - give the property name. 
const riddle = {
	ancientWord: "Sphinx",
	modernWord: "Cat"
};
const {ancientWord: translation} = riddle
console.log(`The ancient word translates to '${translation}'`)


// Task 5 - Getting first two elements of array.
const elements = ["Fire", "Water", "Earth", "Air"];
const [firstElement, secondElement] = elements;
console.log(`Here are your next clues: ${firstElement} and ${secondElement}`)


// Task 6 - access array elements based on position.
const stones = [1, 2, 3, 4, 5, 6];
const [ , , , , fifthStone, sixthStone] = stones
console.log(`When crossing the river, careful not to step on stones ${fifthStone} and ${sixthStone}.`)


// Task 7 - pass one element, then save the rest.
const shadows = ["Darkness", "Silence", "Whisper", "Echo"];
const [firstShadow, ...otherShadows] = shadows
console.log(`See the shadow of ${firstShadow}`)


// Task 8 - perform function destructuring. 
function revealPath ({direction, distance}) {
	{
		direction,
		distance
		console.log(`Head ${direction} toward the forest. Go ${distance} until you reach the red mountains.`)
	}
}
revealPath({direction: "north", distance: "88 miles"})


// Task 9 - Example destructuring function with default values.
function mixPotion ({ingredient1 = "Water", ingredient2 = "flour"}) {
	{
		ingredient1,
		ingredient2
		console.log(`Potion ingredients: ${ingredient1} + ${ingredient2}`)
	}
}
mixPotion({ingredient1: 'cat hair'})


// Task 10 - Function destructing using array parameters/
function castSpell ([ingredient1, ingredient2, ...otherIngredients]) {
	{
		ingredient1,
		ingredient2,
		otherIngredients
		console.log(`Spell ingredients: ${ingredient1} + ${ingredient2}`)
	}
}


// Task 11 - destructre a nested element
const nestedSecret = {outer: {inner: "The Final Key"}};
const {outer: {inner}} = nestedSecret
console.log(`The unveiled secret is: ${inner}`)


// Task 12 - do a swap
let stoneA = "Emerald";
let stoneB = "Ruby";
[stoneA, stoneB] = [stoneB, stoneA]
console.log('First stone revealed: ', stoneA)
console.log('Second stone revealed: ', stoneB)