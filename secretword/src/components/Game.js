import React, { useState, useRef } from "react";
import styles from "./Game.module.css";
const Game = ({
  verifyLetter,
  pickedCategory,
  pickedWord,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {

  const [letter, setLetter] = useState("")
  const letInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    verifyLetter(letter)
    setLetter("")
    letInputRef.current.focus()
  }
  return (
    <div className="game">
      <p className={styles.points}>
        <span>Pontuação: {score}</span>
      </p>
      <h1 className={styles.title}>Adivinhe a palavra:</h1>
      <h3 className={styles.tip}>
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>você ainda tem {guesses} tentativas</p>
      <div className={styles.wordContainer}>
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span className={styles.letter} key={i}>
              {letter}
            </span>
          ) : (
            <span className={styles.blankSquare} key={i}></span>
          )
        )}
      </div>
      <div className={styles.letterContainer}>
        <p>Tente advinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="letter" maxLength="1" required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letInputRef}/>
          <button>Jogar</button>
        </form>
      </div>
      <div>
        <p>Letras ja utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span> 
        ))} 
      </div>

      <button onClick={verifyLetter}> Finalizar Jogo</button>
    </div>
  );
};

export default Game;
