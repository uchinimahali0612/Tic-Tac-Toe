var flag = true;
var state = [1, 0, 1, 0, 1, 0, 0, 1, 0];
var winner =document.getElementById('winnerBox');
var player1Score = 0;
var player2Score = 0;

document.getElementsByClassName('board')[0].addEventListener('click', (e) => {
    // console.log(e.target.id)
    var curDiv = e.target.id;
    
    setValue(curDiv);
    setName();
    console.log(state);
    

})
function startGame()
{
    document.getElementById('body1').style.display="none";
    document.getElementById('body2').style.display="block";
}
function setValue(curDiv)
{
    if (flag) {
        if (state[curDiv] == 1 || state[curDiv] == 0) {
            document.getElementById(curDiv).innerText = "X";
            state[curDiv] = "X";
            checkWinner(flag);
            flag = !flag;
        }        
    }
    else {
        if (state[curDiv] == 1 || state[curDiv] == 0) {
            document.getElementById(curDiv).innerText = "O";
            state[curDiv] = "O";
            checkWinner(flag);
            flag = !flag;
        }
    }
}

function checkWinner(flag) {
    if (state[0] == state[1] && state[1] == state[2]) {
        // alert("Row-1 Winner");
        flag ? (winner.innerHTML = "Winner-X", player1Score++) : (winner.innerHTML = "Winner-O", player2Score++);
        updateScores();
        setDisabled();
        // setTimeout(reset, 5000);
    }
    else if (state[3] == state[4] && state[4] == state[5]) {
        // alert("Row-2 Winner");
        flag ? (winner.innerHTML = "Winner-X", player1Score++) : (winner.innerHTML = "Winner-O", player2Score++);
        updateScores();
        setDisabled();
    }
    else if (state[6] == state[7] && state[7] == state[8]) {
        // alert("Row-3 Winner");
        flag ? (winner.innerHTML = "Winner-X", player1Score++) : (winner.innerHTML = "Winner-O", player2Score++);
        updateScores();
        setDisabled();
    }
    else if (state[0] == state[3] && state[3] == state[6]) {
        // alert("Column-1 Winner");
        flag ? (winner.innerHTML = "Winner-X", player1Score++) : (winner.innerHTML = "Winner-O", player2Score++);
        updateScores();
        setDisabled();
    }
    else if (state[1] == state[4] && state[4] == state[7]) {
        // alert("Column-2 Winner");
        flag ? (winner.innerHTML = "Winner-X", player1Score++) : (winner.innerHTML = "Winner-O", player2Score++);
        updateScores();
        setDisabled();
    }
    else if (state[2] == state[5] && state[5] == state[8]) {
        // alert("Column-3 Winner");
        flag ?(winner.innerHTML = "Winner-X", player1Score++) : (winner.innerHTML = "Winner-O", player2Score++);
        updateScores();
        setDisabled();
    }
    else if (state[0] == state[4] && state[4] == state[8]) {
        // alert("Diagonal-1 Winner");
        flag ? (winner.innerHTML = "Winner-X", player1Score++) : (winner.innerHTML = "Winner-O", player2Score++);
        updateScores();
        setDisabled();
    }
    else if (state[2] == state[4] && state[4] == state[6]) {
        // alert("Diagonal-2 Winner");
        flag ? (winner.innerHTML = "Winner-X", player1Score++) : (winner.innerHTML = "Winner-O", player2Score++);
        updateScores();
        setDisabled();
    }
    else {
        var count = 0;
        for (var i = 0; i < state.length; i++) {
            if (state[i] == 1 || state[i] == 0)
                count++;
        }
        if (count == 0) {
            alert("Game draw")
        }
    }
}

function restartGame() {
    location.reload();

}
function reset()
{
    for (var i = 0; i < 9; i++) {
        document.getElementById(i).innerText="";
    }

    state = [1, 0, 1, 0, 1, 0, 0, 1, 0];    
    document.getElementById('winnerBox').innerText="";

}
function setDisabled(){
    for (var i = 0; i < state.length; i++) {
        if (state[i] == 1 || state[i] == 0)
        state[i]=null; 
    }
    
}
function updateScores() {
    document.getElementById('player1Score').innerText = player1Score;
    document.getElementById('player2Score').innerText = player2Score;
}
function setName(){
    document.getElementById('player1a').innerHTML= document.getElementById('one');
}
