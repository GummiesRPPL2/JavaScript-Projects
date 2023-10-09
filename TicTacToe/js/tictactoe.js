// Keeps track of whose turn it is.
let activePlayer = "X";
// Determines the win conditions.
let selectedSquares = [];

// Places an x or o in a square.
function placeXOrO(squareNumber) {
    // Ensures a square hasn't been selected already.
    // The .some() method is used to check each element of the selectSquare array
    // to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // Retrieves the HTML elememt id that was clicked.
        let select = document.getElementById(squareNumber);
            // Checks who's turn it is.
            if (activePlayer === "X") {
                // If activePlayer is equal to X, the x.png is placed in html.
                select.style.backgroundImage = 'url("images/x.png")';
                // activePlayer can only be X or O, if not X it must be O
            } else {
                //If activePlayer is equal to O, the o.png is placed in html.
                select.style.backgroundImage = 'url("images/o.png")';
            }
            //squareNumber and activePlayer are concatenated together and added to array.
            selectedSquares.push(squareNumber + activePlayer);
            //Calls a function to check for any win condtion.
            checkWinConditions();
            //This condition is for changing the active player.
            if (activePlayer === 'X') {
                //If active player is X change it to O
                activePlayer = 'O';
                //If active plater is anything other than X.
            } else {
                //Change the activePlayer to X.
                activePlayer = 'X'
            }
            //Plays placement sound.
            audio('./media/place.mp3');
            //Checks to see if it is the computers turn.
            if (activePlayer === 'O') {
                //Disables clicking on computers turn.
                disableClick();
                //This function waits 1 second before the computer places and image and enables click.
                setTimeout(function() { computersTurn(); }, 1000);
            }
            //Turning true is needed for our computersTurn() to work
            return true;
        }
        //This function results in a random square being selected by the compter.
        function computersTurn() {
            let success = false;
            let pickASquare;
            while(!success) {
                pickASquare = String(Math.floor(Math.random() * 9));
                //If the random number is evaluated returns true, the square hasn't been selected yet.
                if (placeXOrO(pickASquare)) {
                    placeXOrO(pickASquare);
                    success = true;
                }
            }
        }
    }

// parses the selectedSquares array to search for win conditions.
// drawline() function is called to draw a line on the screen if the condition is met.
function checkWinConditions() {
    // X 0, 1, 2
    if (arrayIncludes('0X', '1X','2X')) {drawWinLine(50, 100, 558, 100)}
    // X 3, 4, 5
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304)}
    // X 6, 7, 8
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508)}
    // X 0, 3, 6
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558)}
    // X 1, 4, 7
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558)}
    // X 2, 5, 8
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558)}
    // X 6, 4, 2
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90)}
    // X 0, 4, 8
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520)}
    // O 0, 1, 2
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100)}
    // O 3, 4, 5
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 100, 558, 304)}
    // O 6, 7, 8
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558,508)}
    // O 0, 3, 6
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558)}
    // O 1, 4, 7
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558)}
    // O 2, 5, 8
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558)}
    // O 6, 4, 2
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90)}
    // O 0, 4, 8
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520)}
    //This condition checks for a tie and plays the tie game sound
    else if (selectedSquares.length >= 9) {
        audio('./media/tie.mp3');
        setTimeout(function() { resetGame(); }, 500);
    }
    //checks if an array includes 3 strings.
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) {return true;}
    }
}

// makes our body element temporarily unclickable
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function(){ body.style.pointerEvents = 'auto';}, 1000)
}

// this functions takes a string parameter of the path you set easlier for place sound
function audio(audioURL) {
    // create a new audio object and we pass the path as a parameter
    let audio = new Audio(audioURL);
    audio.play();
}

// utilizes HTML canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    //start of a line's x axis
    let x1 = coordX1,
        // the start if a line's y axis
        y1 = coordY1,
        // the end of a line's x axis
        x2 = coordX2,
        // the end of a line's y axis
        y2 = coordY2,
        //stores temporary x axis data
        x = x1,
        //stores temporary y axis data
        y = y1;
    //interacts with the canvas    
    function animateLineDrawing() {
        //creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //clears content from the last loop interation
        c.clearRect(0, 0, 608, 608);
        //starts a new path
        c.beginPath();
        //moves us to a starting point in our line
        c.moveTo(x1, y1);
        //indicats the endpoint of our line.
        c.lineTo(x, y);
        //sets the width of the line
        c.lineWidth = 10;
        //sets the color of the line
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //draws everything we laid out above
        c.stroke();
        //condition checks if we've reached the endpoints.
        if (x1 <= x2 && y1 <= y2) {
            //adds 10 to the previous end x endpoint
            if (x < x2) { x += 10;}
            //adds 10 to the previous end y endpoint
            if (y < y2) { y += 10;}
            // for the 6, 4, 2 win condition
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
        }
        if (x1 <= x2 && y1 >= y2) {
            if ( x < x2) { x += 10;}
            if ( y > y2) { y -= 10;}
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
        }
    }
    //clears our canvas after our win line is drawn
    function clear() {
        //starts our animation loop
        const animationLoop = requestAnimationFrame(clear);
        //clears our canvas
        c.clearRect(0, 0, 608, 608)
        //stops animation loop
        cancelAnimationFrame(animationLoop);
    }
    //disables clicking while the win sound is playing
    disableClick();
    //plays the win sounds
    audio('./media/winGame.mp3');
    //calls our main animation loop.
    animateLineDrawing();
    //waits 1 second. Then clears canvas, resets game, and allows clicking again.
    setTimeout(function() { clear(); resetGame();}, 1000)
}

//resets the game in the event of a tie or a win
function resetGame() {
    //iterates through each HTML square element
    for (let i = 0; i < 9; i++) {
        //gets the HTML element i
        let square = document.getElementById(String(i));
        //removes element backgroundimage
        square.style.backgroundImage = '';
    }
    //resets our array so it is empty and we can start over
    selectedSquares = [];
}
