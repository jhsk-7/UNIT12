const accounts = [
	{id: 1, owner: "Alice", balance: 500},
	{id: 2, owner: "Bob", balance: 300}
];

function getAccountById (id) {
	let i;
	for (let account of accounts) {
		if (account.id == id) {
			i = account;
		}
	}
	if (i === undefined) {
		throw new Error("Please enter a valid id")
	}
	else {
		return i
	}
}

function createAccount (newAccountId, newAccountOwner)
{
	//Checks if name is entered is a string.
	if (typeof(newAccountOwner) !== "string") {
		throw new Error ("Please enter a name between quotations")
	}

	// Makes sure that a name is pased.
	else if (newAccountOwner === undefined || newAccountOwner == 0) {
		throw new Error ("Please enter a valid name");
	}

	// Prompts user to use the correct next id sequence number.
	let checkAccounts = accounts[accounts.length - 1]['id'] 
	if (newAccountId !== checkAccounts + 1) {
		throw new Error (`Start with id ${checkAccounts + 1}.`);
	}
	
	else{
		accounts.push(
			{
				id: newAccountId,
				owner: newAccountOwner,
				balance: "0"
			}
		);
	}
}

function depositMoney (accountId, amount) {

	const account = getAccountById(accountId);

	let checkForAccounts = []
	for (let i = 0; i < accounts.length; i++) {
		j = accounts[i]['id'];
		checkForAccounts.push(j);
	}

	if (!account) {
		throw new Error("Account not found");
	}
	else if (typeof(amount) !== "number" || amount < 0.01) {
		throw new Error("Please enter a deposit amount as a valid positive number.")
	}
	else if (amount === Infinity) {
		throw new Error("Amount cannot be Infinity")
	}

	account.balance += amount;
}

function withdrawMoney (accountId, amount)
{
	const account = getAccountById(accountId);

	if (!account)
	{
		throw new Error("Account not found.");
	}

	if (!Number.isFinite(amount))
	{
		throw new Error("Invalid value for withdrawal amount: The amount must be a finite number.");
	}

	if (account.balance < amount) {
		throw new Error(`Up to ${account.balance} available for withdrawal`)
	}
	
	if (amount < 0.01) {
		throw new Error("Please enter a number greater than 0.00 for withdrawal.")
	}

	account.balance -= amount;
}

function transferMoney (fromAccountId, toAccountId, amount)
{
	const fromAccount = getAccountById(fromAccountId);
	const toAccount = getAccountById(toAccountId);

	if (!fromAccount) {
		throw new Error("Source account not found.");
	}
	if (!toAccountId) {
		throw new Error("To account not found")
	}
	if (fromAccountId === toAccountId) {
		throw new Error("Cannot transfer to self account")
	}

	if (!Number.isFinite(amount) || amount < 0)
	{
		throw new Error("Invalid value for transfer amount: The amount must be a positive finite number.");
	}
	
	if (fromAccount.balance < amount) {
		throw new Error(`Up to ${fromAccount.balance} available for withdrawal`)
	}
	toAccount.balance += amount;
	fromAccount.balance -= amount;
}


/*
Hints:

getAccountById("1");

createAccount(1, "Alice");
createAccount("3", "Charlie");
createAccount(-3, "Charlie");
createAccount(3, ["Charlie"]);
createAccount(3, "");
createAccount(3, "  ");

depositMoney(1, "300")
depositMoney(1, -300)
depositMoney(1, 0)
depositMoney(1, Infinity)
depositMoney(4, 100)

withdrawMoney(1, -100)
withdrawMoney(1, 0)
withdrawMoney(1, 501)

transferMoney(1, 4, 100)
transferMoney(1, 2, 501);
transferMoney(1, 2, 100);
*/
