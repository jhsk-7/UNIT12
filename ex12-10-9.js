// You are provided with an array of users where each user 
// has **`firstName`**, **`lastName`**, and **`points`**.

// Your task is to iterate over this array using the 
// **`map`** method and return a new array with new 
// properties **`fullName`** and **`membershipStatus`**, where 
// **`fullName`** is a combination of **`firstName`** and 
// **`lastName`**, and **`membershipStatus`** is **`Premium`** 
// if the user's points are more than 100, and **`Standard`** 
// otherwise. Print the new array.

const users = [
	{firstName: "Alice", lastName: "Johnson", points: 120},
	{firstName: "Bob", lastName: "Smith", points: 99},
	{firstName: "Charlie", lastName: "Brown", points: 180}
];

// Function to full name and status variables. Return a name and status string. 
function memSummary (obj){
    const fullName = obj.firstName + ' '+ obj.lastName;
    let membershipStatus = "";
    if (obj.points > 100) {
        membershipStatus = "Premium"
    }
    else {
        membershipStatus = "Standard"
    }
    return {fullName: fullName, membershipStatus: membershipStatus}
}

const memOverview = users.map(memSummary)

console.log(memOverview)


