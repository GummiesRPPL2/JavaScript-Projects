function Call_Loop() {
    var Digit = "";
    var x = 112;
    while (x > 100) {
        Digit += "<br>" + x;
        x--;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Dishes = ["Steak and Potatoes", "Ramen", "Blueberry Pancakes", "Chicken Alfredo", "Cheeseburger", "Peanut butter and Jelly sandwich", "Tiramisu"];
var Content = "";
var Y;
function for_loop() {
    for (Y = 0; Y < Dishes.length; Y++) {
        Content += Dishes[Y] + "<br>";
    }
    document.getElementById(List_of_Dishes).innerHTML = Content;
}

function breakfast() {
    var Breakfast_Foods = [];
    Breakfast_Foods[0] = "pancakes";
    Breakfast_Foods[1] = "waffles";
    Breakfast_Foods[2] = "eggs";
    Breakfast_Foods[3] = "crepes";
    document.getElementById("Morning").innerHTML = "We will be eating " + Breakfast_Foods[3] + " today.";
}