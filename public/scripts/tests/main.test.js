async function simulateClicks(element, delay, numberOfClicks) {
  let clickCounter = numberOfClicks;

  const SCORES = Array.from(document.querySelectorAll(".js-player-score"));
  const score1BeforeTest = SCORES[0].textContent;
  const score2BeforeTest = SCORES[1].textContent;

  console.log(`
    Vlad before: ${score1BeforeTest}
    Mark before: ${score2BeforeTest}
    `);

  function clickManyTimes() {
    return new Promise(resolve => {
      const timer = setInterval(() => {
        if (clickCounter >= 1) {
          element.click();
          clickCounter -= 1;
        }

        if (clickCounter === 0) {
          clearInterval(timer);
          resolve(); // resolves when all clicks are done
        }
      }, delay);
    });
  }

  // await clickManyTimes();

  const score1AfterTest = SCORES[0].textContent;
  const score2AfterTest = SCORES[1].textContent;

  console.log(`
    Vlad after: ${score1AfterTest}
    Vlad gained: ${score1AfterTest - score1BeforeTest}

    Mark after: ${score2AfterTest}
    Mark gained: ${score2AfterTest - score2BeforeTest}

    Total gained: ${score1AfterTest - score1BeforeTest + (score2AfterTest - score2BeforeTest)}
    `);
}
// window.simulateClicks = simulateClicks;

function calcAverageClickDelay(element) {
  // my average clicking speed is 110 ms
  let lastClickTime = null;
  const clickDelays = [];

  element.addEventListener("click", () => {
    if (lastClickTime) {
      const delay = Date.now() - lastClickTime;

      // If no clicks are made within 1 second, the next click returns the average delay.
      // To start again, refresh the page.
      if (delay > 1000) {
        const sum = clickDelays.reduce((acc, el) => {
          return acc + el;
        }, 0);

        const averageDelay = sum / clickDelays.length;
        console.log(averageDelay);
        return averageDelay;
      }

      clickDelays.push(delay);

      console.log(delay);
    }
    lastClickTime = Date.now();
  });
}
// simulateClicks(document.querySelector("button[type='submit']"), 1000, 3);

function countClicks(element) {
  let counter = 0;

  element.addEventListener("click", () => {
    console.log((counter += 1));
  });
}
// countClicks(document.querySelector("button[type='submit']"));
