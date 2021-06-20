const quotes = [
  {
    quote : "When you have faults, do not fear to abandon them",
    author: "Confucius",
  },
  {
    quote : "I suppose that's one of the ironies of life doing the wrong thing at the right moment",
    author: "Charlie Chaplin",
  },
  {
    quote : "Life is like riding a bicycle. To keep your balance you must keep moving",
    author: "Albert Einstein",
  },
  {
    quote : "Only I can change my life. No one can do it for me.",
    author: "Carol Burnett",
  },
  {
    quote : "He that can have patience can have what he will",
    author: "Enjamin Franklin",
  },
  {
    quote : "Do not know what the future holds, but I know who holds the future",
    author: "Oprah Winfrey",
  },
  {
    quote : "There is only one success - to be able to spend your life in your own way",
    author: "Christopher Morley",
  },
  {
    quote : "You need chaos in your soul to give birth to a dancing star",
    author: "Friedrich Nietzsche",
  },
  {
    quote : "No man is good enough to govern another man without that other's consent",
    author: "Abraham Lincoln",
  },
  {
    quote : "You have to have confidence in your ability, and then be tough enough to follow through",
    author: "Rosalynn Carter",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;