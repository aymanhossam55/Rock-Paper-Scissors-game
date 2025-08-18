import React, { useEffect } from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import triangle from '../../assets/bg-triangle.svg'
import paper from '../../assets/icon-paper.svg'
import scissors from '../../assets/icon-scissors.svg'
import rock from '../../assets/icon-rock.svg'
import soundfile from '../../assets/click.wav'
import './game.css'

const Game = ({ updateScore }) => {
  const [gameResult,SetgameResult] = useState(""); //  p1Win, p2Win, draw
  const [player1Choice,setplayer1Choice] = useState(""); //  rock , paper , scissors
  const [player2Choice,setplayer2Choice] = useState(""); //  rock , paper , scissors
  const [gameState,setgameState] = useState("player 1"); 
  const [gamestart,SetIsGamestart] = useState(false);
  
      let sound = new Audio(soundfile);

      const handlePlayerChoice = (player,choice) => {
        if(player == "player1"){
          setplayer1Choice(choice);
          soundPlay();
        }else{
          setplayer2Choice(choice);
          soundPlay();
        }
      }

      const soundPlay = () => {
        sound.play();
      }

    const handlegameState = () => {
      setgameState("player 2")
    }


    const handlegamestart = () => {
      SetIsGamestart(!gamestart);
      document.querySelector('.game').style = "display : none";
      document.querySelector('.players').style = "display : flex";
      document.querySelector('.game-start').style = "display : flex";
      document.querySelector('.Result').style = "display : flex";
      document.querySelector('.playAgain').style = "display: flex";
    }

    useEffect(() => {
      handleResult();
    },[player2Choice])


    const handleResult = () => {
      console.log(`player 1 ${player1Choice}`)
      console.log(`player 2 ${player2Choice}`)
        if (
          (player1Choice == "paper" && player2Choice == "rock") ||
          (player1Choice == "rock" && player2Choice == "scissors") ||
          (player1Choice == "scissors" && player2Choice == "paper")
        ) {
          SetgameResult("Player 1 Wins");
          updateScore("Player 1 Wins");
        } else if(
          (player2Choice == "paper" && player1Choice == "rock") ||
          (player2Choice == "rock" && player1Choice == "scissors") ||
          (player2Choice == "scissors" && player1Choice == "paper")
        ) {
          SetgameResult("Player 2 Wins");
          updateScore("Player 2 Wins");
        } else {
          SetgameResult("It's a Draw");
        }
    };

    const handleplayAgain = () => {
      SetgameResult("");
      setplayer1Choice("");
      setplayer2Choice("");
      setgameState("player 1");
      SetIsGamestart(false);
      document.querySelector('.game').style = "display : flex, justify-content:center";
      document.querySelector('.players').style = "display : none";
      document.querySelector('.game-start').style = "display : none";
      document.querySelector('.Result').style = "display : none";
      document.querySelector('.playAgain').style = "display: none";
    }

  return (
    <>
      <div className='game'>
        {gameState == "player 1" ? 
        <>
          <h2 style={{display:"flex",justifyContent:"center",color:"rgba(255, 255, 255, 0.87)"}}>player 1</h2>
          <Container className='body-game'>
            <div className='triangle-game'>
              <img src={triangle} alt="triangle" />
            </div>
            <div className='game-content'>
          <Row>
                <Col className='paper' onClick={() => {
                  handlePlayerChoice("player1","paper");
                  handlegameState()
                }}>
                  <img src={paper} className='paper-img' alt="paper" style={{width:"4rem",height:"4rem"}}/>
                </Col>
                <Col className='scissors' onClick={() => {
                  handlePlayerChoice("player1","scissors");
                  handlegameState()
                  }}>
                  <img src={scissors} className='scissors-img' alt="scissors" style={{width:"4rem",height:"4rem",marginTop:"1.5rem",marginLeft:"1.2rem"}}/>
                </Col> 
          </Row>
          <Row>
            <Col></Col>
            <Col className='rock' onClick={() => {
                  handlePlayerChoice("player1","rock");
                  handlegameState()
                  }}>
              <img src={rock} alt="rock" className='rock-img' style={{width:"4rem",height:"4rem",marginTop:"2rem",marginLeft:"1rem",marginRight:"3rem"}}/>
            </Col>
            <Col></Col>
          </Row>
          </div>
        </Container>
        </>
        :     
        <>
        <h2 style={{display:"flex",justifyContent:"center",color:"rgba(255, 255, 255, 0.87)"}}>player 2</h2>
        <Container className='body-game'>
            <div className='triangle-game'>
              <img className='triangle' src={triangle} alt="triangle" />
            </div>
            <div className='game-content'>
          <Row>
                <Col className='paper2' onClick={() => {
                  handlePlayerChoice("player2","paper");
                  handlegamestart()
                }}>
                  <img src={paper} className='paper2-img' alt="paper" style={{width:"4rem",height:"4rem"}}/>
                </Col>
                <Col className='scissors2' onClick={() => {
                  handlePlayerChoice("player2","scissors");
                  handlegamestart()
                }}>
                  <img src={scissors} className='scissors2-img' alt="scissors" style={{width:"4rem",height:"4rem",marginTop:"1.5rem",marginLeft:"1.2rem"}}/>
                </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col className='rock2' onClick={() => {
                  handlePlayerChoice("player2","rock");
                  handlegamestart()
                }}>
              <img src={rock} alt="rock" className='rock2-img' style={{width:"4rem",height:"4rem",marginTop:"2rem",marginLeft:"1rem",marginRight:"3rem"}}/>
            </Col>
            <Col></Col>
          </Row>
          </div>
        </Container>
        </>
        }

      </div>

      <div className='Result'>
          <h2>{gameResult}</h2>
      </div>
      <div className='players'>
        <h2>player 1</h2>
        <h2>player 2</h2>
      </div>
      <div className='game-start'>
      {gamestart && 
      <>
        <div className='player1-gamestart'>
          {player1Choice == "paper" && 
            <img src={paper} alt="paper-games" className='paper-img-gamestart' style={{width:"4rem",height:"4rem",marginTop:"2.5rem",marginLeft:"2.5rem"}}/>
          }
          {player1Choice == "scissors" && 
            <img src={scissors} alt="scissors" className='scissors-img-gamestart' style={{width:"4rem",height:"4rem",marginTop:"2.5rem",marginLeft:"2.5rem"}}/>
          }
          {player1Choice == "rock" && 
            <img src={rock} alt="rock" className='rock-img-gamestart' style={{width:"4rem",height:"4rem",marginTop:"2.5rem",marginLeft:"2.5rem",marginRight:"3rem"}}/>
          }
        </div>
        <div className='player2-gamestart'>
          {player2Choice == "paper" && 
            <img src={paper} alt="paper" className='paper2-img-gamestart' style={{width:"4rem",height:"4rem",marginTop:"2.5rem",marginLeft:"2.5rem"}}/>
          }
          {player2Choice == "scissors" && 
            <img src={scissors} alt="scissors" className='scissors2-img-gamestart' style={{width:"4rem",height:"4rem",marginTop:"2.5rem",marginLeft:"2.5rem"}}/>
          }
          {player2Choice == "rock" && 
            <img src={rock} alt="rock" className='rock2-img-gamestart' style={{width:"4rem",height:"4rem",marginTop:"2.5rem",marginLeft:"2.5rem",marginRight:"3rem"}}/>
          }
        </div>
        </>
      }
      </div> 
      <div className='playAgain' onClick={handleplayAgain}>
      <button className='playAgain-btn'>Play Again</button>
      </div>
    </>
  )
}

export default Game;


