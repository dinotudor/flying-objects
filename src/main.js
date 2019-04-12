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
      <button>START GAME</button>
    </sectin>
      `);
    

    


  }

  buildSplashScreen();

}

window.addEventListener('load', main);