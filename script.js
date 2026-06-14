const app =
document.getElementById("app");

const music =
document.getElementById(
"bgMusic"
);

let noAttempts = 0;
let currentMemory = 0;

// Memories
const memories = [
"assets/memories1.jpg",
"assets/memories2.jpg",
"assets/memories3.jpg"
];

const captions = [
"Still one of my favourite moments 🥹❤️",
"You looked too cute here 😭💖",
"A memory I never want to forget 🌸"
];

// Final Letter
const finalMessage = `
Swapnali 💖🌸

There are so many things I want to say, but if I had to put it simply, I just love spending time with you 🥹❤️

Whether it's our long conversations, random talks, or those moments where I act completely childish around you, they are honestly some of the best parts of my day ✨

No matter how much time we spend together, I always feel like I need a little more. Somehow, it never feels enough 💕

You have been my biggest supporter. Whenever I'm confused, lost, or overthinking things, you always guide me towards the right path 🌷

Your presence in my life makes everything feel easier to handle ❤️

One thing I admire the most about you is how you can be so childish and cute in one moment and then so mature and strong in the next 🥹✨

You're someone who works the whole day, comes home tired, and still studies to achieve your goals and build a better future 🌸

Honestly, you're amazing 💖

People celebrate birthdays because it's a special day for the person born on that date 🎂

But for me, your birthday is special because it's the day someone so important came into this world and eventually became such an important part of my life ❤️

I don't really ask for much.

I just want you to stay with me, keep smiling, keep chasing your dreams, and keep being the wonderful person you are 🌷

Thank you for being you 💕

And thank you for being a part of my life ✨

Happy Birthday Swapnali ❤️

Aditya ❤️
`;

// Music
function playMusic(){

  music.play()
  .catch(()=>{});

}

// Sparkle
function sparkle(x,y){

  const s =
  document.createElement(
  "div"
  );

  s.className =
  "sparkle";

  s.innerHTML =
  "✨";

  s.style.left =
  x + "px";

  s.style.top =
  y + "px";

  document.body
  .appendChild(s);

  setTimeout(()=>{
    s.remove();
  },800);

}

// Paw Click Effect
document.addEventListener(
"click",
(e)=>{

  const paw =
  document.createElement(
  "div"
  );

  paw.className =
  "paw";

  paw.innerHTML =
  "🐾";

  paw.style.left =
  e.clientX + "px";

  paw.style.top =
  e.clientY + "px";

  document.body
  .appendChild(
  paw
  );

  sparkle(
  e.clientX,
  e.clientY
  );

  setTimeout(()=>{
    paw.remove();
  },700);

});

// Falling Petals
setInterval(()=>{

  const petal =
  document.createElement(
  "div"
  );

  petal.className =
  "petal";

  petal.innerHTML =
  "🌸";

  petal.style.left =
  Math.random()
  *
  window.innerWidth
  + "px";

  document.body
  .appendChild(
  petal
  );

  let topPos = -20;

  const fall =
  setInterval(()=>{

    topPos += 3;

    petal.style.top =
    topPos + "px";

    if(
    topPos >
    window.innerHeight
    ){

      clearInterval(
      fall
      );

      petal.remove();

    }

  },30);

},700);

// Floating Hearts
setInterval(()=>{

  const heart =
  document.createElement(
  "div"
  );

  heart.className =
  "heart";

  heart.innerHTML =
  "❤️";

  heart.style.left =
  Math.random()
  *
  window.innerWidth
  + "px";

  heart.style.fontSize =
  (
  Math.random()*20
  + 15
  ) + "px";

  document.body
  .appendChild(
  heart
  );

  setTimeout(()=>{
    heart.remove();
  },7000);

},1800);

// Intro Screen
function showIntro(){

  app.innerHTML = `
  <div class="slide">

    <h1>
    Someone made
    something special
    for you 💖
    </h1>

    <p>
    Tap below to begin
    your surprise 🌸
    </p>

    <button
    onclick="startWebsite()">

    Tap To Begin 💕

    </button>

  </div>
  `;
}

function startWebsite(){

  playMusic();

  sparkle(
  window.innerWidth/2,
  window.innerHeight/2
  );

  showDateScreen();

}

// Birthday Verification
function showDateScreen(){

  app.innerHTML = `
  <div class="slide">

    <h1>
    Birthday Verification 🎂
    </h1>

    <p>
    What is today's date? 🤭
    </p>

    <img
    src="assets/surprise.gif"
    class="main-img">

    <input
    id="dateInput"
    placeholder="DD/MM/YYYY">

    <br>

    <button
    onclick="checkDate()">

    Continue 💖

    </button>

  </div>
  `;
}

function checkDate(){

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

  if(
  validDates.includes(
  date
  )){

    sparkle(
    window.innerWidth/2,
    window.innerHeight/2
    );

    app.innerHTML = `
    <div class="slide">

      <h1>
      Smart girl 😌💖
      </h1>

      <img
      src="assets/correct.gif"
      class="main-img">

      <button
      onclick="showQuestion1()">

      Continue 🌸

      </button>

    </div>
    `;

  }else{

    app.innerHTML = `
    <div class="slide">

      <h1>
      Hmm...
      that's not right 😏
      </h1>

      <img
      src="assets/staring.gif"
      class="main-img">

      <button
      onclick="showDateScreen()">

      Try Again 💕

      </button>

    </div>
    `;
  }

}
```
// Question 1
function showQuestion1(){

  app.innerHTML = `
  <div class="slide">

    <h1>
    Is there something
    special today? 🤔
    </h1>

    <img
    src="assets/Reaction.gif"
    class="main-img">

    <button
    onclick="showExcited()">

    YES ❤️

    </button>

    <button
    onclick="showNoAnswer()">

    NO 🙄

    </button>

  </div>
  `;
}

function showNoAnswer(){

  app.innerHTML = `
  <div class="slide">

    <h1>
    Wrong answer 🚨
    </h1>

    <p>
    There is definitely
    something special
    today 😤
    </p>

    <img
    src="assets/cat-gun.gif"
    class="main-img">

    <button
    onclick="showQuestion1()">

    Okay Okay 😭

    </button>

  </div>
  `;
}

// Moving NO Button
function showExcited(){

  noAttempts = 0;

  app.innerHTML = `
  <div
  class="slide"
  style="
  position:relative;
  min-height:520px;
  ">

    <h1>
    Are you excited
    to see what's
    waiting for you?
    😈
    </h1>

    <img
    src="assets/excited.gif"
    class="main-img">

    <button
    onclick="showQuiz()">

    YES 😍

    </button>

    <button
    id="noBtn"
    style="
    position:absolute;
    left:58%;
    top:78%;
    ">

    NO 🙄

    </button>

    <p
    id="attemptText"
    style="
    margin-top:35px;
    color:#ff7aa2;
    font-weight:bold;
    ">
    </p>

  </div>
  `;

  const noBtn =
  document.getElementById(
  "noBtn"
  );

  function moveButton(){

    noAttempts++;

    const container =
    document.querySelector(
    ".slide"
    );

    const rect =
    container.getBoundingClientRect();

    const randomX =
    Math.random()
    *
    (rect.width - 130);

    const randomY =
    220 +
    Math.random()
    *
    (rect.height - 280);

    noBtn.style.left =
    randomX + "px";

    noBtn.style.top =
    randomY + "px";

    if(
    noAttempts >= 5
    ){

      document
      .getElementById(
      "attemptText"
      )
      .innerHTML =
      "Bro really wants to press NO 😂";

    }
  }

  noBtn.addEventListener(
  "mouseenter",
  moveButton
  );

  noBtn.addEventListener(
  "touchstart",
  (e)=>{

    e.preventDefault();

    moveButton();

  });

}

// Quiz
function showQuiz(){

  app.innerHTML = `
  <div class="slide">

    <h1>
    Guess Who Planned
    This? 🕵️💖
    </h1>

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

function wrongAnswer(){

  app.innerHTML = `
  <div class="slide">

    <h1>
    Nice try 😂
    </h1>

    <img
    src="assets/beatboxing-cat-cat.gif"
    class="main-img">

    <button
    onclick="showQuiz()">

    Try Again 💕

    </button>

  </div>
  `;
}

function correctAnswer(){

  sparkle(
  window.innerWidth/2,
  window.innerHeight/2
  );

  app.innerHTML = `
  <div class="slide">

    <h1>
    Exactly 💖
    </h1>

    <img
    src="assets/cute.jpg"
    class="main-img">

    <p>
    Hehehe 🤭💕
    </p>

    <button
    onclick="memoryAsk()">

    Continue 🌸

    </button>

  </div>
  `;
}

// Memory Ask
function memoryAsk(){

  app.innerHTML = `
  <div class="slide">

    <h1>
    Memory Check 📸
    </h1>

    <p>
    Want to see some
    special memories?
    🥹❤️
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

// Memories
function showMemory(){

  currentMemory = 0;

  app.innerHTML = `
  <div class="slide">

    <h1>
    Memory Lane 💕
    </h1>

    <img
    id="memoryImg"
    src="${memories[0]}"
    class="memory-img">

    <p
    id="memoryText">

    ${captions[0]}

    </p>

    <button
    onclick="nextMemory()">

    Next 💖

    </button>

  </div>
  `;
}

function nextMemory(){

  currentMemory++;

  if(
  currentMemory <
  memories.length
  ){

    const img =
    document.getElementById(
    "memoryImg"
    );

    img.style.opacity =
    "0";

    img.style.transform =
    "scale(.95)";

    setTimeout(()=>{

      img.src =
      memories[
      currentMemory
      ];

      document
      .getElementById(
      "memoryText"
      )
      .innerHTML =
      captions[
      currentMemory
      ];

      img.style.opacity =
      "1";

      img.style.transform =
      "scale(1)";

    },400);

  }else{

    oneMoreThing();

  }

}
```
      // One More Thing Screen
function oneMoreThing(){

  app.innerHTML = `
  <div class="slide">

    <h1>
    Wait... 🥹
    </h1>

    <img
    src="assets/blushing.gif"
    class="main-img">

    <p>
    Before we finish,
    there is one more
    thing for you 💌
    </p>

    <button
    onclick="showEnvelope()">

    Continue ❤️

    </button>

  </div>
  `;
}

// Envelope Screen
function showEnvelope(){

  app.innerHTML = `
  <div class="slide envelope-box">

    <h1>
    One unread letter 💌
    </h1>

    <p>
    Tap the envelope ❤️
    </p>

    <div
    class="envelope"
    onclick="openLetter()">

    💌

    </div>

  </div>
  `;
}

// Typewriter
function typeWriter(
text,
elementId,
speed = 35
){

  let i = 0;

  const target =
  document
  .getElementById(
  elementId
  );

  target.innerHTML = "";

  const timer =
  setInterval(()=>{

    if(
    i < text.length
    ){

      target.innerHTML +=
      text.charAt(i)
      === "\n"
      ? "<br>"
      : text.charAt(i);

      i++;

    }else{

      clearInterval(
      timer
      );

      // Confetti
      if(
      typeof confetti
      !== "undefined"
      ){

        confetti({
          particleCount:250,
          spread:120,
          origin:{
            y:.6
          }
        });

      }

      // Ending
      target.innerHTML += `

      <br><br><br>

      <div
      style="
      text-align:center;
      ">

        <h2
        style="
        color:#ff5f8f;
        margin-bottom:20px;
        ">

        ❤️ Happy Birthday ❤️

        </h2>

        <button
        onclick=
        "location.reload()">

        Read Again 💌

        </button>

      </div>
      `;

    }

  },speed);

}

// Open Letter
function openLetter(){

  app.innerHTML = `

  <img
  id="bgSlide"
  src="${memories[0]}"
  class="memory-bg">

  <div class="slide">

    <h1>
    Happy Birthday
    Swapnali ❤️
    </h1>

    <div
    class="letter unfold">

      <div
      id="message">
      </div>

    </div>

  </div>

  `;

  // Background Slideshow
  let bgIndex = 0;

  setInterval(()=>{

    bgIndex++;

    const bg =
    document.getElementById(
    "bgSlide"
    );

    if(bg){

      bg.src =
      memories[
      bgIndex %
      memories.length
      ];

    }

  },4000);

  // Start Letter
  setTimeout(()=>{

    typeWriter(
    finalMessage,
    "message",
    32
    );

  },1200);

}

// Start App
showIntro();
