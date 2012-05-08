var GoRobo = function(host) { 
    var moves = [];
    function getMoves() {
      $.getJSON(host + '/moves', function(json) { moves = json.moves } );
    }

    function printGame(roundNumber) {
      if (roundNumber == null) roundNumber = 0;
console.log("Round: " + roundNumber);
      setTimeout(function() {
        printRound(moves[roundNumber]);
        if (roundNumber < moves.length -1 ) printGame(roundNumber+1);
      }, 30);
    }

    function printRound(round) {
        context().beginPath();
        context().rect(0, 0, 600, 600);
        context().fillStyle = '#ffffff';
        context().fill();
        context().lineWidth = 1;
        context().strokeStyle = '#ffffff';
        context().stroke();
      $.each(round, function(index, robot) { printRobot(robot) });
    }

    function printRobot(robot) {
      var name = robot.name && robot.name.substr(0,1); 
      if (robot.robo_type == 'Rocket') name = '*';
      //console.log(name);
      context().strokeStyle = 'black';
      context().strokeText(name, robot.x*12, 20 + (robot.y*12));
    }

    function context() {
      return $("#canvas")[0].getContext('2d');
    }

    return {
      getMoves: getMoves,
      printRound: printRound,
      printRobot: printRobot,
      printGame: printGame
    };
}
