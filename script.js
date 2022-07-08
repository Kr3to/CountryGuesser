function classic() {
    document.getElementById("survival").style.display = "none";
    document.getElementById("speedrun").style.display = "none";
    document.getElementById("test").style.display = "block";
}

function speedrun() {
    document.getElementById("classic").style.display = "none";
    document.getElementById("survival").style.display = "none";
    document.getElementById("test1").style.display = "block";
}

function survival() {
    document.getElementById("classic").style.display = "none";
    document.getElementById("speedrun").style.display = "none";
    document.getElementById("test2").style.display = "block";
    document.getElementById("start").style.display = "none";
    document.getElementById("go").style.display = "block";
}

function back() {
    document.getElementById("survival").style.display = "inline";
    document.getElementById("speedrun").style.display = "inline";
    document.getElementById("classic").style.display = "inline";
    document.getElementById("test").style.display = "none";
    document.getElementById("test1").style.display = "none";
    document.getElementById("test2").style.display = "none";
    document.getElementById("start").style.display = "block";
    document.getElementById("go").style.display = "none";
    document.getElementById("survival__info").style.display = "block";
    document.getElementById("box").style.display = "none";
    document.getElementById("imaga").innerHTML = ('<img src="images/survival.jpg" class="images">');
    document.getElementById("result").innerHTML = "";
    score = 0;
    document.getElementById("score").innerHTML = "Streak: 0";
}

function survival_go(){
    document.getElementById("survival__info").style.display = "none";
    document.getElementById("go").style.display = "none";
    document.getElementById("box").style.display = "block";
    roll();
}

function random(){
    var x = Math.floor(Math.random() * 8);
    return x;
}

function roll(){

    rollo = random();
    photo = countries[rollo];

    document.getElementById("imaga").innerHTML = ('<img src="images/'+photo+'.jpg" class="images">');

}

function submit(){

    value = document.getElementById("input").value;
    var answer = value.toLowerCase();
    var emoji1 = "🤓";
    var emoji2 = "🤠";
    var emoji3 = "😮";
    var emoji4 = "😲";
    var emoji5 = "😎";


    if(answer == "")
    {
        alert("You have to type something!");
    }
    else{
        if(answer == photo)
        {
        score = score + 1;
        document.getElementById("score").innerHTML = "Streak: "+score;
        document.getElementById("result").innerHTML = "Correct!";
        document.getElementById("result").style.color = "green";
        }
        else{
        score = 0;
        document.getElementById("score").innerHTML = "Streak: "+score;
        document.getElementById("result").innerHTML = "Wrong!";
        document.getElementById("result").style.color = "red";
        }
        roll();
        const guess = document.getElementById('input');
        guess.value = "";
    }

    if(score == 0){
        document.getElementById("score").innerHTML = "Streak: "+score;
    }
    else if(score > 0 && score < 3){
        document.getElementById("score").innerHTML = "Streak: "+score+" "+emoji1;
    }
    else if(score >= 3 && score < 6){
        document.getElementById("score").innerHTML = "Streak: "+score+" "+emoji2;
    }
    else if(score >= 5 && score < 10){
        document.getElementById("score").innerHTML = "Streak: "+score+" "+emoji3;
    }
    else if(score >= 10 && score < 20){
        document.getElementById("score").innerHTML = "Streak: "+score+" "+emoji4;
    }
    else{
        document.getElementById("score").innerHTML = "Streak: "+score+" "+emoji5;
    }
}

const countries = ['australia','brazil','china','france','germany','kenya','poland','usa'];
var rollo;
var photo;
var score = 0;
var value;
