const quotesText = [
    {quote : "Self-confidence is the first requisite to great undertakings.",
    author : "Samuel Johnson"},
    {quote : "When we do the best that we can, we never know what miracle is wrought in our life, or in the life of another.",
    author : "Helen Keller"},
    {quote : "It has been my experience that folks who have no vices have very few virtues.",
    author : "Abraham Lincoln"},
    {quote : "If you hate a person, you hate something in him that is part of yourself. What isn't part of ourselves doesn't disturb us.",
    author : "Hermann Hesse"},
    {quote : "Don't pay any attention to what they write about you. Just measure it in inches.",
    author : "Andy Warhol"},
    {quote : "Punctuality is the soul of business.",
    author : "Thomas Halyburton"},
    {quote : "I don't know the key to success, but the key to failure is trying to please everybody.",
    author : "Bill Cosby"}
]

const quote = document.querySelector(".quotes span:first-child");
const author = document.querySelector(".quotes span:last-child");

const quotesRandom = quotesText[Math.floor(Math.random() * quotesText.length)];

quote.innerText = quotesRandom.quote;
author.innerText = `by ${quotesRandom.author}`;