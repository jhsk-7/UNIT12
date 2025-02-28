const myNumber = 7;
const baseURL = "http://numbersapi.com"
const numsArray = [3, 7, 11, 13] 


async function part1() {

    try {
        const response = await fetch(`${baseURL}/${myNumber}?json`);
        const data = await response.json();
        console.log(data.text)
    }
    catch (error) {
        console.log('This is ludacris. Did somebody call ludacris?')
    }
}

//part1(); 

async function part2(arr) {

    for (i = 0; i < numsArray.length; i++)
        try {
            const response = await fetch(`${baseURL}/${numsArray[i]}?json`);
            const data = await response.json();
            console.log(data.text)
        }
        catch (error) {
            console.log('This is ludacris. Did somebody call ludacris?')
        }
}

//part2();


async function part3() {
    const promises = [];

    for (i=0; i < 4; i++){
        const url = fetch(`${baseURL}/${myNumber}?json`)
        const data = (await url).json()
        promises.push(
            data
        )
    }
    Promise.all(promises)
    .then(data => {
        for (i=0; i < data.length; i++){
            console.log(data[i].text)
        }
    })
    .catch(error => {
        console.log('This is ludacris. Did somebody call ludacris?');
    });
}

part3()





