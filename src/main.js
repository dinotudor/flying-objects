'use strict';

function main () {

  const mainSection = document.querySelector('main');

  function buildDom (html) {
    mainSection.innerHTML = html;
    return mainSection
  }

  function buildSplashScreen () {
    const splashScreen = buildDom(`
    <section class="game-container">
      <h1>Flying Objects - Splash Screen</h1>
      <button class="start-button">START GAME</button>
    </sectin>
      `);
    
    const startButton = document.querySelector('.start-button');

    startButton.addEventListener( 'click', buildGameScreen);
    

  }

  function buildGameScreen (){
    
    const gameScreen = buildDom(`
    <section class="game-container">
      <canvas><h1>GAME</h1></canvas>
    </section>  
    `);

    const gameContainerElement = document.querySelector('.game-container');
    const width = gameContainerElement.offsetWidth;
    const height = gameContainerElement.offsetHeight;

    const canvasElement = document.querySelector('canvas');
    canvasElement.setAttribute('width', width);
    canvasElement.setAttribute('height', height);

    const game = new Game(canvasElement);
    game.startLoop();




/*     const gameOverTest = document.querySelector('#game-over-test');
    gameOverTest.addEventListener('click', buildGameOverScreen); */
  }

  function buildGameOverScreen () {
    const gameOverScreen = buildDom(`
    <section class="game-container">
      <h1>Game Over</h1>
      <button class="restart-button">Play Again</button>
      <button class="splash-screen">Initial Screen</button>
    </section>
    `);

    const restartButton = document.querySelector('.restart-button');
    const initialScreen = document.querySelector('.splash-screen');
    restartButton.addEventListener('click', buildGameScreen);
    initialScreen.addEventListener('click', buildSplashScreen);

  }


  buildSplashScreen();

}

window.addEventListener('load', main);