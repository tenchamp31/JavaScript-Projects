function my_Dictionary() { //Adding key-value pair
    var Animal = {
        Species: "Snake",
        Color: "Red",
        Region: "European",
        Age: 4,
        Type: "Tree",
        Sound:"Hiss!"   
    };
    delete Animal.Sound; //Delete operator
document.getElementById("Dictionary").innerHTML = Animal.Sound;
}