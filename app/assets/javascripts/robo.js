var GoRobo = function(json) { 
    var moves = json.moves;
    var roundNumber = 0;
    var robot1 = moves[0][0].id;
    var robot2 = moves[0][1].id;
    var colorRobot1 = "blue";
    var colorRobot2 = "green";
    var colorRocket = "red";

    function printGame(roundNumber) {
      if (roundNumber == null) roundNumber = 0;
console.log("Round: " + roundNumber);
      setTimeout(function() {
        printRound(moves[roundNumber]);
        if (roundNumber < moves.length -1 ) printGame(roundNumber+1);
      }, 200);
    }

    function printRound(round) {
        context().beginPath();
        context().rect(0, 0, 600, 600);
        context().fillStyle = '#cccccc';
        context().fill();
        context().lineWidth = 1;
        context().strokeStyle = '#ffffff';
        context().stroke();

      $.each(round, function(index, robot) { printRobot(robot) });
    }

    function printRobot(robot) {
      var name = robot.name && robot.name.substr(0,1); 

      if (robot.robo_type == 'GoRobo::Rocket') {
        name = 'O';
        translateRobot(robot);
        context().strokeStyle = colorRocket;
      }
      if (robot.id == robot1){
        context().strokeStyle = colorRobot1;
      } else if (robot.id == robot2){
        context().strokeStyle = colorRobot2;
      }
      context().strokeText(name, robot.x*12, 20 + (robot.y*12));
    }

    function context() {
      return $("#canvas")[0].getContext('2d');
    }

    return {
      //getMoves: getMoves,
      printRound: printRound,
      printRobot: printRobot,
      printGame: printGame
    };

    function translateRobot(robot) {
      var date = new Date();
      var time = date.getTime();
      animate(time, robot);
    }

}

window.requestAnimFrame = (function(callback){
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback){
        window.setTimeout(callback, 1000 / 60);
    };
})();
 
function animate(lastTime, myRectangle){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
 
    // update
    var date = new Date();
    var time = date.getTime();
    var timeDiff = time - lastTime;
    var linearSpeed = 10; // pixels / second
    var currentX = myRectangle.x;
 
    if (currentX < canvas.width - myRectangle.width - myRectangle.borderWidth / 2) {
        d = moveStep(myRectangle.x, myRectangle.y, myRectangle.direction);
        myRectangle.x = d.x;
        myRectangle.y = d.y;
    }
    lastTime = time;
 
    // clear
 
    // draw
    context.beginPath();
    context.rect(myRectangle.x*12, 20+myRectangle.y*12, 2, 2);
    context.lineWidth = 0;
    context.fillStyle = "white";
    context.stroke();
 
    // request new frame
    requestAnimFrame(function(){
        animate(lastTime, myRectangle);
    });
}

function moveStep(x,y,direction)
{
  delta = 1;
  switch(direction)
  {
    case 0:
      return {x: x, y: y-delta};
    case 90:
      return {x: x+delta, y: y};
    case 180:
      return {x: x, y: y+delta};
    case 270:
      return {x: x-delta, y: y};
  }
}

// window.onload = function(){
//     var myRectangle = {
//         x: 0,
//         y: 50,
//         width: 100,
//         height: 50,
//         borderWidth: 5
//     };
 
//     var date = new Date();
//     var time = date.getTime();
//     animate(time, myRectangle);
// };