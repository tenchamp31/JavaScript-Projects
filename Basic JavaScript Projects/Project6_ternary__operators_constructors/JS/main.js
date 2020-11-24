function Ride_Function () {  //Ternary Operation
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height <52) ? "You are too short": "You are tall enough";
    document.getElementById("Ride").innerHTML= Can_ride + " to ride.";   
}

function Computer(Make, Model, Year, Color) { //utlizing This
    this.Computer_Make= Make;
    this.Computer_Model= Model;
    this.Computer_Year= Year;
    this.Computer_Color= Color;
}

var Rahul = new Computer("Apple", "Macbook Pro", 2019, "Space Grey"); //Defining new
var Sarah= new Computer("Dell", "Inspiron", 2018, "Navy Blue");
function myFunction() {
    document.getElementById("Constructingkeywords").innerHTML = 
    "Rahul uses a " + Rahul.Computer_Color + "-colored " + Rahul.Computer_Model + " manufactured in " + Rahul.Computer_Year;
}

function count_Function () {  //Nested Function
    document.getElementById("Counting").innerHTML = Count();
    function Count () {
        var Starting_point = 11;
        function Plus_one () {Starting_point += 1;}
        Plus_one ();
        return Starting_point;
    }
}
