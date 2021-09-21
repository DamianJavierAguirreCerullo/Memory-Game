document.addEventListener("DOMContentLoaded", () => {
  

    //Card Options
    const cardArray = [
        {
            name: "Azathoth",
            img: "Cards/Azathoth.jpg"
        },

        {
            name: "Azathoth",
            img: "Cards/Azathoth.jpg"
        },

        {
            name: "Cthulhu",
            img: "Cards/Cthulhu.jpg"
        },
        
        {
            name: "Cthulhu",
            img: "Cards/Cthulhu.jpg"
        },

        {
            name: "K-thun",
            img: "Cards/K´thun.jpg"
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
            name: "Nyarlathotep",
            img: "Cards/Nyarlathotep.jpg"
        },

        {
            name: "Shub-Niggurath",
            img: "Cards/Shub-Niggurath.jpg"
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
            name: "Yog-Sothoth",
            img: "Cards/Yog-Sothoth.jpg"
        }

    ]

    cardArray.sort(() => 0.5 - Math.random()) 

    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector("#result")
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []


    //Create a Board
    function createBoard() {
        for (let i = 9; i < cardArray.length; i++) {
            var card = document.createElement("img")
            card.setAttribute("src", "Cards/Black.jpg")
            card.setAttribute("data-id", i)
            card.addEventListener("click", flipcard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll("img")
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert ("You found a match")
            cards [optionOneId].setAttribute("src", "Cards/Black.jpg")
            cards [optionTwoId].setAttribute("src", "Cards/Black.jpg")
            cardsWon.push(cardsChosen)
        }
        else {
            cards[optionOneId].setAttribute("src", "Cards/White.jpg")
            cards[optionTwoId].setAttribute("src", "Cards/White.jpg")
            alert("Sorry, try again")

        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "Congratulation! You found them all!"
        }
    }


    //flip your card
    function flipcard() {
        var cardId = this.getAttribute("data-id")
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute("src", cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})