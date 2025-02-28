const shuffleURL = "https://deckofcardsapi.com/api/deck";

async function part1() {

    try {
        const response = await fetch(`${shuffleURL}/new/draw/`);
        const data = await response.json();
        const value = data.cards[0].value.toLowerCase()
        const suit =  data.cards[0].suit.toLowerCase()
        console.log(`${value} of ${suit}`)
    }
    catch (error) {
        console.log('This is ludacris. Did somebody call ludacris?')
    }
}

part1()


async function part2() {

    cards = []

    for (i=0; i < 2; i++) {
        try {
            const response = await fetch(`${shuffleURL}/new/draw/`);
            const data = await response.json();
            console.log(data)
            card = {}
            card[`value`] = data.cards[0].value.toLowerCase()
            card[`suit`] =  data.cards[0].suit.toLowerCase()
            cards.push(card)
        }
        catch (error) {
            console.log('This is ludacris. Did somebody call ludacris?')
        }
    }
    for (const i in cards) {
        console.log(`${cards[i].value} of ${cards[i].suit}`)
    }

}

part2()


