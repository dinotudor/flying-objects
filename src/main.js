'use strict';

function main () {

  const mainSection = document.querySelector('main');

  function buildDom (html) {
    mainSection.innerHTML = html;
    return mainSection
  }

  function buildSplashScreen () {
    const splashScreen = buildDom(`
    <section>
      <h1>Flying Objects</h1>
      <button class="start-button">START GAME</button>
    </sectin>
      `);
    
    const startButton = document.querySelector('.start-button');

    startButton.addEventListener( 'click', buildGameScreen);
    

  }

  function buildGameScreen (){
    
    const gameScreen = buildDom(`
    <section class="game-container">
      <h1>GAME</h1>
      <button id="game-over-test">GAME OVER : ( </button>
    </section>  
    `);

    const gameOverTest = document.querySelector('#game-over-test');
    gameOverTest.addEventListener('click', buildGameOverScreen);
  }

  


  buildSplashScreen();

}

window.addEventListener('load', main);