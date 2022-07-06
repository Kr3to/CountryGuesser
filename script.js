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
    document.getElementById("score").style.display = "none";
    document.getElementById("input").style.display = "none";
    document.getElementById("imaga").innerHTML = ('<img src="images/survival.jpg" class="images">');
}

function survival_go(){
    document.getElementById("survival__info").style.display = "none";
    document.getElementById("go").style.display = "none";
    document.getElementById("score").style.display = "block";
    document.getElementById("input").style.display = "block";
}

function random(){
    let x = Math.floor(Math.random() * 2);
    return x;
}

function roll(){

    const countries = ['australia','brazil'];
    let roll = random();
    let photo = countries[roll];

    let x = document.getElementById("imageee").src= photo+".jpg";

    document.getElementById("imaga").innerHTML = ('<img src="images/'+x+'" class="images">');

}


