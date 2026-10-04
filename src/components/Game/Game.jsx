import { useRef, useState } from "react";

import paper from "../../assets/icon-paper.svg";
import scissors from "../../assets/icon-scissors.svg";
import rock from "../../assets/icon-rock.svg";
import triangle from "../../assets/bg-triangle.svg";
import soundfile from "../../assets/click.wav";

import "./game.css";

const choices = [
    {
        name: "paper",
        image: paper,
        className: "choice-paper",
        label: "Paper",
    },
    {
        name: "scissors",
        image: scissors,
        className: "choice-scissors",
        label: "Scissors",
    },
    {
        name: "rock",
        image: rock,
        className: "choice-rock",
        label: "Rock",
    },
];

const winningChoices = {
    paper: "rock",
    scissors: "paper",
    rock: "scissors",
};

const Game = ({ updateScore }) => {
    const [player1Choice, setPlayer1Choice] = useState("");
    const [player2Choice, setPlayer2Choice] = useState("");
    const [gameResult, setGameResult] = useState("");

    const soundRef = useRef(null);

    const playSound = () => {
        if (!soundRef.current) {
            soundRef.current = new Audio(soundfile);
        }

        soundRef.current.currentTime = 0;
        soundRef.current.play().catch(() => {});
    };

    const getResult = (player1, player2) => {
        if (player1 === player2) {
            return "It's a Draw";
        }

        if (winningChoices[player1] === player2) {
            return "Player 1 Wins";
        }

        return "Player 2 Wins";
    };

    const handlePlayer1Choice = (choice) => {
        playSound();
        setPlayer1Choice(choice);
    };

    const handlePlayer2Choice = (choice) => {
        playSound();

        setPlayer2Choice(choice);

        const result = getResult(player1Choice, choice);

        setGameResult(result);

        if (result !== "It's a Draw") {
            updateScore(result);
        }
    };

    const handlePlayAgain = () => {
        setPlayer1Choice("");
        setPlayer2Choice("");
        setGameResult("");
    };

    const currentPlayer = player1Choice
        ? "Player 2"
        : "Player 1";

    const selectedPlayer1 = choices.find(
        (choice) => choice.name === player1Choice
    );

    const selectedPlayer2 = choices.find(
        (choice) => choice.name === player2Choice
    );

    return (
        <main className="game-wrapper">
            {!gameResult ? (
                <section className="game-panel">
                    <div className="game-title">
                        <span>{currentPlayer}</span>
                        <small>Choose your weapon</small>
                    </div>

                    {!player1Choice ? (
                        <div className="choice-board">
                            <img
                                src={triangle}
                                alt=""
                                className="triangle"
                            />

                            <div className="choice-buttons">
                                {choices.map((choice) => (
                                    <button
                                        key={choice.name}
                                        type="button"
                                        className={`choice ${choice.className}`}
                                        onClick={() =>
                                            handlePlayer1Choice(
                                                choice.name
                                            )
                                        }
                                        aria-label={`Player 1 choose ${choice.label}`}
                                    >
                                        <img
                                            src={choice.image}
                                            alt={choice.label}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="choice-board player-two-board">
                            <img
                                src={triangle}
                                alt=""
                                className="triangle"
                            />

                            <div className="choice-buttons">
                                {choices.map((choice) => (
                                    <button
                                        key={choice.name}
                                        type="button"
                                        className={`choice ${choice.className}`}
                                        onClick={() =>
                                            handlePlayer2Choice(
                                                choice.name
                                            )
                                        }
                                        aria-label={`Player 2 choose ${choice.label}`}
                                    >
                                        <img
                                            src={choice.image}
                                            alt={choice.label}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </section>
            ) : (
                <section className="result-panel">
                    <div className="players-result">
                        <div className="player-result">
                            <h3>Player 1</h3>

                            <div
                                className={`result-choice ${
                                    selectedPlayer1?.className || ""
                                }`}
                            >
                                <img
                                    src={selectedPlayer1?.image}
                                    alt={selectedPlayer1?.label}
                                />
                            </div>
                        </div>

                        <div className="result-message">
                            <h2>{gameResult}</h2>

                            <button
                                type="button"
                                className="play-again-btn"
                                onClick={handlePlayAgain}
                            >
                                Play Again
                            </button>
                        </div>

                        <div className="player-result">
                            <h3>Player 2</h3>

                            <div
                                className={`result-choice ${
                                    selectedPlayer2?.className || ""
                                }`}
                            >
                                <img
                                    src={selectedPlayer2?.image}
                                    alt={selectedPlayer2?.label}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
};

export default Game;