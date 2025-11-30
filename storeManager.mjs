// Part 1 B - simulating adding and removing items using inventory module.
import {addItem, removeItem, listItems} from "./inventory.mjs"

addItem('Bagel')
addItem('Cream Cheese')
addItem('Capers')
addItem('Red Onion')
addItem('Eggs')
addItem('Dill')

listItems()

removeItem('Red Onion')

listItems()