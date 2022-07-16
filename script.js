function classic() {
    document.getElementById("survival").style.display = "none";
    document.getElementById("speedrun").style.display = "none";
    document.getElementById("test").style.display = "block";
    document.getElementById("start1").style.display = "none";
    document.getElementById("go1").style.display = "block";
}

function speedrun() {
    document.getElementById("classic").style.display = "none";
    document.getElementById("survival").style.display = "none";
    document.getElementById("start2").style.display = "none";
    document.getElementById("test1").style.display = "block";
    document.getElementById("go2").style.display = "block";
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
    document.getElementById("start1").style.display = "block";
    document.getElementById("start2").style.display = "block";
    document.getElementById("go").style.display = "none";
    document.getElementById("go1").style.display = "none";
    document.getElementById("go2").style.display = "none";
    document.getElementById("survival__info").style.display = "block";
    document.getElementById("classic__info").style.display = "block";
    document.getElementById("speedrun__info").style.display = "block";
    document.getElementById("box").style.display = "none";
    document.getElementById("box1").style.display = "none";
    document.getElementById("box2").style.display = "none";
    document.getElementById("imaga").innerHTML = ('<img src="images/survival.jpg" class="images">');
    document.getElementById("imaga1").innerHTML = ('<img src="images/classic.jpg" class="images">');
    document.getElementById("imaga2").innerHTML = ('<img src="images/time.jpeg" class="images">');
    document.getElementById("imaga1").style.display = "block";
    document.getElementById("result").innerHTML = "";
    score = 0;
    image = 0;
    points = 100;
    percent = 0;
    guesses = 0;
    end = 0;
    document.getElementById("score").innerHTML = "Streak: 0";
    document.getElementById("result1").innerHTML = "";
    document.getElementById("score1").innerHTML = "Points: 100";
    document.getElementById("level").innerHTML = "";
    var ended = document.getElementById("final");
    ended.remove();
    document.getElementById("title").style.display = "block";
}

function survival_go(){
    document.getElementById("survival__info").style.display = "none";
    document.getElementById("go").style.display = "none";
    document.getElementById("box").style.display = "block";
    roll();
}

function speedrun_go(){
    document.getElementById("speedrun__info").style.display = "none";
    document.getElementById("go2").style.display = "none";
    document.getElementById("box2").style.display = "block";
    roll1();
}

function classic_go(){
    document.getElementById("classic__info").style.display = "none";
    document.getElementById("go1").style.display = "none";
    document.getElementById("box1").style.display = "block";
    document.getElementById("imaga1").innerHTML = ('<img src="images/'+countries[0]+'.jpg" class="images">');
    document.getElementById("level").innerHTML = "Level: 1/"+max_level;
    
}

function random(){
    var x = Math.floor(Math.random() * max_level);
    return x;
}

function roll(){

    rollo = random();
    photo = countries[rollo];

    document.getElementById("imaga").innerHTML = ('<img src="images/'+photo+'.jpg" class="images">');

}

function roll1(){
    rollo = random();
    photo = countries[rollo];

    document.getElementById("imaga2").innerHTML = ('<img src="images/'+photo+'.jpg" class="images">');
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

function submit1(){

    value = document.getElementById("input1").value;
    var answer = value.toLowerCase();
    var current_level = image+2;
    const guess = document.getElementById('input1');
    var close = max_level + 1;

    if(answer == "")
    {
        alert("You have to type something!");
    }
    else{
        if(answer == countries[image])
        {
            if(points < 100){
                points = 100;
                guesses = guesses + 1;
            }
            else{
                points = points * 2;
                guesses = guesses + 1;
            }
        document.getElementById("score1").innerHTML = "Points: "+points;
        document.getElementById("result1").innerHTML = "Correct!";
        document.getElementById("result1").style.color = "green";
        image++;
        document.getElementById("imaga1").innerHTML = ('<img src="images/'+countries[image]+'.jpg" class="images">');
        }
        else{
            if(points < 100){
                points = 0;
                guesses = guesses + 1;
            }
            else{
                points = points - 100;
                guesses = guesses + 1;
            }
        document.getElementById("score1").innerHTML = "Points: "+points;
        document.getElementById("result1").innerHTML = "Wrong!";
        document.getElementById("result1").style.color = "red";
        current_level = image+1;
        }
        if(current_level == close){
            document.getElementById("box1").style.display = "none";
            document.getElementById("imaga1").style.display = "none";
            document.getElementById("title").style.display = "none";
            guess.value = "";
            var end =  max_level / guesses;
            var percent = end * 100;
            var percent_to2 = percent.toFixed(2);
            var final = document.createElement('p');
            final.setAttribute("id", "final");
            final.innerHTML = "Congratulation!<br>You have finished the classic mode!<br><br>Stats:<br>Accuracy: "+percent_to2+"%<br>Points: "+points;
            const place = document.querySelector('#classic');
            place.appendChild(final);
        }
        else{
            document.getElementById("level").innerHTML = "Level: "+current_level+"/"+max_level;
            guess.value = "";
        }
        
    }
}

const countries = ['australia','brazil','china','france','germany','kenya','poland','usa'];
var max_level = countries.length;
var rollo;
var photo;
var score = 0;
var points = 100;
var guesses = 0;
var image = 0;
var value;

const a = document.getElementById("start1");
a.addEventListener("click", classic);
const b = document.getElementById("start2");
b.addEventListener("click", speedrun);
const c = document.getElementById("start");
c.addEventListener("click", survival);
const exit = document.getElementById("test");
exit.addEventListener("click", back);
const exit1 = document.getElementById("test1");
exit1.addEventListener("click", back);
const exit2 = document.getElementById("test2");
exit2.addEventListener("click", back);
const go = document.getElementById("go1");
go.addEventListener("click", classic_go);
const go1 = document.getElementById("go");
go1.addEventListener("click", survival_go);
const go2 = document.getElementById("go2");
go2.addEventListener("click", speedrun_go);
const submitt = document.getElementById("submit1");
submitt.addEventListener("click", submit1);
const submitt1 = document.getElementById("submit");
submitt1.addEventListener("click", submit);


