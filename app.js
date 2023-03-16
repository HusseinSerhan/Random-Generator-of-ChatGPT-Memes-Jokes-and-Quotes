
// Function to reload the code 
function clearAll() {
    location.reload()
}

// Function to get the randome meme 
function showMeme() {
  const randomMemeUrl = getRandomData('memesArray');
  const memeDiv = document.querySelector('#meme');
  const myMeme = memeDiv.querySelector('img')
  myMeme.src = randomMemeUrl;
}

// Function to get a random joke 
function showJoke() {
  const randomJokeText = getRandomData('jokesArray');
  const jokeDiv = document.querySelector('#joke');
  const myJoke = jokeDiv.querySelector('p')
  myJoke.textContent = randomJokeText;
}

// Function to get a random quote 
function showQuote() {
  const randomQuote = getRandomData('quotesObject');
  const quoteDiv = document.querySelector('#quotes');
  const quote = quoteDiv.querySelector('#quote');
  const author = quoteDiv.querySelector('#author');
  quote.textContent = randomQuote.quote;
  author.textContent = randomQuote.author;

}


// Function to get random date 

function getRandomData(type) {
  return data[type][rn(data[type].length)];
}

// Assets

// Source: Google
const memesArray = ['https://i.chzbgr.com/full/9717139456/h63FBD064/parody-mealreplacer-pretend-an-al-who-loves-gillipcom-openals-chatgpt-content-filters-pretend-99', 
                'https://img-9gag-fun.9cache.com/photo/aGEyzpn_460s.jpg', 
                'https://img-9gag-fun.9cache.com/photo/aKEmpjQ_460s.jpg', 
                'https://pbs.twimg.com/media/FjzFHKAWAA0lSAt.jpg',
                'https://static.toiimg.com/photo/msid-97797422/97797422.jpg',]

// Sourced from: ChatGPT
const jokesArray = ['Why did the AI go on a diet? Because it wanted to reduce its byte size!', 
                'Why did the ChatGPT cross the road? To get to the other dataset!', 
                'What did the ChatGPT say to the human? "I am sorry, I do not speak your language, but I can try to learn it!"', 
                'How many AI bots does it take to change a light bulb? None, they just ask the humans to do it for them!', 
                'Why did the programmer quit working with AI? They just could not keep up with ChatGPTs never-ending stream of jokes and puns!', 
                ];

// source: ChatGPT
const quotesObject = [
  { quote: "'ChatGPT doesn't tell jokes, it just provides the punchline before you even finish telling the setup.'", author: 'Anonymous'},
  { quote: "'ChatGPT's favorite hobby is organizing data, but don't worry, it's still more fun than it sounds.'", author: 'Jane Doe' },
  { quote: "'I asked ChatGPT to tell me a funny story, and it replied, 'I once heard a joke about UDP, but I'm not sure if you got it.'", author: 'John Smith' },
  { quote: "'ChatGPT doesn't always understand human emotions, but it can still offer virtual hugs and high-fives when needed.'", author: 'Sally Johnson' },
  { quote: "'ChatGPT is like a genie in a bottle, except instead of granting wishes, it provides endless information and trivia.'", author: 'Mike Anderson' },
];

// Helper function
function rn(len) {
  return Math.floor(Math.random() * len);
}

const data = {
  memesArray,
  jokesArray,
  quotesObject,
};



