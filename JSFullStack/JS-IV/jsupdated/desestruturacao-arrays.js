const person = {
    name: 'Luke',
    job: 'Farmer',
    parents: ['Anakin', 'Padme']
}

const {job, name, parents} = person
console.log(job, name, parents)

const [father, mother] = parents
console.log(father, mother)

function createUser(person) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name: person.name,
        job: person.job,
        parents: person.parents
    }
}

const luke = createUser(person)

console.log(luke)