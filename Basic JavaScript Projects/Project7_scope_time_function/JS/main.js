var N = 13 // Global Variable   
function Add_numbers_1() {
    document.write(34 + N + "<br>");
}
function Add_numbers_2 () {
    document.write(N + 100);
}
Add_numbers_1();
Add_numbers_2();


function Add_numbers_3() { // Local Variable
    var M = 18
    document.write(56+ M + "<br>");
}
function Add_numbers_4() {
    document.write(M + 100);
}
Add_numbers_3 ();
Add_numbers_4 ();

function Add_numbers_5() { // Console Method Error 
    var O = 20
    console.log(15+ O);
}
function Add_numbers_6() {
    console.log(O + 67)
}
Add_numbers_5 ();
Add_numbers_6 ();

function get_Date() { // If Statement
    if (new Date().getHours() <18) {
        document.getElementById("Greeting").innerHTML= "How are you today?";
    }
}

function Time_function () { //Time Function
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time <18) {
        Reply = "It is the afternoon";
    }
    else {
        Reply = "It is evening time";
    }
document.getElementById("Time_of_day").innerHTML = Reply;
}