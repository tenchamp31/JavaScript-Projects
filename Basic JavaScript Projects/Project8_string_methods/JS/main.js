function full_Sentence () { //Concatenate
    var part_1 = "Sony makes";
    var part_2 = " the worst Soundbars ";

    var whole_sentence = part_1.concat(part_2);
    document.getElementById("Concatenate").innerHTML= whole_sentence;
}


function slice_Method() { //Slice method
    var Sentence = "Hardwork beats talent when talent fails to work hard";
    var Section = Sentence.slice(21,34);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() { //String Method
    var B =172;
    document.getElementById("Numbers_to_string").innerHTML = B.toString();
}

function precision_Method () {
    var W = 237463246234.4734553;
    document.getElementById("Precision").innerHTML = W.toPrecision(12);
}