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
