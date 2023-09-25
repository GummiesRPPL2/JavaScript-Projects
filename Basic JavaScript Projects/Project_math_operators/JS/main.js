/* Addutuion */
function Math_Function(num1, num2) {
    let res = num1 + num2;
    document.getElementById("Math").innerHTML = res;
}

/* Subtraction */
function Subtraction_Function(num1, num2) {
    let res2 = num1 - num2;
    document.getElementById("Sub").innerHTML = res2;
}

/* Multiplication */
function Multiplication_Function(num1, num2) {
    let res3 = num1 * num2;
    document.getElementById("Mult").innerHTML = res3;
}

/* Division */
function Division_Function(num1, num2) {
    let res4 = num1/num2;
    document.getElementById("Divi").innerHTML = res4
}

/* Multiple Operators */
function more_Math() {
    let res5 = (1 + 2) * 10 / 2 - 5;
    document.getElementById("MoreMath").innerHTML = res5
}

/* Modulus */
function Mod_Function(num1, num2) {
    let res6 = num1 % num2;
    document.getElementById("Mod").innerHTML = res6
}

/* Negation */
function Negation_Function(num1) {
    var x = num1;
    document.getElementById("Neg").innerHTML = -x;
}

/* Increment */
function Increment_Function(){
    var x = 0;
    x++;
    document.write(x);
}

/* Decrement */
function Decrement_Function(){
    var x = 6;
    x--;
    document.write(x);
}

/* Random Number Generator */
function random_number(min, max){
    document.write(Math.floor(Math.random()*(max-min)) + min)
}
