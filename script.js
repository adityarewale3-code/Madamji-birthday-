const app = document.getElementById("app");

let noClickCount = 0;

function showSlide1() {
  app.innerHTML = `
    <div class="slide">
      <img src="assets/cute-cat.gif" class="gif">
      <h1>📅 What date is today?</h1>

      <input id="dateInput" placeholder="DD-MM-YYYY">

      <button onclick="checkDate()">Continue 💖</button>

      <p id="error"></p>
    </div>
  `;
}

function checkDate() {
  const value = document.getElementById("dateInput").value.trim();

  if (value === "13-07-2026") {
    showSlide2();
  } else {
    document.getElementById("error").innerHTML =
      "😼 Oops! That's not the special date.";
  }
}

function showSlide2() {
  app.innerHTML = `
    <div class="slide">
      <h1>✨ Is there something special today?</h1>

      <div>
        <button onclick="showSlide3()">Yes 💖</button>
        <button onclick="wrongSpecial()">No 🙈</button>
      </div>
    </div>
  `;
}

function wrongSpecial() {
  app.innerHTML = `
    <div class="slide">
      <img src="assets/gun_cat.gif" class="gif">

      <h1>🚨 Wrong Answer Detected 🚨</h1>

      <p>
        There is DEFINITELY something special today 😾
      </p>

      <button onclick="showSlide2()">
        Okay Okay 😭
      </button>
    </div>
  `;
}

function showSlide3() {
  app.innerHTML = `
    <div class="slide">
      <h1>🥺 Are you excited?</h1>

      <button onclick="showSlide4()">YES 😍</button>

      <button id="noBtn">NO 😶</button>
    </div>
  `;

  const noBtn = document.getElementById("noBtn");

  noBtn.addEventListener("mouseover", () => {

    noClickCount++;

    if (noClickCount > 5) {
      noBtn.innerHTML = "Stop Trying 😂";
    }

    noBtn.style.position = "absolute";

    noBtn.style.left =
      Math.random() * (window.innerWidth - 120) + "px";

    noBtn.style.top =
      Math.random() * (window.innerHeight - 80) + "px";
  });
}

function showSlide4() {
  app.innerHTML = `
    <div class="slide">

      <h1>💌 Who made this surprise?</h1>

      <div class="options">
        <button onclick="wrongAnswer()">Ranbir Kapoor</button>

        <button onclick="correctAnswer()">Aadi</button>

        <button onclick="wrongAnswer()">Tom Holland</button>

        <button onclick="wrongAnswer()">Doraemon</button>
      </div>

    </div>
  `;
}

function wrongAnswer() {
  app.innerHTML = `
    <div class="slide">

      <img src="assets/dance_cat.gif" class="gif">

      <h1>😂 Wrong Answer</h1>

      <p>
        This kitty is disappointed in you.
      </p>

      <button onclick="showSlide4()">
        Try Again 💖
      </button>

    </div>
  `;
}

function correctAnswer() {
  app.innerHTML = `
    <div class="slide">

      <img src="assets/swapnali.jpg" class="photo">

      <h1>💖 Correct!</h1>

      <p>Smart girl 😌✨</p>

      <p>
        Yes, Aadi made this surprise for you ❤️
      </p>

      <button onclick="showMemory()">
        Continue 💕
      </button>

    </div>
  `;
}

function showMemory() {
  app.innerHTML = `
    <div class="slide">

      <h1>📸 Memory Lane</h1>

      <img src="assets/memory1.jpg" class="memory">

      <p>
        One of my favourite memories ❤️
      </p>

      <button onclick="showFinal()">
        Continue 💖
      </button>

    </div>
  `;
}

function showFinal() {

  launchConfetti();

  app.innerHTML = `
    <div class="slide final">

      <audio autoplay loop>
        <source src="assets/song.mp3" type="audio/mp3">
      </audio>

      <h1>🎂 Happy Birthday Swapnali ❤️</h1>

      <div class="message">

      <p>
      There are so many things I want to say,
      but if I had to put it simply,
      I just love spending time with you.
      </p>

      <p>
      Whether it's our long conversations,
      random talks,
      or those moments where I act completely childish around you,
      they are honestly some of the best parts of my day.
      </p>

      <p>
      No matter how much time we spend together,
      I always feel like I need a little more.
      Somehow, it never feels enough.
      </p>

      <p>
      You have been my biggest supporter.
      Whenever I'm confused,
      lost,
      or overthinking things,
      you always guide me towards the right path.
      </p>

      <p>
      Your presence in my life makes everything easier to handle.
      Just knowing you're there gives me strength and comfort.
      </p>

      <p>
      One thing I admire most about you is how you can be so childish
      and cute in one moment,
      and then so mature and strong in the next.
      </p>

      <p>
      You work the whole day,
      come home tired,
      and still study to achieve your goals.
      That dedication is something I truly admire.
      </p>

      <p>
      Honestly,
      you're amazing.
      </p>

      <p>
      People celebrate birthdays because it's a special day for the
      person born on that date.
      </p>

      <p>
      But for me,
      your birthday is special because it's the day someone so important
      came into this world and eventually became such an important part
      of my life.
      </p>

      <p>
      I don't really ask for much.
      I just want you to stay with me,
      keep smiling,
      keep chasing your dreams,
      and keep being the wonderful person you are.
      </p>

      <p>
      Thank you for being you.
      </p>

      <p>
      Happy Birthday Swapnali ❤️
      </p>

      <h2>— Aadi</h2>

      </div>

    </div>
  `;
}

function launchConfetti() {

  if (typeof confetti === "function") {

    confetti({
      particleCount: 300,
      spread: 180
    });

  }
}

showSlide1();
