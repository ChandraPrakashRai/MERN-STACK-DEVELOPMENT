const quotes = [
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { quote: "If you want to achieve greatness stop asking for permission.", author: "Anonymous" },
  { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { quote: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { quote: "Don’t limit your challenges. Challenge your limits.", author: "Jerry Dunn" },
  { quote: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
  { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { quote: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
  { quote: "Hustle until your haters ask if you’re hiring.", author: "Anonymous" },
  { quote: "Your limitation—it’s only your imagination.", author: "Unknown" },
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Anonymous" },
  { quote: "Great things never come from comfort zones.", author: "Anonymous" },
  { quote: "Don’t stop when you’re tired. Stop when you’re done.", author: "Marilyn Monroe" },
  { quote: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
  { quote: "Little things make big days.", author: "Isabel Marant" },
  { quote: "It’s going to be hard, but hard does not mean impossible.", author: "Art Briles" },
  { quote: "Sometimes later becomes never. Do it now.", author: "Anonymous" },
  { quote: "Work hard in silence, let success make the noise.", author: "Frank Ocean" },
  { quote: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
  { quote: "Try not to become a man of success. Rather become a man of value.", author: "Albert Einstein" },
  { quote: "Perseverance is not a long race; it is many short races one after another.", author: "Walter Elliot" },
  { quote: "Quality is not an act, it is a habit.", author: "Aristotle" },
  { quote: "If you want to shine like a sun, first burn like a sun.", author: "A.P.J. Abdul Kalam" },
  { quote: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
  { quote: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
  { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { quote: "Honesty is the first chapter in the book of wisdom.", author: "Thomas Jefferson" }
];


const button = document.getElementById('generate');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');

// On button click → show random quote
button.addEventListener('click', () => {
  const index = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[index].quote;
  authorText.textContent = `— ${quotes[index].author}`;
});