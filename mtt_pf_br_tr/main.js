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

        "32": "93/100"
    }

    var handsDataA = {
        "AA": "1",
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
        "A2": "17/37"
    }
    var handsDataK = {
        "KK": "1",
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
        "K2": "37/55"
    }
    var handsDataQ = {
        "QQ": "2",
        "QJ": "8/23",
        "QT": "8/27",
        "Q9": "13/35",
        "Q8": "27/42",
        "Q7": "35/52",
        "Q6": "35/55",
        "Q5": "39/55",
        "Q4": "42/60",
        "Q3": "44/70",
        "Q2": "47/70"
    }
    var handsDataJ = {
        "JJ": "3",
        "JT": "8/27",
        "J9": "13/39",
        "J8": "27/47",
        "J7": "35/60",
        "J6": "44/70",
        "J5": "47/80",
        "J4": "50/80",
        "J3": "50/80",
        "J2": "60/80"
    }
    var handsDataT = {
        "TT": "5",
        "T9": "12/42",
        "T8": "27/47",
        "T7": "35/60",
        "T6": "50/70",
        "T5": "60/80",
        "T4": "70/80",
        "T3": "70/85",
        "T2": "70/93"
    }
    var handsData9 = {
        "99": "6",
        "98": "19/50",
        "97": "32/60",
        "96": "65/80",
        "95": "70/80",
        "94": "85/85",
        "93": "70/93",
        "92": "80/93"
    }
    var handsData8 = {
        "88": "10",
        "87": "30/60",
        "86": "37/65",
        "85": "65/80",
        "84": "85/85",
        "83": "80/93",
        "82": "80/93"
    }
    var handsData7 = {
        "77": "10",
        "76": "30/65",
        "75": "50/80",
        "74": "65/85",
        "73": "80/93",
        "72": "93/100"
    }
    var handsData6 = {
        "66": "10",
        "65": "37/80",
        "64": "50/85",
        "63": "65/93",
        "62": "93/100"
    }
    var handsData5 = {
        "55": "14",
        "54": "50/85",
        "53": "100/93",
        "52": "100/100"
    }
    var handsData4 = {
        "44": "17",
        "43": "65/93",
        "42": "93/100"
    }
    var handsData3 = {
        "33": "19",
        "32": "93/100"
    }
    var handsData2 = {
        "22": "22"
    }

    var handsDataBasedOnSettings = {};
    var lastHand;
    var lastHandRandomAsnwers;
    var lastHandRightAnswer;
    var lastChoosenAnswer;
    var lastChoosenAnswerIsCorrect;
    var totalHands = 0;
    var winRate = 0;
    var handsWinned = 0;

    var checkedCards = {};
    var handsDataCheckedCards = {};

    //storage data init
    if (localStorage.getItem("totalHands") === null) {
        totalHands = 0;
        winRate = 0;
        handsWinned = 0;
    } else {
        totalHands = localStorage.getItem("totalHands");
        handsWinned = localStorage.getItem("handsWinned");
        winRate = localStorage.getItem("winRate");
        calcWinRate();
        
    }




    // buttons logic

    $(".card-input").on("change", function(event) {
        checkedCards = {
            "A" : ($('input[name=A]').is(":checked")) ? handsDataA : false,
            "K" : $('input[name=K]').is(":checked") ? handsDataK : false,
            "Q" : $('input[name=Q]').is(":checked") ? handsDataQ : false,
            "J" : $('input[name=J]').is(":checked") ? handsDataJ : false,
            "T" : $('input[name=T]').is(":checked") ? handsDataT : false,
            "9" : $('input[name=9]').is(":checked") ? handsData9 : false,
            "8" : $('input[name=8]').is(":checked") ? handsData8 : false,
            "7" : $('input[name=7]').is(":checked") ? handsData7 : false,
            "6" : $('input[name=6]').is(":checked") ? handsData6 : false,
            "5" : $('input[name=5]').is(":checked") ? handsData5 : false,
            "4" : $('input[name=4]').is(":checked") ? handsData4 : false,
            "3" : $('input[name=3]').is(":checked") ? handsData3 : false,
            "2" : $('input[name=2]').is(":checked") ? handsData2 : false
        }

        $.each(checkedCards, function(indx,val) {
            
            if(checkedCards[indx]) {
                Object.assign(handsDataCheckedCards, checkedCards[indx]);
            }
            
        });
        
        console.log(checkedCards)

        generateHandAndAnswersAndRender();

    });
    
    $(".stats-reset-btn").on("click", function(event) {
        event.preventDefault();

        totalHands = 0;
        winRate = 0;
        handsWinned = 0;

        $(".stats-hands").text("Hands: " + totalHands);
        $(".stats-accuracy").text("Accuracy: " + winRate + "%");
        $(".history-hands").empty();

        saveToLocalStorage();

    });

    $(".quiz-start").on("click", function(event) {
        event.preventDefault();

        $(".quiz-start").addClass("hidden");

        generateHandAndAnswersAndRender();

    });

    $(".quiz-answer-1, .quiz-answer-2, .quiz-answer-3, .quiz-answer-4").on("click", function(event) {
        event.preventDefault();
        $(".quiz-start").addClass("hidden");

        lastChoosenAnswer = event.target.innerText;

        if ( lastChoosenAnswer == lastHandRightAnswer) {
            lastChoosenAnswerIsCorrect = "✓";
            handsWinned++;
        } else {
            lastChoosenAnswerIsCorrect = "✗";
        }

        saveToHistory()


        saveToLocalStorage();
        

        generateHandAndAnswersAndRender();

    });


    //logic functions

    function saveToLocalStorage() {
        localStorage.setItem("totalHands", totalHands);
        localStorage.setItem("handsWinned", handsWinned);
        localStorage.setItem("winRate", winRate);

    // var handsPlayed = localStorage.getItem('handsPlayed');
    // var handsCalled = localStorage.getItem('handsCalled');
    // var handsRaised = localStorage.getItem('handsRaised');

    // if (!handsPlayed && handsPlayed != 0) {
    //     localStorage.setItem("handsPlayed", 0);
    // }

    }
    // calculate winrate
    function calcWinRate() {
        if ( !handsWinned) {
            winRate = 0;
        } else {
            winRate = handsWinned / totalHands * 100;
            if(!winRate) {winRate = 0;}
            winRate = +winRate.toFixed(0);
            $(".stats-accuracy").text("Accuracy: " + winRate + "%");
        }

        $(".stats-hands").text("Hands: " + totalHands);
        
    }

    function saveToHistory() {
        $(".history-hands").prepend("<div class=\"history-hand\">" + lastHand + " " + lastChoosenAnswer + " " + lastChoosenAnswerIsCorrect + "</div>");

        //remove from display excess 20 hands
        if ( $(".history-hand").length > 19 ) {
            $(".history-hand").last().remove();
        }

        totalHands++;
        calcWinRate()
        
    }

    function generateHandAndAnswersAndRender() {
                // chose random hand, generate random answers from right one
        lastHand = pickRandomHand();
        lastHandRandomAsnwers = generateRandomAnswers()

        //render data
        $(".main-quiz-hand").text(lastHand);

        if (lastHandRandomAsnwers[0]) {
            $(".quiz-answer-1").text(lastHandRandomAsnwers[0]);
            $(".quiz-answer-1").removeClass("hidden");
        } else {
            $(".quiz-answer-1").addClass("hidden");
        }

        if (lastHandRandomAsnwers[1]) {
            $(".quiz-answer-2").text(lastHandRandomAsnwers[1]);
            $(".quiz-answer-2").removeClass("hidden");
        } else {
            $(".quiz-answer-2").addClass("hidden");
        }

        if (lastHandRandomAsnwers[2]) {
            $(".quiz-answer-3").text(lastHandRandomAsnwers[2]);
            $(".quiz-answer-3").removeClass("hidden");
        } else {
            $(".quiz-answer-3").addClass("hidden");
        }

        if (lastHandRandomAsnwers[3]) {
            $(".quiz-answer-4").text(lastHandRandomAsnwers[3]);
            $(".quiz-answer-4").removeClass("hidden");
        } else {
            $(".quiz-answer-4").addClass("hidden");
        }
    }

    function pickRandomHand() {

        var keys;

        if($.isEmptyObject(checkedCards)) {
            keys = Object.keys(handsData);
        } else {
            keys = Object.keys(handsDataCheckedCards);
        }

        //console.log(handsDataCheckedCards)

        return keys[ keys.length * Math.random() << 0];
    }

    function generateRandomAnswers() {
        lastHandRightAnswer = handsData[lastHand];
        var splitAnswer = lastHandRightAnswer.split("/");

        var generateFirstAnswer = "" + (parseInt(splitAnswer[0])  + randInt(0,4) - + randInt(0,1));
        var generateSecondAnswer = "" + (parseInt(splitAnswer[0])  + randInt(0,3) - + randInt(0,1));
        var generateThirdAnswer = "" + (parseInt(splitAnswer[0])  + randInt(0,3) - + randInt(0,1));
        
        if (splitAnswer[1]) {
            generateFirstAnswer += "/" + (parseInt(splitAnswer[1])  + randInt(0,3) - + randInt(0,1));
            generateSecondAnswer += "/" + (parseInt(splitAnswer[1])  + randInt(0,3) - + randInt(0,1));
            generateThirdAnswer += "/" + (parseInt(splitAnswer[1])  + randInt(0,3) - + randInt(0,1));
        }

        var arrayOfAnswers = [lastHandRightAnswer, generateFirstAnswer, generateSecondAnswer, generateThirdAnswer];
        var cleanArrOfAnswers = [];
        
        $.each(arrayOfAnswers, function(i, el){
            if($.inArray(el, cleanArrOfAnswers) === -1) cleanArrOfAnswers.push(el);
        });

        shuffleArray(cleanArrOfAnswers);
        return cleanArrOfAnswers;
    }

    function randInt(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    function shuffleArray(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }


    // //default storage
    // var handsPlayed = localStorage.getItem('handsPlayed');
    // var handsCalled = localStorage.getItem('handsCalled');
    // var handsRaised = localStorage.getItem('handsRaised');

    // if (!handsPlayed && handsPlayed != 0) {
    //     localStorage.setItem("handsPlayed", 0);
    // }

    // if (!handsPlayed && handsCalled != 0) {
    //     localStorage.setItem("handsCalled", 0);
    // }

    // if (!handsPlayed && handsRaised != 0) {
    //     localStorage.setItem("handsRaised", 0);
    // }

    // var playersPositions = ["EP", "MP" , "CO", "BU", "SB", "BB"];

    // var playerActions = ["Fold", "Raise"];

    // var playersStats = ["12/10", "24/20" , "44/40", "70/20", "27/24"];

    // var cards = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];

    // var suitColours = ["#464656", "#367e2f", "#923232", "#2f8d92"];

    // function nextPlayersPositions() {

    //     var firsPos = playersPositions.pop();
    //     playersPositions.unshift(firsPos);
        

    //     $(".player_1_position").text(playersPositions[0]);
    //     $(".player_2_position").text(playersPositions[1]);
    //     $(".player_3_position").text(playersPositions[2]);
    //     $(".player_4_position").text(playersPositions[3]);
    //     $(".player_5_position").text(playersPositions[4]);
    //     $(".player_6_position").text(playersPositions[5]);

        
    // }

    // function nextRandomRaiser(randomNum) { 


    //     if  ( $(".player_5_position").text() == "EP" ) {
    //         $(".player_1_action").text("");
    //         $(".player_2_action").text("");
    //         $(".player_3_action").text("");
    //         $(".player_4_action").text("");
    //         $(".player_6_action").text("");
    //     }

    //     if  ( $(".player_5_position").text() == "MP" ) {
    //         $(".player_1_action").text("");
    //         $(".player_2_action").text("");
    //         $(".player_3_action").text("");
    //         $(".player_6_action").text("");

    //         var playerAction = playerActions[randomAction()];

    //         $(".player_4_action").text(playerAction);
    //     }

    //     if  ( $(".player_5_position").text() == "CO" ) {
    //         $(".player_1_action").text("");
    //         $(".player_2_action").text("");
    //         $(".player_6_action").text("");

    //         var playerAction = playerActions[randomAction()];

    //         var availableActionPositionCO = [".player_3_action", ".player_4_action"];
    //         var playerIndex = randomInteger(0,1);
    //         var playerRaiser = availableActionPositionCO[playerIndex];
    //         $(playerRaiser).text(playerAction);

    //         var playersFold = availableActionPositionCO.splice(playerIndex, 1);

    //         for ( var i = 0; i < availableActionPositionCO.length; i++) {
    //             $(availableActionPositionCO[i]).text("Fold");
    //         }
    //     }

    //     if  ( $(".player_5_position").text() == "BU" ) {
    //         $(".player_1_action").text("");
    //         $(".player_6_action").text("");

    //         var playerAction = playerActions[randomAction()];

    //         var availableActionPositionCO = [".player_2_action", ".player_3_action", ".player_4_action"];
    //         var playerIndex = randomInteger(0,2);
    //         var playerRaiser = availableActionPositionCO[playerIndex];
    //         $(playerRaiser).text(playerAction);

    //         var playersFold = availableActionPositionCO.splice(playerIndex, 1);

    //         for ( var i = 0; i < availableActionPositionCO.length; i++) {
    //             $(availableActionPositionCO[i]).text("Fold");
    //         }
    //     }

    //     if  ( $(".player_5_position").text() == "SB" ) {
    //         $(".player_6_action").text("");

    //         var playerAction = playerActions[randomAction()];

    //         var availableActionPositionCO = [".player_1_action", ".player_2_action", ".player_3_action", ".player_4_action"];
    //         var playerIndex = randomInteger(0,3);
    //         var playerRaiser = availableActionPositionCO[playerIndex];
    //         $(playerRaiser).text(playerAction);

    //         var playersFold = availableActionPositionCO.splice(playerIndex, 1);

    //         for ( var i = 0; i < availableActionPositionCO.length; i++) {
    //             $(availableActionPositionCO[i]).text("Fold");
    //         }
    //     }

    //     if  ( $(".player_5_position").text() == "BB" ) {

    //         var playerAction = playerActions[randomAction()];

    //         var availableActionPositionCO = [".player_6_action", ".player_1_action", ".player_2_action", ".player_3_action", ".player_4_action"];
    //         var playerIndex = randomInteger(0,4);
    //         var playerRaiser = availableActionPositionCO[playerIndex];
    //         $(playerRaiser).text(playerAction);

    //         var playersFold = availableActionPositionCO.splice(playerIndex, 1);

    //         for ( var i = 0; i < availableActionPositionCO.length; i++) {
    //             $(availableActionPositionCO[i]).text("Fold");
    //         }
    //     }

    // }

    // function randomCardDealer(firstNum, firstSuit, secondNum, secondSuit) {

    //     // no duplicate suits in pair hands
    //     function suitPairsCheck() {
    //         if (firstNum == secondNum) {
    //             if (firstSuit == secondSuit) {
    //                 firstSuit = randomInteger(0, 3);
    //                 suitPairsCheck();
    //             }
    //         }

    //     }

        
    //     $(".hero_fcard").css({"background-color": suitColours[firstSuit]});
    //     $(".hero_scard").css({"background-color": suitColours[secondSuit]});
        

    //     $(".hero_fcard").text(cards[firstNum]);
    //     $(".hero_scard").text(cards[secondNum]);


    // }

    // function randomInteger(min, max) {
    //     // случайное число от min до (max+1)
    //     let rand = min + Math.random() * (max + 1 - min);
    //     return Math.floor(rand);
    // }

    // function handsPlayedIncr() {
    //     var start = parseInt(localStorage.getItem("handsPlayed")) + 1;
    //     localStorage.setItem("handsPlayed", start);
    //     $(".hands_played").text("Hands: " + start);
    // }

    // function handsCalledIncr() {
    //     var start = parseInt(localStorage.getItem("handsCalled")) + 1;
    //     localStorage.setItem("handsCalled", start);
    //     $(".hands_called").text("Called: " + start);
    // }

    // function handsRaisedIncr() {
    //     var start = parseInt(localStorage.getItem("handsRaised")) + 1;
    //     localStorage.setItem("handsRaised", start);
    //     $(".hands_raised").text("Raised: " + start);
    // }

    // function randomAction() {
    //     return randomInteger(0,1);
    // }

    // function nextPlayerActionVisuals() {
    //     //defaults
    //     $(".player_1").removeClass("bold");
    //     $(".player_2").removeClass("bold");
    //     $(".player_3").removeClass("bold");
    //     $(".player_4").removeClass("bold");
    //     $(".player_6").removeClass("bold");
    //     $(".player_1").removeClass("faded");
    //     $(".player_2").removeClass("faded");
    //     $(".player_3").removeClass("faded");
    //     $(".player_4").removeClass("faded");
    //     $(".player_6").removeClass("faded");

    //     var playersPoses = [".player_1_position", ".player_2_position", ".player_3_position", ".player_4_position", ".player_5_position", ".player_6_position"];

    //     for (var i = 0; i < playersPoses.length; i++) {
    //         $(playersPoses[i]).removeClass("button");

    //         if ($(playersPoses[i]).text() == "BU") {
    //             $(playersPoses[i]).addClass("button");
    //         }
    //     }

        

    //     if ( $(".player_1_action").text() == "Fold" ) {
    //         $(".player_1").addClass("faded");
    //     }
    //     if ( $(".player_1_action").text() == "Raise" ) {
    //         $(".player_1").addClass("bold");
    //     }

    //     if ( $(".player_2_action").text() == "Fold" ) {
    //         $(".player_2").addClass("faded");
    //     }
    //     if ( $(".player_2_action").text() == "Raise" ) {
    //         $(".player_2").addClass("bold");
    //     }

    //     if ( $(".player_3_action").text() == "Fold" ) {
    //         $(".player_3").addClass("faded");
    //     }
    //     if ( $(".player_3_action").text() == "Raise" ) {
    //         $(".player_3").addClass("bold");
    //     }

    //     if ( $(".player_4_action").text() == "Fold" ) {
    //         $(".player_4").addClass("faded");
    //     }
    //     if ( $(".player_4_action").text() == "Raise" ) {
    //         $(".player_4").addClass("bold");
    //     }

    //     if ( $(".player_6_action").text() == "Fold" ) {
    //         $(".player_6").addClass("faded");
    //     }
    //     if ( $(".player_6_action").text() == "Raise" ) {
    //         $(".player_6").addClass("bold");
    //     }

    // }

    // $(".fold, .call, .raise").on("click", function(event) {
    //     event.preventDefault();
    //     nextPlayersPositions();
    //     nextRandomRaiser(randomInteger(1, 5), randomInteger(1, 4));
    //     nextPlayerActionVisuals();
    //     randomCardDealer(randomInteger(0, 12), randomInteger(0, 3), randomInteger(0, 12), randomInteger(0, 3));
    //     handsPlayedIncr();


    // });

    // $(".call").on("click", function(event) {
    //     event.preventDefault();
    //     nextPlayersPositions();
    //     nextRandomRaiser(randomInteger(1, 5), randomInteger(1, 4));
    //     nextPlayerActionVisuals();
    //     randomCardDealer(randomInteger(0, 12), randomInteger(0, 3), randomInteger(0, 12), randomInteger(0, 3));
    //     handsCalledIncr();


    // });

    // $(".raise").on("click", function(event) {
    //     event.preventDefault();
    //     nextPlayersPositions();
    //     nextRandomRaiser(randomInteger(1, 5), randomInteger(1, 4));
    //     nextPlayerActionVisuals();
    //     randomCardDealer(randomInteger(0, 12), randomInteger(0, 3), randomInteger(0, 12), randomInteger(0, 3));
    //     handsRaisedIncr();


    // });






    
});