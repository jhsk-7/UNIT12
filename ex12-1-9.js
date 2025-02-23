function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
	}
	else
	{
		throw new Error("The operation is failed mysteriously!");
	}
}

/*function vacDaysCalc(missionsNum) {
    let successMisionsNum = Math.floor(Math.random() * missionsNum)
    console.log(successMisionsNum)
    let successVacDays = successMisionsNum * 16
    let unsuccessVacDays = (missionsNum - successMisionsNum) * 4
    let totalVacDays = successVacDays + unsuccessVacDays

    return totalVacDays
} */

//Vacation days variables
const vacDaysFromSuccess = 13;
const vacDaysFromFailure = 1;
const vacDaysForTrying = 3;
let vacDaysEarnedTotal = 0;
let successCount = 0;

function vacDaysCalc (missionsNumber) {
    
    for (let i = 0; i < missionsNumber; i++) {
        try {
            mysteryOperation();
            vacDaysEarnedTotal += vacDaysFromSuccess;
            successCount++;
        }
        catch (err) {
            vacDaysEarnedTotal += vacDaysFromFailure;
        }
        finally {
            vacDaysEarnedTotal += vacDaysForTrying;
        }
    }
    //Print a message telling the user how many successful missions and total
    // vacation days earned.
    let vacDaysMessage = `Based on ${successCount} successful missions, you have 
    earned ${vacDaysEarnedTotal} vacation days`;

    return vacDaysMessage
}

console.log(vacDaysCalc(20))
