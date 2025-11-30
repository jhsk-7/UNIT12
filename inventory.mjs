//Part 1 A - create functions to add and remove items from a list.
export const items = [ ]
export const addItem = (function(item){
    items.push(item)
    return items
})

export function removeItem(item) {
    const idx = items.findIndex(function(el){
        return el === item
    })
    return items.splice(idx,1)
}

export const listItems = () => console.log(items) 

