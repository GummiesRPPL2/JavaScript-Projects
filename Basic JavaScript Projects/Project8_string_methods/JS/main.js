let text1 = "We will "
let text2 = "concatenate these "
let text3 = "three strings together."
let conString = text1.concat(text2, text3)
document.write(conString)

function slice_Method(){
    var fruits = "Strawberry, Blueberry, Raspberry";
    var section = fruits.slice(0,10);
    document.getElementById("Slice").innerHTML = section;
}

function string_Method() {
    var x = 2048582;
    document.getElementById("Numbers_to_string").innerHTML=x.toString();
}

function precision_Method() {
    var x =16874536695528565125663221;
    document.getElementById("Precision").innerHTML=x.toPrecision(7);
}