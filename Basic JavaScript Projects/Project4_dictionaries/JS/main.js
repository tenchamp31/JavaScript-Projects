function my_Dictionary() {
    var Animal = {
        Species: "Snake",
        Color: "Red",
        Region: "European",
        Age: 4,
        Type: "Tree",
        Sound:"Hiss!"   
    };
    delete Animal.Sound;
document.getElementById("Dictionary").innerHTML = Animal.Sound;
}