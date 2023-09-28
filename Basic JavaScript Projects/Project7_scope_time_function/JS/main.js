var x = 125
function adding(){
    document.write(150 + x);
}

function multiply(){
    var y = 34
    document.write(y * 56);
}

function mistake(){
    var z = 54
    docment.write(z - 12)
    console.log("This script is executing")
}
function get_date(){
    if (new Date().getHours() > 18) {
        document.getElementById("Farewell").innerHTML = "See you tomorrow!"
    }
}

var hungerStat = 23
function hunger() {
    if(hungerStat < 25) {
        document.getElementById("Hungry").innerHTML = "I could use some food right now."
    }
}

function of_age(){
    if(age >= 21){
        Alcohol = "I am old enough to drink.";
    }
    else {
        Alcohol = "I am not old enough to drink";
    }
    document.getElementById("Drinking").innerHTML = Alcohol;
}

var age = 24

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply
}