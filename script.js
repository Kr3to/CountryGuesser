function getRandom() {
    return Math.floor(Math.random() * 3);
}

var countries = ["poland", "germany", "france"];
var x = getRandom();
var zdjecie = countries[x];

function zgaduj(){

    x = getRandom();
    zdjecie = countries[x];

    document.getElementById("demo").innerHTML = ('<img src="images/'+zdjecie+'.jpg">');

}

function strzal(){

    var input = document.getElementById("input").value;

    if(input == zdjecie){
        alert("dobrze!");
    }
    else{
        alert("zke");
    }
    
}
    









