let gridItems = document.getElementsByClassName("square")
let currentTurn = "x"
let gameIsFinished = false
let boardArray = [
    "0", "1", "2",
    "3", "4", "5",
    "6", "7", "8"
]
for (const item of gridItems) {
    item.addEventListener("click", function () {
        if(gameIsFinished)
        {
            return
        }
        let value = item.getAttribute("value")
        let index = value - 1
        if(boardArray[index] == "x" || boardArray[index] == "o")
        {
            return
        }
        // value
        let squareContent = document.querySelector(`.square[value="${value}"]`)
        squareContent.innerHTML = currentTurn

        // logically
        boardArray[index] = currentTurn

        console.log(boardArray)

        evaluateBoard()

        if (currentTurn == "x") {
            currentTurn = "o"
        } else {
            currentTurn = "x"
        }

        document.getElementById("instruction").textContent =`${currentTurn} turn`





    })


    function evaluateBoard() {
        if
            (
            // row
            (boardArray[0] == boardArray[1] && boardArray[1] == boardArray[2]) ||
            (boardArray[3] == boardArray[4] && boardArray[4] == boardArray[5]) ||
            (boardArray[6] == boardArray[7] && boardArray[7] == boardArray[8]) ||

            // columns row
            (boardArray[0] == boardArray[3] && boardArray[3] == boardArray[6]) ||
            (boardArray[1] == boardArray[4] && boardArray[4] == boardArray[7]) ||
            (boardArray[2] == boardArray[5] && boardArray[5] == boardArray[8]) ||

            // diagonal
            (boardArray[0] == boardArray[4] && boardArray[4] == boardArray[8]) ||
            (boardArray[2] == boardArray[4] && boardArray[4] == boardArray[6])

    ) {
            var winner = currentTurn == "o" ? "o" : "x"
            gameIsFinished = true
            alertify.alert((`${winner} Won!`))
        }


        var isDraw = true

        for(square of boardArray)
        {
            if(square !="x" && square !="o")
            {
                isDraw = false
            }
        }

        if(isDraw)
        {
            gameIsFinished = true
            alertify.alert("draw")
        }
    }


}


document.getElementById("reset-btn").addEventListener("click", function(){
    reset()
})

function reset(){
    // reset value
    for (item of gridItems)
    {
        let value = item.getAttribute("value")
        let squareContent = document.querySelector(`.square[value="${value}"]`)
        squareContent.innerHTML = ""

        boardArray = [
            "0", "1", "2",
            "3", "4", "5",
            "6", "7", "8"
        ]
    }
    gameIsFinished = false
    currentTurn = "x"
    document.getElementById("instruction").innerHTML =  `${currentTurn} turn`
}