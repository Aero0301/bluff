// init
const root = document.getElementById('root')

const cardList = []

const addAllCards = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 1; j <= 13; j++) {
      const card = document.createElement('div')
      card.classList.add('card')
      card.classList.add(!i || i === 2 ? 'black' : 'red')
      const number =
        '' +
        (j === 1 ? 'A' : j === 11 ? 'J' : j === 12 ? 'Q' : j === 13 ? 'K' : j)
      const suit = !i ? '♠' : i === 1 ? '♥' : i === 2 ? '♣' : '♦'
      card.id = `${number}-${suit}`
      card.innerHTML = `
      <h6 class="number">${number}</h6>
      <h3 class="suit">${suit}</h3>
      `
      cardList.push(card)
      root.append(card)
    }
  }
  for (let i = 1; i <= 2; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.id = `${i}-J`
    card.innerHTML = `
      <h6 class="number">${i}</h6>
      <h3 class="suit">J</h3>
      `
    cardList.push(card)
    root.append(card)
  }
}

addAllCards()
