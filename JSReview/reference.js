const person = {
    name: 'Diego'
}

// copies a pointer to the person object
personb = person

// really copies and if we change person, it won't change personc
personc = {
    ...person
}

person.name = 'Evely'

console.log(personb)
console.log(personc)