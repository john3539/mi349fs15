var GameScreenShot1 = ["url('images/Asundr1.png')" , "url('images/Fight.jpg')" , "url('images/Link.jpg')",  "url('images/flash.jpg')" ];
var GameScreenShot2 = ["url('images/SpaceCrusader1.jpg')" , "url('images/teamCreation.jpg')" , "url('images/tutorial.jpg')" , "url('images/zed.jpg')" ];
var GameIndex = 0;

function Decrease()
{
  if(GameIndex > 0)
  {
    GameIndex --;
  }
  else
  {
    GameIndex = 1;
  }
  UpdateGame();
}

function UpdateGameScreenShot(x)
{
  if(GameIndex == 0)
  {
      document.getElementById("games").style.backgroundImage = GameScreenShot1[x] ;
  }
  else
  {
      document.getElementById("games").style.backgroundImage = GameScreenShot2[x] ;
  }

}

function Increase()
{
  if(GameIndex < 1)
  {
    GameIndex ++;
  }
  else if (GameIndex >= 1)
  {
    GameIndex = 0;
  }
  UpdateGame();
}

function TurnOnGameName()
{
  document.getElementById("GameNameBlock").style.backgroundColor = "rgba(255, 255, 255, 0.65)";
}
function TurnOffGameName()
{
  document.getElementById("GameNameBlock").style.backgroundColor = "rgba(255, 255, 255, 0.1)";
}

function UpdateGame()
{
  switch (GameIndex) {
    case 0:
      document.getElementById("games").style.backgroundImage = GameScreenShot1[0] ;
      document.getElementById("GameTitle").innerHTML =  "ASUNDR";
      break;
    case 1:
      document.getElementById("games").style.backgroundImage =  GameScreenShot2[0];
      document.getElementById("GameTitle").innerHTML =  "SPACE CRUSADER";
      break;
  }
}

function ScreenshotUp(x)
{
  if(GameIndex < 3)
  {
    GameIndex ++;
  }
  else if (GameIndex >= 1)
  {
    GameIndex = 0;
  }
  if(x == 1)
  {
    document.getElementById("ScreenShots").style.backgroundImage = GameScreenShot1[GameIndex] ;
  }
  else
  {
    document.getElementById("ScreenShots3").style.backgroundImage = GameScreenShot2[GameIndex] ;
  }
}

function ScreenshotDown(x)
{
  if(GameIndex > 0)
  {
    GameIndex --;
  }
  else
  {
    GameIndex = 3;
  }
  if(x == 1)
  {
    document.getElementById("ScreenShots").style.backgroundImage = GameScreenShot1[GameIndex] ;
  }
  else
  {
    document.getElementById("ScreenShots2").style.backgroundImage = GameScreenShot2[GameIndex] ;
  }
}
