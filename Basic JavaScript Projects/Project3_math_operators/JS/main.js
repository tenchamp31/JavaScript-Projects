var X=5;
X++;
document.write(X); // Increment 

var Y = 7;
Y--;
document.write(Y); // Decrement

window.alert(Math.random()*50); //Adding random window alert for math

function subtraction_Function () {   //subtraction function
var Subtraction = 5-2;
document.getElementById("Math").innerHTML = "5-2 = " + Subtraction;
}

function multiplication() {  //Multiplication function
    var simple_Math = 7*8;
    document.getElementById("Multiply").innerHTML = "6 x 8 = " + simple_Math;
}

function division () { // Division Function
        var simple_Math = 72 / 12;
        document.getElementById("Divide").innerHTML = "72 / 12 = " +simple_Math;
}

function modulus_Operator () { //Remainder function
    var simple_Math = 72 % 7;
    document.getElementById("Modulus").innerHTML = "When you divide 72 by 7 you have a reaminder of: " + simple_Math;
}

function addition () { // Addition Function
    var simple_Math = 9 + 8;
    document.getElementById("Add").innerHTML = "9 + 8 = " +simple_Math;
}
