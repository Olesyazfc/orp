import {orderByProps, getSpecial} from '../basic.js'

const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
const sorted = [
    {key: "name", value: "мечник"},
    {key: "level", value: 2}, 
    {key: "attack", value: 80},
    {key: "defence", value: 40},
    {key: "health", value: 10} 
]

test('сортировка свойств', () => {
    const result = orderByProps(obj, ["name", "level"]) 
    expect(result).toEqual(sorted);
  });

const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
    {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
    },
    {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
    }
    ]	
}
const specials = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно'
    }
  ]

test('деструктуризация', () => {
    const result = getSpecial(character) 
    expect(result).toEqual(specials);
  });