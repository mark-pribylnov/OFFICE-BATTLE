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
window.simulateClicks = simulateClicks;

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

// BUG WHEN YOU CLICK FAST -
// WRITE A FUNCTION TO RUN ONLINE IN THE BROWSER CONSOLE
// and SIMULATE CLICKS AS YOU DID BEFORE

// BUG REPORT
// The production version is on render.com When I click fast (~ every 200ms) the score sometimes jumps back one point.
// After clicking 20 times (a script is counting in the browser console) the total of both player scores increased by 14, but I clicked 20 times.
// The loss is 6 points. For clicking 50 times - we lost 12. for clicking 10 times - we lost 1.
// I connected to the same database from localhost and there's no such thing.
// The problem is not in the difference between a local MongoDB and Atlas.
// There's something wrong with render.com The instance on render doesn't sleep because I use uptimerobot.com.
// Only one client is writing at a time. I have const io = new Server(server, { cors: [process.env.CLIENT_URL], });
// I use free tier. I didn't change the number of instances manually, but I think that you can't scale for free.
// I recorder the screen and did 2 quick clicks.
// I found on screen recording (because it happens fast) that when I click 2 times fast and these 2 times only
// one players gets updated score (from 1268 to 1269 to 1270) the second update goes like this: 1269 -> 1270 -> jumps back to 1269 -> returns to 1270.
// Withing 2 clicks there's no loss. I opened two clients and recorded again.
// When I click two times fast and one player wins two times, here's what happens:
// client 1 - is where I'm clicking client 2 - opened to see update made with socket.io Initial score - 1309 click 1: client 1 score 1310
// click 2: client 1 score 1311 (client 2 still has 1309). It's ok, it needs time to update like at least 500ms i think is ok.
// Then look what happened. (I didn't click anymore) then client 1changes 1311 back to 1310 and at the same time client 2 changes 1309 to 1310.
// Then they both change 1310 to 1311.
