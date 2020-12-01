function count_to_Six () { //creating while loop
    var Digit = "";
    var X = 1
    while (X <7) {
        Digit += "<br>" + X;
        X++
    }
    document.getElementById("While Loop").innerHTML = Digit;
}

var Instruments = ["Miele", "Electrolux", "iRobot", "Dyson"]; // creating for loop
var Content = "";
var Y;
function for_loop() {
    for (Y=0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Vacuums").innerHTML = Content;
}

var G = 56; //Define let
document.write(G);
{
    let G = 12;
    document.write("<br>" + G);
}
document.write("<br>" + G);

function Airplane_pics() { //Array 
    var Airplane_Picture= [];
    Airplane_Picture[0] = "Delta";
    Airplane_Picture[1]= "Southwest";
    Airplane_Picture[2] = "Spirit"
    document.getElementById("Airplanes").innerHTML = "In this picture, the name is " + Airplane_Picture[2] + ".";
}