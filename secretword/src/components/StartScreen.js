import React from 'react'
import styles from './StartScreen.module.css'

const StartScreen = ({startGame}) => {
  return (
    <div>
      <h1 className={styles.h1}>Secret Word</h1>
      <p className={styles.p}>Clique no botão para começar o jogo</p>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen
