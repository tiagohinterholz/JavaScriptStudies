const dayjs = require("dayjs")

function birthday (date){
    const birthday = dayjs(date)
    const today = dayjs()

    const ageInYears = today.diff(birthday, 'year')
    console.log(`Idade: ${ageInYears}`)
    nextBirthday = birthday.add(ageInYears + 1, 'year')
    console.log(`Proximo aniversario em: ${nextBirthday.format('DD/MM/YYYY')}`)
    diasParaProximoNiver = nextBirthday.diff(today, 'day') + 1
    console.log(`Dias para o próximo aniver: ${diasParaProximoNiver}`)

}

birthday('1990-10-13')