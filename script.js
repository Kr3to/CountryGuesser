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

    let input = document.getElementById("input").value;

    if(input == zdjecie){
        document.getElementById("result").innerHTML = ("Correct!");
        wynik=wynik+100;
    }
    else{
        document.getElementById("result").innerHTML = ("Wrong!");
        if(wynik < 100){
            wynik=0;
        }
        else{
            wynik=wynik-100;
        }
    }

    

    let y = getRandom();
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
    if(wynik < 25){
        wynik=0;
    }
    else{
        wynik=wynik-25;
    }
    document.getElementById("score").innerHTML = ('Score: '+wynik);
}

function reveal2(){
    document.getElementById("reveal2").innerHTML = (kontynent);
    if(wynik < 25){
        wynik=0;
    }
    else{
        wynik=wynik-25;
    }
    document.getElementById("score").innerHTML = ('Score: '+wynik);
}


const countries = ["poland", "germany", "france", "brazil", "usa", "china", "kenya", "australia"];
const capitols = ["warsaw", "berlin", "paris", "brasilia", "washington", "beijing", "nairobi", "canberra"];
const continents = ["europe", "europe", "europe" , "south america", "north america", "asia", "africa", "australia and oceania"];


let x = getRandom();
let wynik = 0;
let zdjecie = countries[x];
let stolica = capitols[x];
let kontynent = continents[x];



    









