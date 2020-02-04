let clickedCard = null;

function onCardClicked(e) {
    let target = e.currentTarget
    target.className = target.className.replace("hide-color", "")

    target.className += " done"

    console.log(target.getAttribute("data-color"))

    if (!clickedCard) {
        clickedCard = target;
    } else if (clickedCard) {
        if (clickedCard.getAttribute("data-color") === target.getAttribute("data-color")) {
            console.log("cards ARE equal")
            clickedCard = null
        } else{
            console.log("cards NOT equal")
            setTimeout(() => {
                console.log("we are here!!")
                clickedCard.className = clicked.className.replace("done", "").trim() + " hide-color"
                target.className =
            })
        }
    }
    
}


