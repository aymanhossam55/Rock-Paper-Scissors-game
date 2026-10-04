import { useState } from "react";
import Container from "react-bootstrap/Container";

import Header from "./components/Header/Header";
import Game from "./components/Game/Game";
import Rules from "./components/Rules/Rules";

import "./App.css";

function App() {
    const [player1count, setPlayer1Count] = useState(0);
    const [player2count, setPlayer2Count] = useState(0);

    const updateScore = (result) => {
        if (result === "Player 1 Wins") {
            setPlayer1Count((previous) => previous + 1);
        }

        if (result === "Player 2 Wins") {
            setPlayer2Count((previous) => previous + 1);
        }
    };

    return (
        <div className="app">
            <Container fluid>
                <Header
                    player1count={player1count}
                    player2count={player2count}
                />

                <Game updateScore={updateScore} />

                <Rules />
            </Container>
        </div>
    );
}

export default App;