$( document ).ready(function() {
    console.log( "ready!" );

    //default data
    var handsData = {
        "AA": "1",
        "KK": "1",
        "QQ": "2",
        "JJ": "3",
        "TT": "5",
        "99": "6",
        "88": "10",
        "77": "10",
        "66": "10",
        "55": "14",
        "44": "17",
        "33": "19",
        "22": "22",

        "AK": "2/3",
        "AQ": "4/4",
        "AJ": "5/11",
        "AT": "6/17",
        "A9": "10/19",
        "A8": "14/21",
        "A7": "17/24",
        "A6": "17/27",
        "A5": "10/27",
        "A4": "17/32",
        "A3": "17/35",
        "A2": "17/37",

        "KQ": "6/12",
        "KJ": "8/17",
        "KT": "8/21",
        "K9": "12/30",
        "K8": "21/37",
        "K7": "23/39",
        "K6": "27/42",
        "K5": "30/44",
        "K4": "32/47",
        "K3": "35/55",
        "K2": "37/55",

        "QJ": "8/23",
        "QT": "8/27",
        "Q9": "13/35",
        "Q8": "27/42",
        "Q7": "35/52",
        "Q6": "35/55",
        "Q5": "39/55",
        "Q4": "42/60",
        "Q3": "44/70",
        "Q2": "47/70",

        "JT": "8/27",
        "J9": "13/39",
        "J8": "27/47",
        "J7": "35/60",
        "J6": "44/70",
        "J5": "47/80",
        "J4": "50/80",
        "J3": "50/80",
        "J2": "60/80",

        "T9": "12/42",
        "T8": "27/47",
        "T7": "35/60",
        "T6": "50/70",
        "T5": "60/80",
        "T4": "70/80",
        "T3": "70/85",
        "T2": "70/93",

        "98": "19/50",
        "97": "32/60",
        "96": "65/80",
        "95": "70/80",
        "94": "85/85",
        "93": "70/93",
        "92": "80/93",

        "87": "30/60",
        "86": "37/65",
        "85": "65/80",
        "84": "85/85",
        "83": "80/93",
        "82": "80/93",

        "76": "30/65",
        "75": "50/80",
        "74": "65/85",
        "73": "80/93",
        "72": "93/100",

        "65": "37/80",
        "64": "50/85",
        "63": "65/93",
        "62": "93/100",

        "54": "50/85",
        "53": "100/93",
        "52": "100/100",

        "43": "65/93",
        "42": "93/100",

        "32": "93/100",

        "KA": "2/3",
        "QA": "4/4",
        "JA": "5/11",
        "TA": "6/17",
        "9A": "10/19",
        "8A": "14/21",
        "7A": "17/24",
        "6A": "17/27",
        "5A": "10/27",
        "4A": "17/32",
        "3A": "17/35",
        "2A": "17/37",

        "QK": "6/12",
        "JK": "8/17",
        "TK": "8/21",
        "9K": "12/30",
        "8K": "21/37",
        "7K": "23/39",
        "6K": "27/42",
        "5K": "30/44",
        "4K": "32/47",
        "3K": "35/55",
        "2K": "37/55",

        "JQ": "8/23",
        "TQ": "8/27",
        "9Q": "13/35",
        "8Q": "27/42",
        "7Q": "35/52",
        "6Q": "35/55",
        "5Q": "39/55",
        "4Q": "42/60",
        "3Q": "44/70",
        "2Q": "47/70",

        "TJ": "8/27",
        "9J": "13/39",
        "8J": "27/47",
        "7J": "35/60",
        "6J": "44/70",
        "5J": "47/80",
        "4J": "50/80",
        "3J": "50/80",
        "2J": "60/80",

        "9T": "12/42",
        "8T": "27/47",
        "7T": "35/60",
        "6T": "50/70",
        "5T": "60/80",
        "4T": "70/80",
        "3T": "70/85",
        "2T": "70/93",

        "89": "19/50",
        "79": "32/60",
        "69": "65/80",
        "59": "70/80",
        "49": "85/85",
        "39": "70/93",
        "29": "80/93",

        "78": "30/60",
        "68": "37/65",
        "58": "65/80",
        "48": "85/85",
        "38": "80/93",
        "28": "80/93",

        "67": "30/65",
        "57": "50/80",
        "47": "65/85",
        "37": "80/93",
        "27": "93/100",

        "56": "37/80",
        "46": "50/85",
        "36": "65/93",
        "26": "93/100",

        "45": "50/85",
        "35": "100/93",
        "25": "100/100",

        "34": "65/93",
        "24": "93/100",
        
        "23": "93/100"
    }

    var firstCard;
    var secondCard;
    var combainedHand;
    var handDataOfCombainedHand;
    var handDataOfCombainedHandSplit;
    var suitedCombainedHand;
    var offSuitedCombainedHand;

    $(".main-card").on("click", function(event) {
        
        if(firstCard) {

            secondCard = event.target.innerText;

            generateSolution();

            render();

            firstCard = 0; // reset selected cards data;
            secondCard = 0;

        } else {

            firstCard = event.target.innerText;
            // console.log(firstCard)

        }

    });


    function generateSolution() {
        combainedHand = "" + firstCard + secondCard;
        handDataOfCombainedHand = handsData[combainedHand];
        handDataOfCombainedHandSplit = handsData[combainedHand].split("/");
        suitedCombainedHand = parseInt(handDataOfCombainedHandSplit[0]);
        offSuitedCombainedHand = handDataOfCombainedHandSplit.length > 1 ? parseInt(handDataOfCombainedHandSplit[1]) : 0;


    }

    //gets ready-to-render data and renders it
    function render() {

        //reset table state to original
        $(".row-5bb .table-col, .row-10bb .table-col, .row-15bb .table-col, .row-20bb .table-col").each(function(i, el){
                    el.classList.remove("suited-col");
                    el.classList.remove("offsuited-col");
        });

        //display selected hand data
        $(".quiz-hand-data").text(combainedHand + " - " + handDataOfCombainedHand);

        //scan table data and compare with selected hand
        $(".row-5bb .table-col, .row-10bb .table-col, .row-15bb .table-col, .row-20bb .table-col").each(function(i, el){
    
            //suit and offsuit compare and render
            if(i > 0 && offSuitedCombainedHand) {
                if (parseInt(el.innerText) >= offSuitedCombainedHand) {
                    // console.log(el.innerText)
                    el.classList.add("offsuited-col");
            }
                
            };
        });


        $(".row-5bb .table-col, .row-10bb .table-col, .row-15bb .table-col, .row-20bb .table-col").each(function(i, el){
            
            //suit and pairs compare and render
            if(i > 0 && offSuitedCombainedHand == 0) {
                if (parseInt(el.innerText) >= suitedCombainedHand) {
                    // console.log(el.innerText)
                    el.classList.add("suited-col");
                }
            } else if (i > 0 && offSuitedCombainedHand) {
                if (parseInt(el.innerText) >= suitedCombainedHand) {
                    // console.log(el.innerText)
                    el.classList.add("suited-col");
                }
            }
        });


    }


    // var handsDataBasedOnSettings = {};
    // var lastHand;
    // var lastHandRandomAsnwers;
    // var lastHandRightAnswer;
    // var lastChoosenAnswer;
    // var lastChoosenAnswerIsCorrect;
    // var totalHands = 0;
    // var winRate = 0;
    // var handsWinned = 0;
    // var lastHandAnswerIsSuited;

    // var checkedCards = {};
    // var handsDataCheckedCards = {};

    // //storage data init
    // if (localStorage.getItem("totalHands") === null) {
    //     totalHands = 0;
    //     winRate = 0;
    //     handsWinned = 0;
    // } else {
    //     totalHands = localStorage.getItem("totalHands");
    //     handsWinned = localStorage.getItem("handsWinned");
    //     winRate = localStorage.getItem("winRate");
    //     calcWinRate();
        
    // }




    // // buttons logic

    // $(".card-input").on("change", function(event) {

    //     // $(".quiz-start").addClass("hidden");
    //     handsDataCheckedCards = {};
        
    //     checkedCards = {
    //         "A" : ($('input[name=A]').is(":checked")) ? handsDataA : false,
    //         "K" : $('input[name=K]').is(":checked") ? handsDataK : false,
    //         "Q" : $('input[name=Q]').is(":checked") ? handsDataQ : false,
    //         "J" : $('input[name=J]').is(":checked") ? handsDataJ : false,
    //         "T" : $('input[name=T]').is(":checked") ? handsDataT : false,
    //         "9" : $('input[name=9]').is(":checked") ? handsData9 : false,
    //         "8" : $('input[name=8]').is(":checked") ? handsData8 : false,
    //         "7" : $('input[name=7]').is(":checked") ? handsData7 : false,
    //         "6" : $('input[name=6]').is(":checked") ? handsData6 : false,
    //         "5" : $('input[name=5]').is(":checked") ? handsData5 : false,
    //         "4" : $('input[name=4]').is(":checked") ? handsData4 : false,
    //         "3" : $('input[name=3]').is(":checked") ? handsData3 : false,
    //         "2" : $('input[name=2]').is(":checked") ? handsData2 : false
    //     }

    //     $.each(checkedCards, function(indx,val) {


            
    //         if(checkedCards[indx]) {
    //             Object.assign(handsDataCheckedCards, checkedCards[indx]);
    //         }
            
    //     });
        
    //     //console.log(checkedCards)

    //     //generateHandAndAnswersAndRender();

    // });
    
    // $(".stats-reset-btn").on("click", function(event) {
    //     event.preventDefault();

    //     totalHands = 0;
    //     winRate = 0;
    //     handsWinned = 0;

    //     $(".stats-hands").text("Hands: " + totalHands);
    //     $(".stats-accuracy").text("Accuracy: " + winRate + "%");
    //     $(".history-hands").empty();

    //     saveToLocalStorage();

    // });

    // $(".quiz-start").on("click", function(event) {
    //     event.preventDefault();

    //     $(".quiz-start").addClass("hidden");

    //     generateHandAndAnswersAndRender();

    // });

    // $(".quiz-answer-1, .quiz-answer-2, .quiz-answer-3, .quiz-answer-4").on("click", function(event) {
    //     event.preventDefault();
    //     $(".quiz-start").addClass("hidden");

    //     lastChoosenAnswer = event.target.innerText;
    //     // check if gives answer is correct
    //     if ( lastChoosenAnswer == lastHandRightAnswer) {
    //         lastChoosenAnswerIsCorrect = "✓";
    //         handsWinned++;
    //     } else {
    //         lastChoosenAnswerIsCorrect = "✗";
    //     }

    //     saveToHistory()


    //     saveToLocalStorage();
        

    //     generateHandAndAnswersAndRender();

    // });


    // //logic functions

    // function saveToLocalStorage() {
    //     localStorage.setItem("totalHands", totalHands);
    //     localStorage.setItem("handsWinned", handsWinned);
    //     localStorage.setItem("winRate", winRate);

    // // var handsPlayed = localStorage.getItem('handsPlayed');
    // // var handsCalled = localStorage.getItem('handsCalled');
    // // var handsRaised = localStorage.getItem('handsRaised');

    // // if (!handsPlayed && handsPlayed != 0) {
    // //     localStorage.setItem("handsPlayed", 0);
    // // }

    // }
    // // calculate winrate
    // function calcWinRate() {
    //     if ( !handsWinned) {
    //         winRate = 0;
    //     } else {
    //         winRate = handsWinned / totalHands * 100;
    //         if(!winRate) {winRate = 0;}
    //         winRate = +winRate.toFixed(0);
    //         $(".stats-accuracy").text("Accuracy: " + winRate + "%");
    //     }

    //     $(".stats-hands").text("Hands: " + totalHands);
        
    // }

    // function saveToHistory() {
    //     $(".history-hands").prepend("<div class=\"history-hand\">" + lastHand + " " + lastChoosenAnswer + " " + lastChoosenAnswerIsCorrect + "</div>");

    //     //remove from display excess 20 hands
    //     if ( $(".history-hand").length > 19 ) {
    //         $(".history-hand").last().remove();
    //     }

    //     totalHands++;
    //     calcWinRate()
        
    // }

    // function generateHandAndAnswersAndRender() {
    //             // chose random hand, generate random answers from right one
    //     lastHand = pickRandomHand();
    //     lastHandRandomAsnwers = generateRandomAnswers()

    //     //render data
    //     $(".main-quiz-hand").text(lastHand);
    //     console.log(lastHandAnswerIsSuited)

    //     if(lastHandAnswerIsSuited) {
    //         $(".main-quiz-hand").addClass("suited");
    //     } else {
    //         $(".main-quiz-hand").removeClass("suited");
    //     }

    //     if (lastHandRandomAsnwers[0]) {
    //         $(".quiz-answer-1").text(lastHandRandomAsnwers[0]);
    //         $(".quiz-answer-1").removeClass("hidden");
    //     } else {
    //         $(".quiz-answer-1").addClass("hidden");
    //     }

    //     if (lastHandRandomAsnwers[1]) {
    //         $(".quiz-answer-2").text(lastHandRandomAsnwers[1]);
    //         $(".quiz-answer-2").removeClass("hidden");
    //     } else {
    //         $(".quiz-answer-2").addClass("hidden");
    //     }

    //     if (lastHandRandomAsnwers[2]) {
    //         $(".quiz-answer-3").text(lastHandRandomAsnwers[2]);
    //         $(".quiz-answer-3").removeClass("hidden");
    //     } else {
    //         $(".quiz-answer-3").addClass("hidden");
    //     }

    //     if (lastHandRandomAsnwers[3]) {
    //         $(".quiz-answer-4").text(lastHandRandomAsnwers[3]);
    //         $(".quiz-answer-4").removeClass("hidden");
    //     } else {
    //         $(".quiz-answer-4").addClass("hidden");
    //     }
    // }

    // function pickRandomHand() {

    //     var keys;

    //     if($.isEmptyObject(checkedCards)) {
    //         keys = Object.keys(handsData);
    //     } else {
    //         keys = Object.keys(handsDataCheckedCards);
    //     }

    //     //console.log(handsDataCheckedCards)

    //     return keys[ keys.length * Math.random() << 0];
    // }

    // function generateRandomAnswers() {
    //     lastHandRightAnswer = handsData[lastHand]; // lastHand is just a key
    //     var splitAnswer = lastHandRightAnswer.split("/"); // 0 is suited, 1 is offsuit
    //     var randForSuitOrNo = splitAnswer.length == 2 ? randInt(0,1) : 0;
    //     lastHandAnswerIsSuited = randForSuitOrNo ? false : true;
    //     var randSuitAnswer = splitAnswer[randForSuitOrNo]; //choose suited or off
    //     lastHandRightAnswer = randSuitAnswer;
    //     var resultedArrOfAns = [];
        
    //     function genAnsw () {
    //         // var generateFirstAnswer = "" + (parseInt(randSuitAnswer)  + randInt(0,4) - + randInt(0,1));
    //         // var generateSecondAnswer = "" + (parseInt(randSuitAnswer)  + randInt(0,3) - + randInt(0,1));
    //         // var generateThirdAnswer = "" + (parseInt(randSuitAnswer)  + randInt(0,3) - + randInt(0,1));
    
    //         // var arrayOfAnswers = [lastHandRightAnswer, generateFirstAnswer, generateSecondAnswer, generateThirdAnswer];
    //         // var cleanArrOfAnswers = [];
            
    //         // $.each(arrayOfAnswers, function(i, el){
    //         //     if($.inArray(el, cleanArrOfAnswers) === -1) cleanArrOfAnswers.push(el);
    //         // });
    
    //         // shuffleArray(cleanArrOfAnswers);
    //         // console.log(cleanArrOfAnswers.length)

    //         // if(cleanArrOfAnswers.length < 3) {
    //         //     resultedArrOfAns = genAnsw();
    //         // }


    //         var randVarOfAnswers = randInt(0,1);

    //         if(randVarOfAnswers) {
    //             randSuitAnswer

    //             var generateFirstAnswer = (parseInt(randSuitAnswer))  + 1;
    //             var generateSecondAnswer = (parseInt(randSuitAnswer)) + 2;
    //             var generateThirdAnswer = (parseInt(randSuitAnswer))  - 1;
        
    //             var arrayOfAnswers = [lastHandRightAnswer, generateFirstAnswer, generateSecondAnswer, generateThirdAnswer];

    //         } else {

    //             var generateFirstAnswer = (parseInt(randSuitAnswer))  - 1;
    //             var generateSecondAnswer = (parseInt(randSuitAnswer)) - 2;
    //             var generateThirdAnswer = (parseInt(randSuitAnswer))  + 1;
        
    //             var arrayOfAnswers = [lastHandRightAnswer, generateFirstAnswer, generateSecondAnswer, generateThirdAnswer];

    //         }


    //         $.each(arrayOfAnswers, function(i, el){
    //             if(el == -1 ) cleanArrOfAnswers.splice(i, 1);
    //         });

    //         shuffleArray(arrayOfAnswers);




    //         return arrayOfAnswers;
    //     }

    //     resultedArrOfAns = genAnsw();

    //     return resultedArrOfAns;
    // }
    // // function generateRandomAnswers() {
    // //     lastHandRightAnswer = handsData[lastHand];
    // //     var splitAnswer = lastHandRightAnswer.split("/");

    // //     var generateFirstAnswer = "" + (parseInt(splitAnswer[0])  + randInt(0,4) - + randInt(0,1));
    // //     var generateSecondAnswer = "" + (parseInt(splitAnswer[0])  + randInt(0,3) - + randInt(0,1));
    // //     var generateThirdAnswer = "" + (parseInt(splitAnswer[0])  + randInt(0,3) - + randInt(0,1));
        
    // //     if (splitAnswer[1]) {
    // //         generateFirstAnswer += "/" + (parseInt(splitAnswer[1])  + randInt(0,3) - + randInt(0,1));
    // //         generateSecondAnswer += "/" + (parseInt(splitAnswer[1])  + randInt(0,3) - + randInt(0,1));
    // //         generateThirdAnswer += "/" + (parseInt(splitAnswer[1])  + randInt(0,3) - + randInt(0,1));
    // //     }

    // //     var arrayOfAnswers = [lastHandRightAnswer, generateFirstAnswer, generateSecondAnswer, generateThirdAnswer];
    // //     var cleanArrOfAnswers = [];
        
    // //     $.each(arrayOfAnswers, function(i, el){
    // //         if($.inArray(el, cleanArrOfAnswers) === -1) cleanArrOfAnswers.push(el);
    // //     });

    // //     shuffleArray(cleanArrOfAnswers);
    // //     return cleanArrOfAnswers;
    // // }

    // function randInt(min, max) {
    //     // случайное число от min до (max+1)
    //     let rand = min + Math.random() * (max + 1 - min);
    //     return Math.floor(rand);
    // }

    // function shuffleArray(array) {
    //     var currentIndex = array.length, temporaryValue, randomIndex;
      
    //     // While there remain elements to shuffle...
    //     while (0 !== currentIndex) {
      
    //       // Pick a remaining element...
    //       randomIndex = Math.floor(Math.random() * currentIndex);
    //       currentIndex -= 1;
      
    //       // And swap it with the current element.
    //       temporaryValue = array[currentIndex];
    //       array[currentIndex] = array[randomIndex];
    //       array[randomIndex] = temporaryValue;
    //     }
      
    //     return array;
    //   }

    
});