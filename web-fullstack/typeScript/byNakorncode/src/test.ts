const person: { name: string, age: number, city: string }[] = [
    { name: 'John', age: 20, city: 'New York' },
    { name: 'Jane', age: 21, city: 'Los Angeles' },
    { name: 'Jim', age: 22, city: 'Chicago' },
    { name: 'Jill', age: 23, city: 'Houston' },
]

const personList = (pers: string): string => {
    return person.find((item) => item.name === pers)?.city ?? '-1'
}

console.log(personList('John'))