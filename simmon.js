var sound = ["sounds/dog.mp3", "sounds/t.mp3", "sounds/r.mp3", "sounds/e.mp3","sounds/m.mp3"];  //gtrem
var hash = ["g", "t", "r", "e","m"];
var userpattern = [];
var comppattern = [];
var level = 0;
var score = 0;
var flag = 0;
var ind = 0;
document.addEventListener("keypress", function (event) {
    // document.querySelector(".name")= document.querySelector(".name").innerHTML;
    userpattern = [];
    flag = 1;
    ind = 0;
    level = 0;
    score=0;
    comppattern = [];
    generate();
});

function generate() {
    setTimeout(function () { }, 500);
    var random = Math.floor(Math.random() * 5);
    // random=0;
    var audio = new Audio(sound[random]);
    audio.play();
    level++;
    // var l=toString(l;
    document.querySelector("h3").innerHTML = "Level " + level.toString();
    
    comppattern.push(hash[random]);
    userpattern = [];
    ind = 0;

}



document.querySelector(".g").addEventListener("click", function (event) {
    if (flag === 1) {
        userpattern.push("g");
        var audio = new Audio(sound[0]);
        audio.play();
        document.querySelector(".g").classList.add("click");
        setTimeout(function () {
            document.querySelector(".g").classList.toggle("click")
        }, 500);
        if (userpattern[ind] === comppattern[ind]) {



            ind++;
            if (ind === comppattern.length) {
                score=score+ind;
                generate();
             
                document.querySelector("#score").innerHTML = "Score : " + score.toString();
            }
        }
        else {
            flag = 0;
            score=0;
            document.querySelector("h3").innerHTML = "FINISHED";
            var audio = new Audio("sounds/failure.mp3");
            audio.play();
            document.querySelector("h3").innerHTML = 'Press "ANY KEY" for NEW GAME ';
        }
    }
});







document.querySelector(".t").addEventListener("click", function (event) {
    if (flag === 1) {
        userpattern.push("t");
        var audio = new Audio(sound[1]);
        audio.play();
        document.querySelector(".t").classList.add("click");
        setTimeout(function () {
            document.querySelector(".t").classList.toggle("click")
        }, 500);
        if (userpattern[ind] === comppattern[ind]) {



            ind++;
            if (ind === comppattern.length) {
                score=score+ind;
                generate();
                document.querySelector("#score").innerHTML = "Score : " + score.toString();
            }
        }
        else {
            flag = 0;
            score=0;
            document.querySelector("h3").innerHTML = "FINISHED";
            var audio = new Audio("sounds/failure.mp3");
            audio.play();
            document.querySelector("h3").innerHTML = 'Press "ANY KEY" for NEW GAME ';
        }
    }
});









document.querySelector(".r").addEventListener("click", function (event) {
    if (flag === 1) {
        userpattern.push("r");
        var audio = new Audio(sound[2]);
        audio.play();
        document.querySelector(".r").classList.add("click");
        setTimeout(function () {
            document.querySelector(".r").classList.toggle("click")
        }, 500);
        if (userpattern[ind] === comppattern[ind]) {



            ind++;
            if (ind === comppattern.length) {
                score=score+ind;
                generate();
                document.querySelector("#score").innerHTML = "Score : " + score.toString();
            }
        }
        else {
            flag = 0;
            score=0;
            document.querySelector("h3").innerHTML = "FINISHED";
            var audio = new Audio("sounds/failure.mp3");
            audio.play();
            document.querySelector("h3").innerHTML = 'Press "ANY KEY" for NEW GAME ';
        }
    }
});









document.querySelector(".e").addEventListener("click", function (event) {
    if (flag === 1) {
        userpattern.push("e");
        var audio = new Audio(sound[3]);
        audio.play();
        document.querySelector(".e").classList.add("click");
        setTimeout(function () {
            document.querySelector(".e").classList.toggle("click")
        }, 500);
        if (userpattern[ind] === comppattern[ind]) {



            ind++;
            if (ind === comppattern.length) {
                score=score+ind;
                generate();
                document.querySelector("#score").innerHTML = "Score : " + score.toString();
            }
        }
        else {
            flag = 0;
            score=0;
            document.querySelector("h3").innerHTML = "FINISHED";
            var audio = new Audio("sounds/failure.mp3");
            audio.play();
            document.querySelector("h3").innerHTML = 'Press "ANY KEY" for NEW GAME ';
        }
    }
});






document.querySelector(".m").addEventListener("click", function (event) {
    if (flag === 1) {
        userpattern.push("m");
        var audio = new Audio(sound[4]);
        audio.play();
        document.querySelector(".m").classList.add("click");
        setTimeout(function () {
            document.querySelector(".m").classList.toggle("click")
        }, 500);
        if (userpattern[ind] === comppattern[ind]) {



            ind++;
            if (ind === comppattern.length) {
                score=score+ind;
                generate();
                document.querySelector("#score").innerHTML = "Score : " + score.toString();
            }
        }
        else {
            flag = 0;
            score=0;
            document.querySelector("h3").innerHTML = "FINISHED";
            var audio = new Audio("sounds/failure.mp3");
            audio.play();
            document.querySelector("h3").innerHTML = 'Press "ANY KEY" for NEW GAME ';
        }
    }
});
