$( document ).ready(function() {
    console.log( "ready!" );

    //default storage
    var handsPlayed = localStorage.getItem('handsPlayed');
    var handsCalled = localStorage.getItem('handsCalled');
    var handsRaised = localStorage.getItem('handsRaised');

    if (!handsPlayed && handsPlayed != 0) {
        localStorage.setItem("handsPlayed", 0);
    }

    if (!handsPlayed && handsCalled != 0) {
        localStorage.setItem("handsCalled", 0);
    }

    if (!handsPlayed && handsRaised != 0) {
        localStorage.setItem("handsRaised", 0);
    }

    var playersPositions = ["EP", "MP" , "CO", "BU", "SB", "BB"];

    var playerActions = ["Fold", "Raise"];

    var playersStats = ["12/10", "24/20" , "44/40", "70/20", "27/24"];

    var cards = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];

    var suitColours = ["#464656", "#367e2f", "#923232", "#2f8d92"];

    function nextPlayersPositions() {

        var firsPos = playersPositions.pop();
        playersPositions.unshift(firsPos);
        

        $(".player_1_position").text(playersPositions[0]);
        $(".player_2_position").text(playersPositions[1]);
        $(".player_3_position").text(playersPositions[2]);
        $(".player_4_position").text(playersPositions[3]);
        $(".player_5_position").text(playersPositions[4]);
        $(".player_6_position").text(playersPositions[5]);

        
    }

    function nextRandomRaiser(randomNum) { 


        if  ( $(".player_5_position").text() == "EP" ) {
            $(".player_1_action").text("");
            $(".player_2_action").text("");
            $(".player_3_action").text("");
            $(".player_4_action").text("");
            $(".player_6_action").text("");
        }

        if  ( $(".player_5_position").text() == "MP" ) {
            $(".player_1_action").text("");
            $(".player_2_action").text("");
            $(".player_3_action").text("");
            $(".player_6_action").text("");

            var playerAction = playerActions[randomAction()];

            $(".player_4_action").text(playerAction);
        }

        if  ( $(".player_5_position").text() == "CO" ) {
            $(".player_1_action").text("");
            $(".player_2_action").text("");
            $(".player_6_action").text("");

            var playerAction = playerActions[randomAction()];

            var availableActionPositionCO = [".player_3_action", ".player_4_action"];
            var playerIndex = randomInteger(0,1);
            var playerRaiser = availableActionPositionCO[playerIndex];
            $(playerRaiser).text(playerAction);

            var playersFold = availableActionPositionCO.splice(playerIndex, 1);

            for ( var i = 0; i < availableActionPositionCO.length; i++) {
                $(availableActionPositionCO[i]).text("Fold");
            }
        }

        if  ( $(".player_5_position").text() == "BU" ) {
            $(".player_1_action").text("");
            $(".player_6_action").text("");

            var playerAction = playerActions[randomAction()];

            var availableActionPositionCO = [".player_2_action", ".player_3_action", ".player_4_action"];
            var playerIndex = randomInteger(0,2);
            var playerRaiser = availableActionPositionCO[playerIndex];
            $(playerRaiser).text(playerAction);

            var playersFold = availableActionPositionCO.splice(playerIndex, 1);

            for ( var i = 0; i < availableActionPositionCO.length; i++) {
                $(availableActionPositionCO[i]).text("Fold");
            }
        }

        if  ( $(".player_5_position").text() == "SB" ) {
            $(".player_6_action").text("");

            var playerAction = playerActions[randomAction()];

            var availableActionPositionCO = [".player_1_action", ".player_2_action", ".player_3_action", ".player_4_action"];
            var playerIndex = randomInteger(0,3);
            var playerRaiser = availableActionPositionCO[playerIndex];
            $(playerRaiser).text(playerAction);

            var playersFold = availableActionPositionCO.splice(playerIndex, 1);

            for ( var i = 0; i < availableActionPositionCO.length; i++) {
                $(availableActionPositionCO[i]).text("Fold");
            }
        }

        if  ( $(".player_5_position").text() == "BB" ) {

            var playerAction = playerActions[randomAction()];

            var availableActionPositionCO = [".player_6_action", ".player_1_action", ".player_2_action", ".player_3_action", ".player_4_action"];
            var playerIndex = randomInteger(0,4);
            var playerRaiser = availableActionPositionCO[playerIndex];
            $(playerRaiser).text(playerAction);

            var playersFold = availableActionPositionCO.splice(playerIndex, 1);

            for ( var i = 0; i < availableActionPositionCO.length; i++) {
                $(availableActionPositionCO[i]).text("Fold");
            }
        }

    }

    function randomCardDealer(firstNum, firstSuit, secondNum, secondSuit) {

        // no duplicate suits in pair hands
        function suitPairsCheck() {
            if (firstNum == secondNum) {
                if (firstSuit == secondSuit) {
                    firstSuit = randomInteger(0, 3);
                    suitPairsCheck();
                }
            }

        }

        
        $(".hero_fcard").css({"background-color": suitColours[firstSuit]});
        $(".hero_scard").css({"background-color": suitColours[secondSuit]});
        

        $(".hero_fcard").text(cards[firstNum]);
        $(".hero_scard").text(cards[secondNum]);


    }

    function randomInteger(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    function handsPlayedIncr() {
        var start = parseInt(localStorage.getItem("handsPlayed")) + 1;
        localStorage.setItem("handsPlayed", start);
        $(".hands_played").text("Hands: " + start);
    }

    function handsCalledIncr() {
        var start = parseInt(localStorage.getItem("handsCalled")) + 1;
        localStorage.setItem("handsCalled", start);
        $(".hands_called").text("Called: " + start);
    }

    function handsRaisedIncr() {
        var start = parseInt(localStorage.getItem("handsRaised")) + 1;
        localStorage.setItem("handsRaised", start);
        $(".hands_raised").text("Raised: " + start);
    }

    function randomAction() {
        return randomInteger(0,1);
    }

    function nextPlayerActionVisuals() {
        //defaults
        $(".player_1").removeClass("bold");
        $(".player_2").removeClass("bold");
        $(".player_3").removeClass("bold");
        $(".player_4").removeClass("bold");
        $(".player_6").removeClass("bold");
        $(".player_1").removeClass("faded");
        $(".player_2").removeClass("faded");
        $(".player_3").removeClass("faded");
        $(".player_4").removeClass("faded");
        $(".player_6").removeClass("faded");

        var playersPoses = [".player_1_position", ".player_2_position", ".player_3_position", ".player_4_position", ".player_5_position", ".player_6_position"];

        for (var i = 0; i < playersPoses.length; i++) {
            $(playersPoses[i]).removeClass("button");

            if ($(playersPoses[i]).text() == "BU") {
                $(playersPoses[i]).addClass("button");
            }
        }

        

        if ( $(".player_1_action").text() == "Fold" ) {
            $(".player_1").addClass("faded");
        }
        if ( $(".player_1_action").text() == "Raise" ) {
            $(".player_1").addClass("bold");
        }

        if ( $(".player_2_action").text() == "Fold" ) {
            $(".player_2").addClass("faded");
        }
        if ( $(".player_2_action").text() == "Raise" ) {
            $(".player_2").addClass("bold");
        }

        if ( $(".player_3_action").text() == "Fold" ) {
            $(".player_3").addClass("faded");
        }
        if ( $(".player_3_action").text() == "Raise" ) {
            $(".player_3").addClass("bold");
        }

        if ( $(".player_4_action").text() == "Fold" ) {
            $(".player_4").addClass("faded");
        }
        if ( $(".player_4_action").text() == "Raise" ) {
            $(".player_4").addClass("bold");
        }

        if ( $(".player_6_action").text() == "Fold" ) {
            $(".player_6").addClass("faded");
        }
        if ( $(".player_6_action").text() == "Raise" ) {
            $(".player_6").addClass("bold");
        }

    }

    $(".fold, .call, .raise").on("click", function(event) {
        event.preventDefault();
        nextPlayersPositions();
        nextRandomRaiser(randomInteger(1, 5), randomInteger(1, 4));
        nextPlayerActionVisuals();
        randomCardDealer(randomInteger(0, 12), randomInteger(0, 3), randomInteger(0, 12), randomInteger(0, 3));
        handsPlayedIncr();


    });

    $(".call").on("click", function(event) {
        event.preventDefault();
        nextPlayersPositions();
        nextRandomRaiser(randomInteger(1, 5), randomInteger(1, 4));
        nextPlayerActionVisuals();
        randomCardDealer(randomInteger(0, 12), randomInteger(0, 3), randomInteger(0, 12), randomInteger(0, 3));
        handsCalledIncr();


    });

    $(".raise").on("click", function(event) {
        event.preventDefault();
        nextPlayersPositions();
        nextRandomRaiser(randomInteger(1, 5), randomInteger(1, 4));
        nextPlayerActionVisuals();
        randomCardDealer(randomInteger(0, 12), randomInteger(0, 3), randomInteger(0, 12), randomInteger(0, 3));
        handsRaisedIncr();


    });






    
});
