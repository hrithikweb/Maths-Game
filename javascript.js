var playing = false;
var score;
var action;
var timeremaining;
var correctAns;
// if we click on start/reset 
document.getElementById("startreset").onclick =
    function () {
        if (playing == true) {
            location.reload(); //to reload page
        } else { //if we are not playing

            playing = true;

            score = 0;
            document.getElementById("scoreval").innerHTML =
                score;

            document.getElementById("timeremaining").style.display =
                "block";
                timeremaining = 60;

                document.getElementById("timeval").innerHTML =
                timeremaining;

                hide("gameover");
            

            document.getElementById("startreset").innerHTML =
                "ResetGame";

                startCountdown();

                //QAndA

                generateQA();




        }
    }

    for(i = 1;i<5;i++){
        document.getElementById("box"+i).onclick = 
        function(){
            if(playing == true){
                if(this.innerHTML == correctAns){
                    score++;
                    document.getElementById("scoreval").innerHTML = score;
    
                    hide("wrong");
                    show("correct");
                    setTimeout(function(){hide("correct");}, 1000);
    
                    generateQA();
    
                }else{
                    hide("correct");
                    show("wrong");
                    setTimeout(function(){hide("wrong");}, 1000)
    
                }
            }
        }
    }
   

    function startCountdown(){

        action = setInterval(function(){
            timeremaining -= 1;

            document.getElementById("timeval").innerHTML =
                timeremaining;

                if(timeremaining == 0){
                    stopCount();
                    document.getElementById("gameover").style.display = "block";

                    document.getElementById("gameover").innerHTML = 
                    "<p>GAME OVER</p><p>Your score is" + score + "</p>"

                    hide("timeremaining");
                    hide("correct");
                    hide("wrong");
                    playing = false;
                    document.getElementById("startreset").innerHTML = "start Game";
                }

        },1000)

    }

    function stopCount(){
        clearInterval(action);
    }

    function hide(id){
        document.getElementById(id).style.display = "none";
    }

    function show(id){
        document.getElementById(id).style.display = "block";
    }

    function generateQA(){
        var x = 1 + Math.round(9*Math.random());
        var y = 1 + Math.round(9*Math.random());

        correctAns = x*y;

        document.getElementById("question").innerHTML = x + "X" + y;

            var correctPos = 1 + Math.round(3*Math.random());

            document.getElementById("box" + correctPos).innerHTML = correctAns;
            //fill one box with correect ans

            var answers = [correctAns];
            //fill other with wrong
            for(i = 1; i < 5; i++){
                if(i !== correctPos){
                    var wrongAns;
                    do{
                        wrongAns = (1 + Math.round(3*Math.random()))*(1 + Math.round(3*Math.random()));
                    }
                   
                    while(answers.indexOf(wrongAns)>-1)
                        
                    

                    document.getElementById("box"+i).innerHTML = wrongAns;

                    answers.push(wrongAns);
                }
            }
            
    }

