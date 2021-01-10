var circle1X = 0
var circle1Y = 0
var circle2X = 700
var circle2Y = 700

var AmountOfDoublesP1 = 3
var AmountOfDoublesP2 = 3

var P1JumpAmount = 100
var P2JumpAmount = 100
var a1 = 1
var a2 = 200
var Donebutton = 100
var DoneA = 0
var NMB = 1
var NMA = 1

var a = ''
var b = ''
var c = ''
var d = ''
var e = ''
var f = ''
var g = ''
var h = ''

var i = ''
var j = ''
var k = ''
var l = ''
var m = ''
var n = ''
var o = ''
var p = ''

var Mode;

var player1 = 0
var player2 = 0

function setup() {
  createCanvas(1500, 800);
  Mode = 5
  
}
//(450, 650, 300, 100)
    //text('Play', 525, 725)
function mousePressed() {
  if(mouseX > 900 && mouseY > 600 && mouseX < 1000 && mouseY < 700 && Mode == 1 && DoneA == 0 && NMB > 0) {
    P1JumpAmount = a2
    AmountOfDoublesP1 -= a1
    NMB = 0
  }
  if(mouseX > 1200 && mouseY > 400 && mouseX < 1300 && mouseY < 500 && Mode == 1 && DoneA == 0) {
    circle1Y -= P1JumpAmount
    DoneA = 1
    P2JumpAmount = 100
  }
  if(mouseX > 1300 && mouseY > 500 && mouseX < 1400 && mouseY < 600 && Mode == 1 && DoneA == 0) {
    circle1X += P1JumpAmount
    DoneA = 1
    P2JumpAmount = 100
  }
  if(mouseX > 1200 && mouseY > 600 && mouseX < 1300 && mouseY < 700 && Mode == 1 && DoneA == 0) {
    circle1Y += P1JumpAmount
    DoneA = 1
    P2JumpAmount = 100
  }
  if(mouseX > 1100 && mouseY > 500 && mouseX < 1200 && mouseY < 600 && Mode == 1 && DoneA == 0) {
    circle1X -= P1JumpAmount
    DoneA = 1
    P2JumpAmount = 100
  }
  if(mouseX > 1300 && mouseY > 700 && mouseX < 1500 && mouseY < 800 && Mode == 1 && DoneA == 1) {
    Mode = 2
    DoneA = 1
  }
  // rect(1300,700, 200, 100)
  if(mouseX > 900 && mouseY > 600 && mouseX < 1000 && mouseY < 700 && Mode == 2 && DoneA == 1 && NMA > 0)   {
    P2JumpAmount = 200
    AmountOfDoublesP2 -= 1
    NMA = 0
  }
  if(mouseX > 1200 && mouseY > 400 && mouseX < 1300 && mouseY < 500 && Mode == 2 && DoneA == 1) {
    circle2Y -= P2JumpAmount
    DoneA = 2
    P1JumpAmount = 100
  }
  if(mouseX > 1300 && mouseY > 500 && mouseX < 1400 && mouseY < 600 && Mode == 2 && DoneA == 1) {
    circle2X += P2JumpAmount
    DoneA = 2
    P1JumpAmount = 100
  }
  if(mouseX > 1200 && mouseY > 600 && mouseX < 1300 && mouseY < 700 && Mode == 2 && DoneA == 1) {
    circle2Y += P2JumpAmount
    DoneA = 2
    P1JumpAmount = 100
  }
  if(mouseX > 1100 && mouseY > 500 && mouseX < 1200 && mouseY < 600 && Mode == 2 && DoneA == 1) {
    circle2X -= P2JumpAmount
    DoneA = 2
    P1JumpAmount = 100
  }
  if(mouseX > 1000 && mouseY > 700 && mouseX < 1200 && mouseY < 800 && Mode == 2 && DoneA == 2) {
    Mode = 1
    DoneA = 0
  }
//   rect(1000, 700, 200, 100)
  if(mouseX > 450 && mouseY > 650 && mouseX < 750 && mouseY < 750 && Mode == 4) {
    Mode = 5
  }
  if(mouseX > 450 && mouseY > 650 && mouseX < 750 && mouseY < 750 && Mode == 3) {
    Mode = 5
  }
  if(mouseX > 50 && mouseY > 100 && mouseX < 300 && mouseY < 200 && Mode == 5) {
    Mode = 1
    a = 'B'
    b = 'e'
    c = 'n'
    d = ''
    e = ''
    f = ''
    g = ''
    h = ''
    
    i = 'C'
    j = 'h'
    k = 'r'
    l = 'i'
    m = 's'
    n = ''
    o = ''
    p = ''
  }
  if(mouseX > 500 && mouseY > 100 && mouseX < 750 && mouseY < 200 && Mode == 5) {
    Mode = 1
    a = 'B'
    b = 'e'
    c = 'n'
    d = ''
    e = ''
    f = ''
    g = ''
    h = ''
    
    i = 'J'
    j = 'a'
    k = 'm'
    l = 'e'
    m = 's'
    n = ''
    o = ''
    p = ''
  }
  if(mouseX > 50 && mouseY > 250 && mouseX < 300 && mouseY < 350 && Mode == 5) {
    Mode = 1
    a = 'C'
    b = 'h'
    c = 'r'
    d = 'i'
    e = 's'
    
    i = 'J'
    j = 'a'
    k = 'm'
    l = 'e'
    m = 's'
    n = ''
    o = ''
    p = ''
  }
  
}

function draw() {
  if(Mode == 1) {
  background(220);
  strokeWeight(10)
    textSize(100)
    text(DoneA, 1000, 300)
  
  //Horizontal lines 
  line(0, 0, 800, 0)
  line(0, 100, 800, 100)
  line(0, 200, 800, 200)
  line(0, 300, 800, 300)
  line(0, 400, 800, 400)
  line(0, 500, 800, 500)
  line(0, 600, 800, 600)
  line(0, 700, 800, 700)
  line(0, 800, 800, 800)
  
  //Vertical lines
  line(0, 0, 0, 800)
  line(100, 0, 100, 800)
  line(200, 0, 200, 800)
  line(300, 0, 300, 800)
  line(400, 0, 400, 800)
  line(500, 0, 500, 800)
  line(600, 0, 600, 800)
  line(700, 0, 700, 800)
  line(800, 0, 800, 800)
  
  fill(255);
  rect(1200, 400, 100)
  line(1250, 420, 1250, 480)
  
  fill(255);
  rect(1300, 500, 100)
  line(1320, 550, 1380, 550)
    
  fill(255);
  rect(1200, 600, 100)
  line(1250, 620, 1250, 680)
    
  fill(255);
  rect(1100, 500, 100)
  line(1120, 550, 1180, 550)
    
  fill(255);
  rect(900, 600, 100)
  fill(0)
  textSize(100)
  text('2', 923, 683)
  
  
  //Player1
  fill(0, 0, 255)
  circle(circle1X, circle1Y, 5)
  circle(50 + circle1X, 50 + circle1Y, 75, 75)
  fill(0)
  textSize(50)
  text('' + AmountOfDoublesP1, 35 + circle1X, 67 + circle1Y)
    
  //Player2
  fill(255, 0, 0)
  circle(50 + circle2X, 50 + circle2Y, 75, 75)
  fill(0)
  textSize(50)
  text('' + AmountOfDoublesP2, 35 + circle2X, 67 + circle2Y)
    
  textSize(75)
  text(a + b + c + d + e + f + g + h + 's Move', 900, 50)
    
  if(DoneA == 1) {
  fill(255)
  rect(1300,700, 200, 100)
  fill(0)
  textSize(80)
  text('Done', 1305, 780)
  }
  //Making Player 1 Stay On The Map
    if(circle1Y < 0) {
      Mode = 1
      circle1Y += P1JumpAmount
      DoneA = 0
    }
    if(circle1Y > 700) {
      Mode = 1
      circle1Y -= P1JumpAmount
      DoneA = 0
    }
    if(circle1X < 0) {
      Mode = 1
      circle1X += P1JumpAmount
      DoneA = 0
    }
    if(circle1X > 700) {
      Mode = 1
      circle1X -= P1JumpAmount
      DoneA = 0
    }
    
    //Making Player 2 Stay On The Map
    if(circle2Y < 0) {
      Mode = 2
      circle1Y += P2JumpAmount
      DoneA = 1
    }
    if(circle2Y > 700) {
      Mode = 2
      circle2Y -= P2JumpAmount
      DoneA = 1
    }
    if(circle2X < 0) {
      Mode = 2
      circle2X += P2JumpAmount
      DoneA = 1
    }
    if(circle2X > 700) {
      Mode = 2
      circle2X -= P2JumpAmount
      DoneA = 1
    }
    
    //Making The Mode Change When Player 1 Dies
    if(circle1X == circle2X && circle1Y == circle2Y && Mode == 1) {
      Mode = 4
    }
    
    //Making The Mode Change When Player 2 Dies
    if(circle1X == circle2X && circle1Y == circle2Y && Mode == 2) {
      Mode = 3
    }
    if(AmountOfDoublesP1 < 1) {
      a1 = 0
      a2 = 100
    }
  }
  
  if(Mode == 2) {
   background(220);
  strokeWeight(10)
    textSize(100)
    text(DoneA, 1000, 300)
  
  //Horizontal lines 
  line(0, 0, 800, 0)
  line(0, 100, 800, 100)
  line(0, 200, 800, 200)
  line(0, 300, 800, 300)
  line(0, 400, 800, 400)
  line(0, 500, 800, 500)
  line(0, 600, 800, 600)
  line(0, 700, 800, 700)
  line(0, 800, 800, 800)
  
  //Vertical lines
  line(0, 0, 0, 800)
  line(100, 0, 100, 800)
  line(200, 0, 200, 800)
  line(300, 0, 300, 800)
  line(400, 0, 400, 800)
  line(500, 0, 500, 800)
  line(600, 0, 600, 800)
  line(700, 0, 700, 800)
  line(800, 0, 800, 800)
  
  //Player1
  fill(0, 0, 255)
  circle(50 + circle1X, 50 + circle1Y, 75, 75)
  fill(0)
  textSize(50)
  text('' + AmountOfDoublesP1, 35 + circle1X, 67 + circle1Y)
    
  //Player2
  fill(255, 0, 0)
  circle(50 + circle2X, 50 + circle2Y, 75, 75)
  fill(0)
  textSize(50)
  text('' + AmountOfDoublesP2, 35 + circle2X, 67 + circle2Y)
    
  textSize(75)
  text(i + j + k + l + m + n + o + p + 's Move', 900, 50)
    
  fill(255);
  rect(1200, 400, 100)
  line(1250, 420, 1250, 480)
  
  fill(255);
  rect(1300, 500, 100)
  line(1320, 550, 1380, 550)
    
  fill(255);
  rect(1200, 600, 100)
  line(1250, 620, 1250, 680)
    
  fill(255);
  rect(1100, 500, 100)
  line(1120, 550, 1180, 550)
    
  fill(255);
  rect(900, 600, 100)
  fill(0)
  textSize(100)
  text('2', 923, 683)
    
  if(DoneA == 2) {
  fill(255)
  rect(1000, 700, 200, 100)
  fill(0)
  textSize(80)
  text('Done', 1005, 780)
  }
    
  //Making Player 1 Stay On The Map
    if(circle1Y < 0) {
      Mode = 1
      circle1Y += P1JumpAmount
      DoneA = 0
    }
    if(circle1Y > 700) {
      Mode = 1
      circle1Y -= P1JumpAmount
      DoneA = 0
    }
    if(circle1X < 0) {
      Mode = 1
      circle1X += P1JumpAmount
      DoneA = 0
    }
    if(circle1X > 700) {
      Mode = 1
      circle1X -= P1JumpAmount
      DoneA = 0
    }
    
    //Making Player 2 Stay On The Map
    if(circle2Y < 0) {
      Mode = 2
      circle1Y += P2JumpAmount
      DoneA = 1
    }
    if(circle2Y > 700) {
      Mode = 2
      circle2Y -= P2JumpAmount
      DoneA = 1
    }
    if(circle2X < 0) {
      Mode = 2
      circle2X += P2JumpAmount
      DoneA = 1
    }
    if(circle2X > 700) {
      Mode = 2
      circle2X -= P2JumpAmount
      DoneA = 1
    }
    
    //Making The Mode Change When Player 1 Dies
    if(circle1X == circle2X && circle1Y == circle2Y && Mode == 1) {
      Mode = 4
    }
    
    //Making The Mode Change When Player 2 Dies
    if(circle1X == circle2X && circle1Y == circle2Y && Mode == 2) {
      Mode = 3
    }
  }
  
  if(Mode == 3) {
  //End Screen For Player 1 Winning
  fill(0, 255, 0)
  background(255)
  textSize(100)
  text(a + b + c + d + e + f + g + h + ' Lost', 75, 100)
  fill(0)
  rect(450, 650, 300, 100)
  
  fill(255)  
  textSize(75)
  text('Play', 525, 725)
  }
  
  if(Mode == 4) {
  //End Screen For Player 2 Winning
  fill(0, 255, 0)
  background(255)
  textSize(100)
  text(i + j + k + l + m + n + o + p + ' Lost', 75, 100)
  fill(0)
  rect(450, 650, 300, 100)
  
  fill(255)  
  textSize(75)
  text('Play', 525, 725)
  }
  
  if(Mode == 5) {
    //Home Center
    background(255)
    fill(0)
    textSize(75)
    text('Choose Whos Playing', 35, 75)
    rect(50, 100, 250, 100)
    fill(255)
    textSize(35)
    text('  Ben vs Chris', 57, 160)
    
    fill(0)
    rect(500, 100, 250, 100)
    fill(255)
    textSize(35)
    text(' Ben vs James', 507, 160)
    
    fill(0)
    rect(50, 250, 250, 100)
    fill(255)
    textSize(32)
    text(' Chris vs James', 57, 310)
    
    circle1X = 0
    circle1Y = 0
    circle2X = 700
    circle2Y = 700
    AmountOfDoublesP1 = 3
    AmountOfDoublesP2 = 3
    P1JumpAmount = 100
    P2JumpAmount = 100
    DoneA = 0
    NMB = 1
    NMA = 1
  }
}