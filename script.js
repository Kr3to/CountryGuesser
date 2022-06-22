function getRandom() {

    return Math.floor(Math.random() * 8);

}

function zgaduj(){

    x = getRandom();
    zdjecie = countries[x];
    stolica = capitols[x];
    kontynent = continents[x];

    document.getElementById("demo").innerHTML = ('<img src="images/'+zdjecie+'.jpg">');

}

function strzal(){

    var input = document.getElementById("input").value;

    if(input == zdjecie){
        document.getElementById("result").innerHTML = ("Correct!");
        wynik=wynik+100;
    }
    else{
        document.getElementById("result").innerHTML = ("Wrong!");
        wynik=wynik-100;
    }

    

    var y = getRandom();
    zdjecie = countries[y];
    stolica = capitols[y];
    kontynent = continents[y];

    document.getElementById("demo").innerHTML = ('<img src="images/'+zdjecie+'.jpg">');
    document.getElementById("score").innerHTML = ('Score: '+wynik);

    document.getElementById('input').value="";

    document.getElementById("reveal1").innerHTML = ("Reveal Capitol!");
    document.getElementById("reveal2").innerHTML = ("Reveal Continent!");
    
}

function reveal1(){
    document.getElementById("reveal1").innerHTML = (stolica);
    wynik=wynik-25;
    document.getElementById("score").innerHTML = ('Score: '+wynik);
}

function reveal2(){
    document.getElementById("reveal2").innerHTML = (kontynent);
    wynik=wynik-25;
    document.getElementById("score").innerHTML = ('Score: '+wynik);
}


var countries = ["poland", "germany", "france", "brazil", "usa", "china", "kenya", "australia"];
var capitols = ["warsaw", "berlin", "paris", "brasilia", "washington", "beijing", "nairobi", "canberra"];
var continents = ["europe", "europe", "europe" , "south america", "north america", "asia", "africa", "australia and oceania"];


var x = getRandom();
var wynik = 0;
var zdjecie = countries[x];
var stolica = capitols[x];
var kontynent = continents[x];



    









