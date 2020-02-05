let clickedCard = null;
let preventClick = false;
let matches = 0;

let colors = ["red", "blue", "orange", "pink", "yellow", "brown", "green", "black"]

let cards = [...document.querySelectorAll(".card")];
for (let color of colors) {
    const cardAIndex = parseInt(Math.random() * cards.length);
    const cardA = cards[cardAIndex];
    cards.splice(cardAIndex, 1);
    cardA.className += ` ${color}`
    cardA.setAttribute("data-color", color);


    const cardBIndex = parseInt(Math.random() * cards.length);
    const cardB = cards[cardBIndex];
    cards.splice(cardBIndex, 1);
    cardB.className += ` ${color}`
    cardB .setAttribute("data-color", color);
}


function card(event) {
    let target = event.currentTarget

    if (preventClick || target === clickedCard || target.className.includes("done")) {
        return;
    }

    target.classList.remove("hide-color")
    target.className += " done"
    console.log(target.getAttribute("data-color"))
    

    
    if (!clickedCard) {
        clickedCard = target
    } else if (clickedCard) {
        if (clickedCard.getAttribute("data-color") === target.getAttribute("data-color")) {
            matches++
            clickedCard = null;
            if (matches == 8) {
                alert("You Won");
            }
            console.log("cards ARE equal")
        }
        else {
            preventClick = true;
            console.log("cards NOT equal")
            setTimeout(() => {
                clickedCard.className = clickedCard.className.replace("done", "") + " hide-color";
                target.className =  target.className.replace("done", "") + " hide-color";
                clickedCard = null;
                preventClick = false;
            }, 500)
        }
    }
     
}
