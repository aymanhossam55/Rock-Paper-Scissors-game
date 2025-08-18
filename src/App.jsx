import './App.css'
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Header from './components/Header/Header.jsx'
import Game from './components/Game/Game.jsx'
import Rules from './components/Rules/Rules.jsx'

function App() {
  const [player1count, setPlayer1Count] = useState(0);
  const [player2count, setPlayer2Count] = useState(0);

  const updateScore = (result) => {
    if (result === 'Player 1 Wins') {
      setPlayer1Count(prevCount => prevCount + 1);
    } else if (result === 'Player 2 Wins') {
      setPlayer2Count(prevCount => prevCount + 1);
    }
    // Handle draw scenario if needed
  };

  return (
    <>
    <Container>
      <Header player1count={player1count} player2count={player2count}/>
      <Game updateScore={updateScore}/>
      <Rules />
    </Container>
    </>
  )
}

export default App
