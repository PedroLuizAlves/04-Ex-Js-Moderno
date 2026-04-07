//media simples
//O método reduce no JavaScript funciona exatamente assim: ele pega uma lista com várias coisas e as "espreme" (ou combina) até sobrar apenas um resultado final.
const media = (...numbers) => {
    const sum = numbers.reduce((acum, num) => acum+num, 0)
    return sum / numbers.length
}
console.log(`A média simples é : ${media(3, 8, 5, 6)}`)


//Média ponderada
const ponderada = (...entries) => {
  const sum = entries.reduce((accum, { number, weight }) => accum + (number * (weight ?? 1)), 0)
  const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
  return sum / weightSum
}
console.log(`Média Ponderada: ${ponderada(
  { number: 9, weight: 3 },
  { number: 7, weight: 2 },
  { number: 10},
)}`)


//mediana
//método sort no JavaScript é como um ajudante mágico da organização.
const mediana = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a,b) => a - b)
    const meio = Math.floor(orderedNumbers.length / 2)
    //A "%" representa o resto da divisão! no caso indicando se o nmr é impar ou par
    if(orderedNumbers.length % 2 === 0){
        const firstMidle = orderedNumbers[meio - 1]
        const secondMidle = orderedNumbers[meio]
        return media(firstMidle, secondMidle)
    }
        return orderedNumbers[meio]
}
console.log(`A Mediana impar é: ${mediana(5, 1, 9, 4, 30)}`)
console.log(`A Mediana par é: ${mediana(9, 3, 7, 8)}`)


//Moda
const mode = (...numbers) => {
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  const quantities = numbers.map(num => [
    num,
    numbers.filter(n => num === n).length
  ])
  quantities.sort((a, b) => b[1] - a[1])
  return quantities[0][0]
}
console.log(`Moda: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)