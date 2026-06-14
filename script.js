const app = document.getElementById("app");
const music =
document.getElementById("bgMusic");

let noAttempts = 0;
let currentMemory = 0;

const memories = [
  "assets/memories1.jpg",
  "assets/memories2.jpg",
  "assets/memories3.jpg"
];

const finalMessage = `
Swapnali,

There are so many things I want to say, but if I had to put it simply, I just love spending time with you.

Whether it's our long conversations, random talks, or those moments where I act completely childish around you, they are honestly some of the best parts of my day.

No matter how much time we spend together, I always feel like I need a little more. Somehow, it never feels enough.

You have been my biggest supporter. Whenever I'm confused, lost, or overthinking things, you always guide me towards the right path.

Your presence in my life makes everything easier to handle.

One thing I admire the most about you is how you can be so childish and cute in one moment and then so mature and strong in the next.

You're someone who works the whole day, comes home tired, and still studies to achieve your goals and build a better future.

That dedication is something I truly admire.

Honestly, you're amazing.

People celebrate birthdays because it's a special day for the person born on that date.

But for me, your birthday is special because it's the day someone so important came into this world and eventually became such an important part of my life.

I don't really ask for much.

I just want you to stay with me, keep smiling, keep chasing your dreams, and keep being the wonderful person you are.

Thank you for being you.

And thank you for being a part of my life.

Happy Birthday, Swapnali ❤️

— Aadi
`;

function playMusic() {
  music.play().catch(() => {});
}

function sparkle(x, y) {
  const s =
  document.createElement("div");

  s.className = "sparkle";
  s.innerHTML = "✨";
  s.style.left = x + "px";
  s.style.top = y + "px";

  document.body.appendChild(s);

  setTimeout(() => {
    s.remove();
  }, 800);
}

// Sparkle click
document.addEventListener(
"click",
(e) => {

  sparkle(
    e.clientX,
    e.clientY
  );

  const paw =
  document.createElement("div");

  paw.className = "paw";
  paw.innerHTML = "🐾";

  paw.style.left =
  e.clientX + "px";

  paw.style.top =
  e.clientY + "px";

  document.body.appendChild(
  paw
  );

  setTimeout(() => {
    paw.remove();
  }, 700);

});

// Falling petals
setInterval(() => {

  const petal =
  document.createElement(
  "div"
  );

  petal.className =
  "petal";

  petal.innerHTML = "🌸";

  petal.style.left =
  Math.random() *
  window.innerWidth +
  "px";

  document.body.appendChild(
  petal
  );

  let pos = -20;

  const fall =
  setInterval(() => {

    pos += 3;

    petal.style.top =
    pos + "px";

    if (
      pos >
      window.innerHeight
    ) {
      clearInterval(fall);
      petal.remove();
    }

  }, 30);

}, 700);

// Screen 1
function showDateScreen() {

  app.innerHTML = `
  <div class="slide">

    <h1>
    🎂 Birthday Verification
    </h1>

    <p>
    What is today's date?
    </p>

    <img
    src="assets/surprise.gif"
    class="main-img">

    <input
    id="dateInput"
    placeholder="DD/MM/YYYY">

    <button
    onclick="checkDate()">
    Continue ❤️
    </button>

  </div>
  `;
}

function checkDate() {

  const date =
  document
  .getElementById(
  "dateInput"
  )
  .value
  .trim()
  .toLowerCase();

  const validDates = [
    "13-07-2026",
    "13/07/2026",
    "13 july 2026"
  ];

  if (
    validDates.includes(
    date
    )
  ) {

    sparkle(
      window.innerWidth/2,
      window.innerHeight/2
    );

    playMusic();

    app.innerHTML = `
    <div class="slide">

      <h1 class="success">
      ✅ Smart girl!
      Let's continue...
      </h1>

      <img
      src="assets/cute.jpg"
      class="main-img">

      <button
      onclick="showQuestion1()">
      Continue ❤️
      </button>

    </div>
    `;

  } else {

    app.innerHTML = `
    <div class="slide">

      <h1 class="error">
      ❌ Hmm...
      that's not right.
      </h1>

      <p>
      Think carefully 😏
      </p>

      <img
      src="assets/staring.gif"
      class="main-img">

      <button
      onclick="showDateScreen()">
      Try Again
      </button>

    </div>
    `;
  }
    }
// Screen 2
function showQuestion1() {

  app.innerHTML = `
  <div class="slide">

    <h1>
    🤔 Is there something
    special today?
    </h1>

    <img
    src="assets/Reaction.gif"
    class="main-img">

    <button
    onclick="showExcited()">
    Yes ❤️
    </button>

    <button
    onclick="showNoAnswer()">
    No 🙄
    </button>

  </div>
  `;
}

function showNoAnswer() {

  app.innerHTML = `
  <div class="slide">

    <h1>
    🚨 There is definitely
    something special today!
    </h1>

    <p>
    Go back and click
    YES 😤
    </p>

    <img
    src="assets/cat-gun.gif"
    class="main-img">

    <button
    onclick="showQuestion1()">
    Okay Okay 😅
    </button>

  </div>
  `;
}

// Screen 3
function showExcited() {

  noAttempts = 0;

  app.innerHTML = `
  <div class="slide">

    <h1>
    😈 Are you excited
    to see what's
    waiting for you?
    </h1>

    <img
    src="assets/excited.gif"
    class="main-img">

    <button
    onclick="showQuiz()">
    YES 😍
    </button>

    <button
    id="noBtn">
    NO 🙄
    </button>

    <p id="attemptText">
    </p>

  </div>
  `;

  const noBtn =
  document.getElementById(
  "noBtn"
  );

  noBtn.addEventListener(
  "mouseover",
  () => {

    noAttempts++;

    noBtn.style.position =
    "absolute";

    noBtn.style.left =
    Math.random() * 70
    + "%";

    noBtn.style.top =
    Math.random() * 70
    + "%";

    if (
      noAttempts >= 5
    ) {

      document
      .getElementById(
      "attemptText"
      )
      .innerHTML =
      "😂 Stop trying to click NO!";

    }

  });
}

// Screen 4
function showQuiz() {

  app.innerHTML = `
  <div class="slide">

    <h1>
    🕵️ Guess Who
    Planned This?
    </h1>

    <p>
    Who made this
    surprise for you?
    </p>

    <img
    src="assets/blushing.gif"
    class="main-img">

    <button
    class="option-btn"
    onclick="wrongAnswer()">
    Ranbir Kapoor
    </button>

    <button
    class="option-btn"
    onclick="wrongAnswer()">
    Doremon
    </button>

    <button
    class="option-btn"
    onclick="correctAnswer()">
    Adi
    </button>

    <button
    class="option-btn"
    onclick="wrongAnswer()">
    Tom Holland
    </button>

  </div>
  `;
}

function wrongAnswer() {

  app.innerHTML = `
  <div class="slide">

    <h1>
    😂 Nice Try
    </h1>

    <img
    src="assets/beatboxing-cat-cat.gif"
    class="main-img">

    <button
    onclick="showQuiz()">
    Try Again ❤️
    </button>

  </div>
  `;
}

function correctAnswer() {

  sparkle(
    window.innerWidth/2,
    window.innerHeight/2
  );

  app.innerHTML = `
  <div class="slide">

    <h1>
    💖 Exactly!
    </h1>

    <img
    src="assets/cute.jpg"
    class="main-img">

    <button
    onclick="memoryAsk()">
    Continue ❤️
    </button>

  </div>
  `;
    }
// Screen 5
function memoryAsk() {

  app.innerHTML = `
  <div class="slide">

    <h1>
    📸 Memory Check
    </h1>

    <p>
    Do you want to see
    some special memories?
    </p>

    <button
    onclick="showMemory()">
    YES ❤️
    </button>

    <button
    onclick="showMemory()">
    ABSOLUTELY YES ❤️
    </button>

  </div>
  `;
}

function showMemory() {

  currentMemory = 0;

  app.innerHTML = `
  <div class="slide">

    <h1>
    📸 Memory Lane 💕
    </h1>

    <img
    id="memoryImg"
    src="${memories[0]}"
    class="memory-img fade">

    <button
    onclick="nextMemory()">
    Next 💖
    </button>

  </div>
  `;
}

function nextMemory() {

  currentMemory++;

  if (
    currentMemory <
    memories.length
  ) {

    const img =
    document.getElementById(
    "memoryImg"
    );

    img.src =
    memories[currentMemory];

    img.classList.remove(
    "fade"
    );

    void img.offsetWidth;

    img.classList.add(
    "fade"
    );

    sparkle(
      window.innerWidth/2,
      window.innerHeight/2
    );

  } else {

    showFinal();

  }
}

// Typewriter effect
function typeWriter(
text,
elementId,
speed = 25
){

  let i = 0;

  const target =
  document.getElementById(
  elementId
  );

  const timer =
  setInterval(() => {

    if (
      i < text.length
    ) {

      target.innerHTML +=
      text.charAt(i)
      === "\n"
      ? "<br>"
      : text.charAt(i);

      i++;

    } else {

      clearInterval(timer);

    }

  }, speed);

}

// Confetti
function launchConfetti(){

  const duration =
  6000;

  const end =
  Date.now() +
  duration;

  const frame = () => {

    confetti({
      particleCount: 4,
      angle: 60,
      spread: 60,
      origin: {x:0}
    });

    confetti({
      particleCount: 4,
      angle:120,
      spread:60,
      origin:{x:1}
    });

    if(
      Date.now() < end
    ){
      requestAnimationFrame(
      frame
      );
    }

  };

  frame();
}

// Screen 6
function showFinal() {

  launchConfetti();

  app.innerHTML = `
  <div class="slide final-slide">

    <h1>
    🎉 Happy Birthday
    Swapnali ❤️
    </h1>

    <img
    src="assets/memories1.jpg"
    class="memory-img">

    <div
    id="message"
    class="message">
    </div>

  </div>
  `;

  typeWriter(
    finalMessage,
    "message",
    22
  );
}

// Start website
showDateScreen();
