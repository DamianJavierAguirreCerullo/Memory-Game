document.addEventListener("DOMContentLoaded", () => {
    //card options
    const cardArray = [
      {
        name: "Azathoth",
        img: "Cards/Azathoth.jpg"
      },
      {
        name: "Sigil",
        img: "Cards/Sigil.jpg"
      },
      {
        name: "Cthulhu",
        img: "Cards/Cthulhu.jpg"
      },
      {
        name: "Lovecraft",
        img: "Cards/Lovecraft.jpg"
      },
      {
        name: "K-thun",
        img: "Cards/K-thun.jpg"
      },
      {
        name: "Nyarlathotep",
        img: "Cards/Nyarlathotep.jpg"
      },
      {
        name: "Shub-Niggurath",
        img: "Cards/Shub-Niggurath.jpg"
      },
      {
        name: "Yog-Sothoth",
        img: "Cards/Yog-Sothoth.jpg"
      },
      {
        name: "Azathoth",
        img: "Cards/Azathoth.jpg"
      },
      {
        name: "Sigil",
        img: "Cards/Sigil.jpg"
      },
      {
        name: "Cthulhu",
        img: "Cards/Cthulhu.jpg"
      },
      {
        name: "Lovecraft",
        img: "Cards/Lovecraft.jpg"
      },
      {
        name: "K-thun",
        img: "Cards/K-thun.jpg"
      },
      {
        name: "Nyarlathotep",
        img: "Cards/Nyarlathotep.jpg"
      },
      {
        name: "Shub-Niggurath",
        img: "Cards/Shub-Niggurath.jpg"
      },
      {
        name: "Yog-Sothoth",
        img: "Cards/Yog-Sothoth.jpg"
      },
      {
        name: "Neothelid",
        img: "Cards/Neothelid.jpg"
      },
      {
        name: "Abhoth",
        img: "Cards/Abhoth.jpg"
      },
      {
        name: "Cxaxukluth",
        img: "Cards/Cxaxukluth.jpg"
      },
      {
        name: "Ghroth",
        img: "Cards/Ghroth.jpg"
      },
      {
        name: "Hastur",
        img: "Cards/Hastur.jpg"
      },
      {
        name: "Lu_kthu",
        img: "Cards/Lu_kthu.jpg"
      },
      {
        name: "Abhoth",
        img: "Cards/Abhoth.jpg"
      },
      {
        name: "Neothelid",
        img: "Cards/Neothelid.jpg"
      },
      {
        name: "Cxaxukluth",
        img: "Cards/Cxaxukluth.jpg"
      },
      {
        name: "Ghroth",
        img: "Cards/Ghroth.jpg"
      },
      {
        name: "Hastur",
        img: "Cards/Hastur.jpg"
      },
      {
        name: "Lu_kthu",
        img: "Cards/Lu_kthu.jpg"
      },
      {
        name: "The_Outer_Gods",
        img: "Cards/The_Outer_Gods.jpg"
      },
      {
        name: "Tsathouggua",
        img: "Cards/Tsathouggua.jpg"
      },
      {
        name: "The_Outer_Gods",
        img: "Cards/The_Outer_Gods.jpg"
      },
      {
        name: "Tsathouggua",
        img: "Cards/Tsathouggua.jpg"
      }
      
      ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector("#result")
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img")
        card.setAttribute("src", "Cards/Black.jpg")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll("img")
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute("src", "Cards/Black.jpg")
        cards[optionTwoId].setAttribute("src", "Cards/Black.jpg")
        alert("You have clicked the same image!")
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert("You found a match")
        cards[optionOneId].setAttribute("src", "Cards/white.jpg")
        cards[optionTwoId].setAttribute("src", "Cards/white.jpg")
        cards[optionOneId].removeEventListener("click", flipCard)
        cards[optionTwoId].removeEventListener("click", flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute("src", "Cards/Black.jpg")
        cards[optionTwoId].setAttribute("src", "Cards/Black.jpg")
        alert("Sorry, try again")
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = " Congratulations! You found them all!"
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute("data-id")
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute("src", cardArray[cardId].img)
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 100)
      }
    }
  
    createBoard()
  })