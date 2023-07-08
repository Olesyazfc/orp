const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}

export function orderByProps(object, sort) {
    const sortedList = []
    let sortingKeys = []
    let keys = Object.keys(obj).sort()
    
    keys.forEach(property => sortingKeys.push({
        key: property, value: object[property]
    }))

    sort.forEach(property => {sortedList.push({ key: property, value: object[property]})})

    for (const property of keys) {
        if (!sort.includes(property)) {
            sortedList.push({key: property, value: object[property]})
        }
    }
  return sortedList
}
orderByProps(obj, ["name", "level"])



export function getSpecial(hero) {
    let actions = []
    for (const action of hero.special) {
        actions.push(action)
        if (!action.description) {
            const {description = 'Описание недоступно'} = action
            action.description = description
        }        
    } 
    return actions
} 

