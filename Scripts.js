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

    const grid = document.querySelector(".grid")

    //Create a Board
    function createBoard() {
        for (let i = 9; i < cardArray.length; i++) {
            var card = document.createElement("img")
            card.setAttribute("src", "Cards/Black.jpg")
            card.setAttribute("data-id", i)
            // card.addEventListener("click", flipcard)
            grid.appendChild(card)
        }
    }

    //check for matches



    //flip your card
    function flipcard() {
        var cardId = this.getAttribute("data-id")
    }

    createBoard()
})