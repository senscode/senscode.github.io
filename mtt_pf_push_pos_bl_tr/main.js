$( document ).ready(function() {
    console.log( "ready!" );

    //default data
    var handsData = {
        "UT": [93, 85, 50, 30, 23, 21, 19, 17, 17, 14, 14, 13, 12, 12, 11, 10, 10, 10, 8, 8],
        "U2": [93, 85, 50, 32, 27, 23, 21, 19, 19, 17, 17, 14, 14, 14, 13, 12, 11, 11, 10, 10],
        "U3": [93, 85, 52, 35, 30, 27, 23, 23, 21, 21, 19, 19, 17, 17, 14, 13, 13, 13, 12, 12],
        "LJ": [93, 85, 52, 39, 33, 32, 30, 27, 23, 23, 21, 21, 21, 19, 19, 17, 17, 14, 14, 14],
        "HJ": [93, 85, 52, 42, 39, 35, 33, 32, 32, 30, 27, 27, 23, 23, 21, 21, 21, 19, 19, 19],
        "CO": [93, 80, 60, 47, 44, 42, 39, 37, 35, 35, 33, 33, 32, 30, 30, 27, 27, 27, 23, 23],
        "BU": [85, 39, 60, 55, 55, 52, 50, 47, 47, 44, 42, 39, 39, 37, 37, 37, 35, 35, 35, 33],
        "SB": [100, 100, 94, 85, 85, 80, 80, 70, 70, 70, 70, 65, 65, 65, 65, 60, 60, 55, 55, 53]
    }


    var lastHand;
    var lastHandRandomAsnwers;
    var lastHandRightAnswer;
    var lastChoosenAnswer;
    var lastChoosenAnswerIsCorrect;
    var totalHands = 0;
    var winRate = 0;
    var handsWinned = 0;

    //storage data init
    if (localStorage.getItem("totalHandsPPBL") === null) {
        totalHands = 0;
        winRate = 0;
        handsWinned = 0;
    } else {
        totalHands = localStorage.getItem("totalHandsPPBL");
        handsWinned = localStorage.getItem("handsWinnedPPBL");
        winRate = localStorage.getItem("winRatePPBL");
        calcWinRate();
        
    }




    // buttons logic
    
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
        localStorage.setItem("totalHandsPPBL", totalHands);
        localStorage.setItem("handsWinnedPPBL", handsWinned);
        localStorage.setItem("winRatePPBL", winRate);

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
        $(".history-hands").prepend("<div class=\"history-hand\">" + lastHand[0] + " " + lastHand[2] + " " + lastChoosenAnswer + " " + lastChoosenAnswerIsCorrect + "</div>");

        //remove from display excess 20 hands
        if ( $(".history-hand").length > 19 ) {
            $(".history-hand").last().remove();
        }

        totalHands++;
        calcWinRate()
        
    }

    function generateHandAndAnswersAndRender() {
                // chose random hand, generate random answers from right one
        pickRandomHand();
        lastHandRandomAsnwers = generateRandomAnswers()

        //render data
        $(".main-quiz-hand").text(lastHand[0] + " " + lastHand[2] + "BB");

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
        var keys = Object.keys(handsData);
        //pos,stack
        lastHand = [0, 1, 2, 3];
        lastHand[0] = keys[ keys.length * Math.random() << 0]; //pos
        var stackInArray = randInt(0,19); //stack
        var stackPlusOne = stackInArray + 1; //stack
        lastHand[1] = stackInArray;
        lastHand[2] = stackPlusOne;
        lastHand[3] = handsData[lastHand[0]][stackInArray];

        

        return 
    }

    function generateRandomAnswers() {
        lastHandRightAnswer = lastHand[3];
        //var splitAnswer = lastHandRightAnswer.split("/");

        var generateFirstAnswer = "" + (parseInt(lastHandRightAnswer)  + randInt(0,4) - + randInt(0,1));
        var generateSecondAnswer = "" + (parseInt(lastHandRightAnswer)  + randInt(0,3) - + randInt(0,1));
        var generateThirdAnswer = "" + (parseInt(lastHandRightAnswer)  + randInt(0,3) - + randInt(0,1));

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