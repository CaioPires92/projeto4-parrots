const cards = document.querySelector('.cards')

let numeroDeCartas = prompt('Com quantas cartas quer jogar?')

console.log(`Numero de cartas antes do if ${numeroDeCartas}`)

function comparador() {
  return Math.random() - 0.5
}

let arrayFrontCard = [
  'bobrossparrot',
  'explodyparrot',
  'fiestaparrot',
  'metalparrot',
  'revertitparrot',
  'tripletsparrot',
  'unicornparrot'
].sort(comparador)

while (numeroDeCartas % 2 !== 0 || numeroDeCartas < 4 || numeroDeCartas > 14) {
  alert('Digite um numero de cartas validos, de 4 a 14')
  numeroDeCartas = prompt('Com quantas cartas quer jogar?')
  console.log(`Numero de cartas depois do if ${numeroDeCartas}`)
}

let i = 0
while (i < numeroDeCartas) {
  cards.innerHTML += `
    <div class="card">
      <img src="assets/back.png" alt="" />
      <img src="assets/${arrayFrontCard[i]}.gif" alt="" />
    </div>
  `
  i++
}
