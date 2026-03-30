const quotes = [
  "I may look mysterious, but I am extremely serious about you deserving nice things.",
  "If tonight feels heavy, borrow my strategy: sit dramatically in moonlight and continue anyway.",
  "You are both wildly lovable and probably overdue for a snack.",
  "Somewhere between silly and sincere is the exact place your heart gets to rest.",
  "You do not need to be perfect to be cherished. A cat told you so.",
  "I believe in you with the confidence of a cat walking across a narrow railing.",
  "Your softness is not a flaw. It is one of the nicest things in the room.",
  "I cannot solve every problem, but I can insist you are worth staying gentle with.",
  "Moonlight, balcony air, tiny green eyes: this is your reminder that you are not alone.",
  "If the day was a mess, consider this an official pardon from the nighttime cat.",
  "I can haz emotional support? Because you look like you deserve a full refill.",
  "M'lady, your vibe tonight is more powerful than the moon and at least twice as dramatic.",
  "I came here to stare into the void and compliment you, and I am somehow doing both.",
  "M'lady, may I offer you one velvet paw and a deeply unnecessary amount of devotion?",
  "This balcony is my kingdom, and you are an honored guest with excellent cheekbones.",
  "Live. Laugh. Lurk in the hallway at 3 a.m.",
  "My brain was loading a joke, but the orange cat server in my head crashed again.",
  "I forgot why I climbed up here, but now that I see you, I assume it was fate.",
  "M'lady, I would tip my tiny invisible hat, but I am currently loafing.",
  "No thoughts, head empty, heart full, tail operational.",
  "I knocked over a glass in your honor. It felt romantic and a little illegal.",
  "You are the human equivalent of the warm spot on the bed.",
  "M'lady, your presence has me purring in cursive.",
  "I started this evening with one plan and forgot it immediately, which feels very poetic.",
  "Certified balcony goblin. Licensed to adore you.",
  "If elegance is learned, then I regret to inform you I was born majestic instead.",
  "M'lady, the stars asked about you and I said, yes, iconic.",
  "I am not saying you are magical, but the moon got brighter when you showed up.",
  "I had a very important cat thought just now and then it wandered off after a moth.",
  "M'lady, I bring you midnight charm, secondhand wisdom, and no financial stability.",
  "Somewhere out there is a fancy poem about you. I am the cheaper, furrier version.",
  "I came, I saw, I sat in a box that was too small.",
  "My memory is terrible, but somehow I never forget your softness.",
  "M'lady, even my whiskers agree that you are a delight.",
  "The moon said hush. My heart said purr. The balcony said dramatic entrance.",
  "If being adorable were a crime, I would ask you to represent me in court.",
  "I forgot the assignment, so I improvised affection.",
  "M'lady, your name would look excellent written in the margins of my tiny cat diary.",
  "Emotionally, I am one satin bow away from becoming a Victorian gentleman cat.",
  "I may not chase my dreams, but I would absolutely slow-blink at yours.",
  "The meme is me. The meow is also me.",
  "M'lady, you have the kind of face that deserves moonlight and at least three sonnets.",
  "I entered the room with confidence, forgot why, and decided to make it your problem.",
  "Tiny paws. Grand feelings. Zero shame.",
  "M'lady, if flirting were an Olympic sport, I would still get distracted by a bug.",
  "Even my intrusive thoughts are just me wondering if you have eaten enough today.",
  "I am here, I am plush, and I support your continued existence.",
  "M'lady, forgive my staring. I am taking mental screenshots and misplacing half of them.",
  "Some nights are for healing. Some nights are for yelling at invisible enemies. Balance matters.",
  "My love language is showing up, being weird, and sitting nearby like a little gargoyle.",
  "M'lady, you radiate the exact energy of a poem finding its final line.",
  "I forgot the joke setup, so please accept this premium-quality punchline: you matter.",
  "I have seen many things from this balcony, and you remain in the top tier.",
  "M'lady, the moon is lovely tonight, but you are making it work harder than usual.",
  "If comfort were a profession, you would have tenure.",
  "I am running on moonbeams, audacity, and whatever was in that suspicious flower pot.",
  "M'lady, I would compose a ballad for you, but I am only equipped for meows.",
  "You are stunning, but your attention span has strong laser-pointer-in-an-empty-room energy.",
  "I respect your confidence. It is wildly unsupported by the available evidence, but I respect it.",
  "You have the soul of a poem and the coordination of a cat missing the jump by one inch.",
  "Not to roast you, but if you were a cat toy you would already be lost under the sofa.",
  "Your vibe is expensive, but your decisions are giving discount bin at the pet store.",
  "I adore you, but you do carry yourself like a cat who just broke something and blamed physics.",
  "You are cute enough to get away with nonsense, which frankly has made you too powerful.",
  "Somewhere deep inside you is a majestic panther. Unfortunately it keeps getting distracted by snacks.",
  "You talk a lot of elegance for someone with clear zoomies in the soul.",
  "I mean this lovingly: your chaos has excellent cheekbones.",
  "You are the human version of a cat stepping directly on the one loud object in the room.",
  "If charm paid rent, you would own the building. If planning did, we would need a fundraiser.",
  "You look like you have never made a mistake in your life, which is hilarious to both of us.",
  "Your inner child is clearly an orange cat with a fake mustache and no supervision.",
  "I would trust you with my heart, but maybe not with an uncovered glass of water.",
  "You have elite main-character energy and deeply side-quest decision making.",
  "I am not judging you. I am simply observing that your problem-solving style is very cardboard-box-forward.",
  "You are graceful in theory, which is still better than what most of us have.",
  "Your brand is elegance interrupted by nonsense, and honestly it works.",
  "You are so cute it almost cancels out the suspicious amount of nonsense you bring to a room.",
  "If I were writing your official review, I would note excellent vibes and concerning impulse control.",
  "Did Manse survive that dramatic hallway dispute, or are those the meows of an orange cat filing an appeal?",
  "Some cats chase mice. I chase closure, compliments, and the sound of a snack bag from three rooms away.",
  "You are the kind of person a cat would ignore for hours and then suddenly love with full conviction.",
  "I bring you a tiny roast, lightly seasoned with affection and served on a velvet cushion.",
  "Your face says poised and timeless. Your choices say opened the wrong door and committed anyway.",
  "If nonsense were an art form, you would at least have a small grant.",
  "You have the confidence of a cat who has never once considered the consequences.",
  "I support your rights and your wrongs, though some of these wrongs are impressively creative.",
  "You are soft, lovable, and occasionally powered by absolute raccoon logic.",
  "I would never call you a mess. I would call you an unexpectedly complex limited-edition situation.",
  "You walk through life like a cat entering a room it definitely does not pay rent for.",
  "The good news is you are adorable. The better news is that this covers a surprising amount.",
  "You are one raised eyebrow away from being a full-time fancy cat meme.",
  "I did not come to attack your character. I came to gently tap it with my paw and walk away.",
  "Your heart is gold. Your planning process is mostly vibes and a dramatic inhale.",
  "You are giving luxury behavior with community-theater logistics.",
  "Honestly, I would follow you anywhere, though I would ask at least two questions first.",
  "If being a little ridiculous were a crime, you would still be too charming for a conviction.",
  "You are proof that grace and nonsense can, in fact, share an apartment.",
  "I meow you, m'lady. That is the entire message and also the whole economy of my heart.",
  "M'lady, if I had arms built for hugging, you would be dealing with a serious situation right now.",
  "You deserve forehead kisses, warm blankets, and one loyal cat singing your praises in lowercase meows.",
  "M'lady, I would curl around your worries until they finally fell asleep.",
  "If love could purr, it would sound exactly like me noticing you entered the room.",
  "I would hug you so gently, m'lady, even your bad day would feel embarrassed to stay.",
  "You are the reason my tiny cat heart keeps writing sonnets it cannot afford.",
  "M'lady, I would choose you over the warm spot on the bed, and that is legally binding affection.",
  "If I could, I would tuck you into a blanket burrito and guard you like royal treasure.",
  "I meow you, my lady, in the old-fashioned way: with devotion, staring, and zero emotional chill.",
  "M'lady, come here and accept this invisible cat hug with unreasonable sincerity.",
  "You are lovely enough to make even my sarcasm sit down and behave for a minute.",
  "If tenderness were a kingdom, m'lady, I would build you a castle out of purrs and naps.",
  "My favorite hobby is imagining you being safe, cozy, and slightly overhugged.",
  "M'lady, your existence makes my dramatic little soul want to become gentler.",
  "I hope someone hugs you exactly the way a sleepy cat collapses into the perfect blanket.",
  "M'lady, I offer you premium affection, deluxe loyalty, and a face that would absolutely nuzzle your hand.",
  "If I had one wish, it would be to sit beside you and make the whole evening softer.",
  "I love you in the deeply serious way a cat loves the person who understands the assignment.",
  "M'lady, even the moon looks like it wants to tuck your hair behind your ear and call you lovely.",
  "Manse talks tough for an orange cat who keeps losing debates with chair legs and closed doors.",
  "I heard Manse got absolutely folded by his own reflection and is now requesting legal counsel.",
  "M'lady, tell Manse the balcony council has reviewed his complaint and found him dramatically overruled.",
  "Manse entered the room with confidence and left with the emotional damage of one stern little meow.",
  "Apparently Manse picked a fight with the blanket and lost on all counts.",
  "I checked on Manse. He survived, but only because his sense of drama is medically excellent.",
  "Manse keeps acting like the main villain, then getting outplayed by a sock and an ottoman.",
  "The streets are saying Manse got humbled by a pillow and is refusing further comment.",
  "M'lady, please reassure Manse that being lightly out-catted is not a personal failure.",
  "Manse filed another report claiming emotional injustice. The evidence was just three offended meows and a tail flick.",
  "My pride said leap with confidence. Reality said absolutely not.",
  "I had a brilliant thought, then sat down and misplaced it like a decorative pillow.",
  "My memory is not bad, it is simply committed to a minimalist lifestyle.",
  "I walked in with pride and left with the emotional experience of a cat wearing a lampshade.",
  "Sometimes I speak with great authority for someone whose last plan was just vibes in a coat.",
  "My downfall is pride, poor timing, and believing I can land every jump. One of those is true.",
  "I forgot what I was doing, but I am doing it beautifully.",
  "The universe is vast, mysterious, and somehow still not big enough to hide my awkward moments.",
  "My ego writes checks my coordination cannot cash.",
  "Every time I become too confident, life hands me the spiritual equivalent of walking into a glass door.",
  "I am a humble creature, mostly because pride has repeatedly thrown me down the stairs.",
  "I had a philosophy once, but then I got distracted by a dust particle in moonlight.",
  "To be known is lovely. To be adored while being a little ridiculous is the real miracle.",
  "I forget many things, m'lady, but never the shape of kindness when it enters a room.",
  "My pride wanted a grand entrance. My paw chose the loudest possible object on the floor.",
  "Existing is very philosophical when you are staring at the moon and avoiding your responsibilities.",
  "I contain multitudes, most of them confused and one of them looking for snacks.",
  "My brain is a haunted attic, but the lighting is beautiful.",
  "Pride goeth before the fall, and I goeth directly after, pretending it was part of the act.",
  "Sometimes the meaning of life feels close enough to touch, then I remember I left my thoughts in the kitchen.",
  "I would be wiser if I were less dramatic, but then what would be the point.",
  "My forgetfulness is less a flaw and more a rotating art exhibit.",
  "M'lady, if pride is a cliff, I have already strutted toward it with unnecessary elegance.",
  "The soul grows through suffering, which is unfortunate because I personally preferred snacks.",
  "I tried to be mysterious, but then I forgot my own bit halfway through.",
  "We are all tiny creatures asking large questions under a very judgmental moon.",
  "My sense of dignity is strong until literally anything mildly embarrassing happens.",
  "Philosophy is just staring into the night until your feelings start using larger words.",
  "I have fallen many times, physically and spiritually, and somehow still managed to look expensive.",
  "If forgetfulness is a curse, at least it keeps life full of surprise reruns.",
  "I seek truth, beauty, and the thing I walked into the room for.",
  "My pride is a peacock. My actual results are a cat tangled in curtain string.",
  "There is no greater teacher than failure, though I do wish it would stop scheduling weekly lessons.",
  "Sometimes I think, therefore I am. Other times I just blink at a wall and hope for insight.",
  "M'lady, you make even my most embarrassing inner monologue sound almost poetic.",
  "The moon reminds me that even broken-looking things can still pull the whole tide.",
  "I forgot the lesson, remembered the feeling, and honestly that is how I do most of life.",
  "Do not worry too much, my lady. Not every storm is permanent, and not every heavy night stays heavy.",
  "Things can get better slowly, quietly, and all at once. Do not rule out gentle miracles.",
  "You are allowed to take this one hour at a time and still call that progress.",
  "Drink some water, unclench your shoulders, and stop making everything carry the weight of forever.",
  "M'lady, please remember that rest is not quitting. Even brave hearts need soft places.",
  "You have survived every strange day so far. That is not small. That is a record.",
  "A helpful tip from a balcony cat: when life is too large, make the next step ridiculously small.",
  "Everything may not fix itself tonight, but tonight does not get to decide the whole story.",
  "You are doing better than your most dramatic thoughts are willing to admit.",
  "M'lady, the future is not required to resemble your worst fear.",
  "If the day feels impossible, begin with one kind thing: water, food, air, or asking for help.",
  "Your heart is allowed to heal slowly. Slow does not mean failing.",
  "Do not panic, my lady. Some chapters feel messy right before they start making sense.",
  "You deserve patience from yourself, especially on the days you feel least impressive.",
  "Helpful reminder: sleep is a strategy, not a moral weakness.",
  "Even now, while you are uncertain, life is still quietly building better mornings.",
  "M'lady, one bad moment is not a prophecy. It is just one bad moment.",
  "Try this: breathe in for four, hold for four, out for four. Your nervous system is not your enemy.",
  "You are not behind. You are simply alive at a human pace.",
  "If you cannot be hopeful tonight, be practical: eat something, sit down, and survive this hour first.",
  "Things often get better in increments so small they feel invisible until suddenly they do not.",
  "M'lady, there is no shame in needing comfort. Even the moon borrows light.",
  "A useful life hack from me: do not trust every thought that arrives wearing a serious expression.",
  "You can start over after lunch, after a cry, after a nap, or after staring at the ceiling for a while.",
  "The version of you who keeps going does not need to look graceful to be brave.",
  "M'lady, better days are not fiction. They just have terrible timing sometimes.",
  "When in doubt, clean one corner, answer one message, or pet one cat. Momentum likes small doors.",
  "Please be gentle with yourself. Recovery is not a performance and peace is not earned through exhaustion.",
  "You are still worthy on the days when all you do is make it through.",
  "A tiny reminder: feelings are weather, not architecture.",
  "M'lady, if everything feels loud, make your world smaller for a bit. Small worlds are easier to carry.",
  "You do not need to solve your whole life tonight. That would be a ridiculous project.",
  "Helpful tip: if you are overwhelmed, stop negotiating with your basic needs and go meet them.",
  "You are closer to a better season than your tired mind can currently calculate.",
  "M'lady, I know it hurts sometimes, but not every ache is permanent and not every ending is a loss.",
  "Keep going in the quiet way if you need to. Quiet progress still counts.",
  "Some days the victory is simply not giving up on yourself. Count that one properly.",
  "You are allowed to believe that something lovely is still on its way to you.",
  "M'lady, your life is not ruined. It is just unfinished.",
  "If your heart is tired, carry less today. Not everything deserves equal weight.",
  "You have the confidence of someone who has never reread the message before sending it.",
  "Not to roast you, but your decision-making process has the elegance of a cat falling off a table in slow motion.",
  "You are very smart in a way that often arrives five minutes after the situation ends.",
  "Your vibe says mastermind. Your recent behavior says supervised craft time.",
  "I respect your commitment to chaos, even if your calendar does not.",
  "You are cute enough that people keep mistaking your nonsense for personality.",
  "Your plans have strong 'drawn on a napkin during a mild crisis' energy.",
  "You carry yourself like royalty, but your choices keep tripping over the hem.",
  "You are not a disaster. You are a limited series with uneven writing and a devoted fan base.",
  "Honestly, m'lady, your confidence is doing a shocking amount of heavy lifting.",
  "You give excellent advice for someone clearly not taking any of it.",
  "I would roast you harder, but life already seems to be collaborating.",
  "All jokes aside, I meow you, my lady.",
];

const catButton = document.getElementById("catButton");
const quoteBubble = document.getElementById("quoteBubble");
const snakeOverlay = document.getElementById("snakeOverlay");
const snakeBackdrop = document.getElementById("snakeBackdrop");
const snakeCanvas = document.getElementById("snakeCanvas");
const snakeScore = document.getElementById("snakeScore");
const snakeStatus = document.getElementById("snakeStatus");
const snakeRestartButton = document.getElementById("snakeRestartButton");
const snakeCloseButton = document.getElementById("snakeCloseButton");
const snakeCloseAction = document.getElementById("snakeCloseAction");
const snakeControls = document.querySelectorAll("[data-direction]");
const snakeContext = snakeCanvas.getContext("2d");

const secretTapWindowMs = 1600;
const secretTapGoal = 5;
const gridSize = 16;
const canvasSize = snakeCanvas.width;
const cellSize = canvasSize / gridSize;
const quoteCacheKey = "midnight-balcony-quote-cache";
const quoteCacheTtlMs = 15 * 60 * 1000;

let previousQuote = "";
let clearAnimationTimer = 0;
let quoteDeck = [];
let rapidTapTimes = [];
let snakeFrameTimer = 0;
let snakeTickTimer = 0;
let seenQuotes = loadSeenQuotes();

const directionMap = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

let snakeState = createSnakeState();

function shuffle(items) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

function loadSeenQuotes() {
  try {
    const cachedValue = window.localStorage.getItem(quoteCacheKey);

    if (!cachedValue) {
      return [];
    }

    const parsedCache = JSON.parse(cachedValue);
    const seen = Array.isArray(parsedCache.seen) ? parsedCache.seen : [];
    const updatedAt = Number(parsedCache.updatedAt) || 0;

    if (!updatedAt || Date.now() - updatedAt > quoteCacheTtlMs) {
      window.localStorage.removeItem(quoteCacheKey);
      return [];
    }

    return seen.filter((quote) => quotes.includes(quote));
  } catch {
    return [];
  }
}

function saveSeenQuotes() {
  try {
    window.localStorage.setItem(
      quoteCacheKey,
      JSON.stringify({
        seen: seenQuotes,
        updatedAt: Date.now(),
      })
    );
  } catch {
    // Ignore storage failures and keep the in-memory flow working.
  }
}

function clearSeenQuotes() {
  seenQuotes = [];

  try {
    window.localStorage.removeItem(quoteCacheKey);
  } catch {
    // Ignore storage failures and keep the in-memory flow working.
  }
}

function refillQuoteDeck() {
  const unseenQuotes = quotes.filter((quote) => !seenQuotes.includes(quote));

  if (unseenQuotes.length === 0) {
    clearSeenQuotes();
    quoteDeck = shuffle(quotes);
  } else {
    quoteDeck = shuffle(unseenQuotes);
  }

  if (quoteDeck.length > 1 && quoteDeck[0] === previousQuote) {
    [quoteDeck[0], quoteDeck[1]] = [quoteDeck[1], quoteDeck[0]];
  }
}

function nextQuote() {
  if (quotes.length === 1) {
    return quotes[0];
  }

  if (quoteDeck.length === 0) {
    refillQuoteDeck();
  }

  const selectedQuote = quoteDeck.pop();

  previousQuote = selectedQuote;
  seenQuotes.push(selectedQuote);
  saveSeenQuotes();
  return selectedQuote;
}

function createSnakeState() {
  const snake = [
    { x: 7, y: 8 },
    { x: 6, y: 8 },
    { x: 5, y: 8 },
  ];

  return {
    snake,
    direction: directionMap.right,
    queuedDirection: directionMap.right,
    food: createFood(snake),
    score: 0,
    started: false,
    gameOver: false,
  };
}

function createFood(snake) {
  let food = { x: 0, y: 0 };
  let overlapsSnake = true;

  while (overlapsSnake) {
    food = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };

    overlapsSnake = snake.some((segment) => segment.x === food.x && segment.y === food.y);
  }

  return food;
}

function updateSnakeHud(message = "Press any arrow to begin.") {
  snakeScore.textContent = `Score: ${snakeState.score}`;
  snakeStatus.textContent = message;
}

function drawCell(x, y, fillStyle, inset = 0) {
  snakeContext.fillStyle = fillStyle;
  snakeContext.fillRect(
    x * cellSize + inset,
    y * cellSize + inset,
    cellSize - inset * 2,
    cellSize - inset * 2
  );
}

function drawSnakeBoard() {
  snakeContext.clearRect(0, 0, canvasSize, canvasSize);

  snakeContext.fillStyle = "rgba(10, 16, 28, 0.96)";
  snakeContext.fillRect(0, 0, canvasSize, canvasSize);

  snakeContext.strokeStyle = "rgba(148, 180, 238, 0.08)";
  snakeContext.lineWidth = 1;

  for (let position = 0; position <= gridSize; position += 1) {
    const offset = position * cellSize;

    snakeContext.beginPath();
    snakeContext.moveTo(offset, 0);
    snakeContext.lineTo(offset, canvasSize);
    snakeContext.stroke();

    snakeContext.beginPath();
    snakeContext.moveTo(0, offset);
    snakeContext.lineTo(canvasSize, offset);
    snakeContext.stroke();
  }

  drawCell(snakeState.food.x, snakeState.food.y, "#ffd36b", 5);

  snakeState.snake.forEach((segment, index) => {
    drawCell(segment.x, segment.y, index === 0 ? "#dfffb8" : "#9af06a", 3);
  });
}

function queueDirection(directionName) {
  const nextDirection = directionMap[directionName];

  if (!nextDirection || snakeState.gameOver) {
    return;
  }

  const isReverseMove =
    nextDirection.x === snakeState.direction.x * -1 &&
    nextDirection.y === snakeState.direction.y * -1;

  if (snakeState.started && isReverseMove) {
    return;
  }

  snakeState.queuedDirection = nextDirection;

  if (!snakeState.started) {
    snakeState.started = true;
    updateSnakeHud("Catch the moon snacks.");
  }
}

function stepSnakeGame() {
  if (snakeState.gameOver || !snakeState.started) {
    return;
  }

  snakeState.direction = snakeState.queuedDirection;
  const head = snakeState.snake[0];
  const nextHead = {
    x: head.x + snakeState.direction.x,
    y: head.y + snakeState.direction.y,
  };

  const hitWall =
    nextHead.x < 0 ||
    nextHead.x >= gridSize ||
    nextHead.y < 0 ||
    nextHead.y >= gridSize;

  const hitSelf = snakeState.snake.some(
    (segment) => segment.x === nextHead.x && segment.y === nextHead.y
  );

  if (hitWall || hitSelf) {
    snakeState.gameOver = true;
    updateSnakeHud(`Game over. Final score: ${snakeState.score}.`);
    drawSnakeBoard();
    return;
  }

  snakeState.snake.unshift(nextHead);
  const ateFood = nextHead.x === snakeState.food.x && nextHead.y === snakeState.food.y;

  if (ateFood) {
    snakeState.score += 1;
    snakeState.food = createFood(snakeState.snake);
    updateSnakeHud("Nice. The balcony arcade approves.");
  } else {
    snakeState.snake.pop();
  }

  snakeScore.textContent = `Score: ${snakeState.score}`;
  drawSnakeBoard();
}

function runSnakeLoop() {
  if (snakeOverlay.hidden) {
    return;
  }

  const now = window.performance.now();

  if (now - snakeTickTimer >= 120) {
    snakeTickTimer = now;
    stepSnakeGame();
  }

  snakeFrameTimer = window.requestAnimationFrame(runSnakeLoop);
}

function restartSnakeGame() {
  snakeState = createSnakeState();
  snakeTickTimer = window.performance.now();
  updateSnakeHud();
  drawSnakeBoard();
}

function openSnakeGame() {
  snakeOverlay.hidden = false;
  document.body.classList.add("snake-open");
  restartSnakeGame();

  if (snakeFrameTimer) {
    window.cancelAnimationFrame(snakeFrameTimer);
  }

  snakeFrameTimer = window.requestAnimationFrame(runSnakeLoop);
}

function closeSnakeGame() {
  snakeOverlay.hidden = true;
  document.body.classList.remove("snake-open");

  if (snakeFrameTimer) {
    window.cancelAnimationFrame(snakeFrameTimer);
    snakeFrameTimer = 0;
  }
}

function registerRapidTap() {
  const now = Date.now();
  rapidTapTimes = rapidTapTimes.filter((timestamp) => now - timestamp <= secretTapWindowMs);
  rapidTapTimes.push(now);

  if (rapidTapTimes.length >= secretTapGoal) {
    rapidTapTimes = [];
    openSnakeGame();
    quoteBubble.textContent = "Secret unlocked: Moon Snake.";
    quoteBubble.classList.remove("is-speaking");
    void quoteBubble.offsetWidth;
    quoteBubble.classList.add("is-speaking");
    return true;
  }

  return false;
}

catButton.addEventListener("click", () => {
  const secretUnlocked = registerRapidTap();

  if (secretUnlocked) {
    return;
  }

  quoteBubble.textContent = nextQuote();
  quoteBubble.classList.remove("is-speaking");
  catButton.classList.remove("is-tapped");

  // Force a reflow so the animation restarts on repeated clicks.
  void quoteBubble.offsetWidth;

  quoteBubble.classList.add("is-speaking");
  catButton.classList.add("is-tapped");

  window.clearTimeout(clearAnimationTimer);
  clearAnimationTimer = window.setTimeout(() => {
    quoteBubble.classList.remove("is-speaking");
    catButton.classList.remove("is-tapped");
  }, 450);
});

snakeControls.forEach((control) => {
  control.addEventListener("click", () => {
    queueDirection(control.dataset.direction);
  });
});

snakeRestartButton.addEventListener("click", () => {
  restartSnakeGame();
});

snakeCloseButton.addEventListener("click", closeSnakeGame);
snakeCloseAction.addEventListener("click", closeSnakeGame);
snakeBackdrop.addEventListener("click", closeSnakeGame);

window.addEventListener("keydown", (event) => {
  if (!snakeOverlay.hidden && event.key === "Escape") {
    closeSnakeGame();
    return;
  }

  const directionName =
    {
      ArrowUp: "up",
      ArrowDown: "down",
      ArrowLeft: "left",
      ArrowRight: "right",
    }[event.key];

  if (!directionName || snakeOverlay.hidden) {
    return;
  }

  event.preventDefault();
  queueDirection(directionName);
});

updateSnakeHud();
drawSnakeBoard();
