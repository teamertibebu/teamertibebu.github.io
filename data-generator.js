/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.js.
 */

// Set up data structures
const streams = {
  home: [],
  users: {
    shawndrost: [],
    sharksforcheap: [],
    mracus: [],
    douglascalhoun: [],
  },
};
const users = Object.keys(streams.users);

// Utility function for adding tweets to our data structures
const addTweet = (newTweet) => {
  const username = newTweet.user;
  streams.users[username].push(newTweet);
  streams.home.push(newTweet);
};

// Utility function
const randomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// Random tweet generator
const opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
const verbs = ['downloaded', 'interfaced', 'deployed', 'developed', 'built', 'invented', 'experienced', 'navigated', 'aided', 'enjoyed', 'engineered', 'installed', 'debugged', 'delegated', 'automated', 'formulated', 'systematized', 'overhauled', 'computed'];
const objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
const nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
const tags = ['#techlife', '#burningman', '#sf', '#butonlyiknowhow', '#forreal', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];

const randomMessage = () => {
  return [
    randomElement(opening),
    randomElement(verbs),
    randomElement(objects),
    randomElement(nouns),
    randomElement(tags),
  ].join(' ');
};

// Generate random tweets on a random schedule
const generateRandomTweet = () => {
  let date = new Date();
  let hours = date.getHours() - 12 <= 0 ? date.getHours() : date.getHours() - 12;
  let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  let seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  const tweet = {
    user: randomElement(users),
    message: randomMessage(),
    created_at: new Date(),
  };
  addTweet(tweet);
};

for (let i = 0; i < 10; i++) {
  generateRandomTweet();
}

const scheduleNextTweet = () => {
  generateRandomTweet();
  setTimeout(scheduleNextTweet, Math.random() * 1500);
};
scheduleNextTweet();

// Utility function for letting students add "write a tweet" functionality
// (NOTE: Not used by the rest of this file.)

// window.visitor = 'Guest'
const writeTweet = (message) => {
  const visitor = window.visitor;
  //Create properly formatted time stamps...
  let date = new Date();
  let hours = date.getHours() - 12 <= 0 ? date.getHours() : date.getHours() - 12;
  let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  let seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  if (!visitor){
    throw new Error('Set the global visitor property!');
  }

  const tweet = {
    user: visitor,
    message: message,
    created_at: new Date(),
  };
  addTweet(tweet);
};
