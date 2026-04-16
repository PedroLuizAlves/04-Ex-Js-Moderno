const dayjs = require("dayjs")

function birthday(date) {
    const birthday = dayjs(date) 
    const today = dayjs() // valor padão é o dia de hoje

    const ageInYears = today.diff(birthday, 'year') // o método "diff" pega literalmente a diferença entre duas datas. então para descobrirmos a idade de alguem precisamos do ano de nascimento e o ano atual.

    const nextBirthday = birthday.add(ageInYears +1, 'year')

    const daysToNextBithday = nextBirthday.diff(today, 'day')

    console.log(`Idade: ${ageInYears}`)
    console.log(`O próximo aniversário é: ${nextBirthday.format('DD/MM/YYYY')}`)
    console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBithday}`)
}

birthday("1981-04-16")