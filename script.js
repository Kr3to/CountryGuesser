function getRandom() {

    return Math.floor(Math.random() * 3);

}

function zgaduj(){

    x = getRandom();
    zdjecie = countries[x];

    document.getElementById("demo").innerHTML = ('<img src="images/'+zdjecie+'.jpg">');

}

function strzal(){

    var input = document.getElementById("input").value;

    if(input == zdjecie){
        document.getElementById("result").innerHTML = ("Correct!");
        wynik++;
    }
    else{
        document.getElementById("result").innerHTML = ("Wrong!")
    }

    var y = getRandom();
    zdjecie = countries[y];

    document.getElementById("demo").innerHTML = ('<img src="images/'+zdjecie+'.jpg">');
    document.getElementById("score").innerHTML = ('Score: '+wynik);

    document.getElementById('input').value="";
    
}

var countries = ["poland", "germany", "france"];
var x = getRandom();
var wynik = 0;
var zdjecie = countries[x];




    









