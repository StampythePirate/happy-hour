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
];

const catButton = document.getElementById("catButton");
const quoteBubble = document.getElementById("quoteBubble");
let previousQuote = "";
let clearAnimationTimer = 0;

function randomQuote() {
  if (quotes.length === 1) {
    return quotes[0];
  }

  let nextQuote = quotes[Math.floor(Math.random() * quotes.length)];

  while (nextQuote === previousQuote) {
    nextQuote = quotes[Math.floor(Math.random() * quotes.length)];
  }

  previousQuote = nextQuote;
  return nextQuote;
}

catButton.addEventListener("click", () => {
  quoteBubble.textContent = randomQuote();
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
