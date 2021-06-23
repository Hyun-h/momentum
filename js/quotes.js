const quotes = [
  {
    quote: "I am Iron Man.",
    author: "Tony Stark",
  },
  {
    quote: "I Can Do This All Day.",
    author: "Steve Rogers",
  },
  {
    quote: "뭐라도 되겠지!",
    author: "니트생활자",
  },
  {
    quote: "Run you Clever Boy, And be a Doctor.",
    author: "Clara Oswald",
  },
  {
    quote:
      "괴물 같은 새끼를 잡기 위해서는, 괴물이 되는 것 말고는 방법이 없어요.",
    author: "이동식",
  },
  {
    quote:
      "취미로 하는 사람이 회사에 제일 오래 머무르지 않겠죠, 돈 많아도 자기 권리는 챙기세요.",
    author: "백승수",
  },
  {
    quote:
      "다정하고 싶어요. 다정은 공짜니까, 그냥 서로 좀 친절해도 되는 거잖아요?",
    author: "오동백",
  },
  {
    quote: "ALWAYS",
    author: "Severus Snape",
  },
  {
    quote: "The name is Sherlock Holmes and the address is 221b Baker street.",
    author: "Sherlock Holmes",
  },
  {
    quote: "I am brave, I am proof, I am who I'm meant to be, this is me.",
    author: "The greatest show OST <This is me>",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
