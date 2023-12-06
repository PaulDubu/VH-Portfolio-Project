// Randomizer function
function randomizer(num){return Math.floor(Math.random()*num)};

// Object
quotes =["The paradise of the rich is made out of the hell of the poor.","Melancholy is the happiness of being sad.","To love another person is to see the face of God.","Our mind is enriched by what we receive, our heart by what we give.","Don't educate your children to be rich. Educate them to be happy, so they know the value of things, not the price.","When dictatorship is a fact, revolution becomes a right.","If you are stone, be magnetic; if a plant, be sensitive; but if you are human be love.","The wise man does not grow old, but ripens.","If you look in the eyes of the young, you see flame. If you look in the eyes of the old, you see light.","To put everything in balance is good, to put everything in harmony is better.","The learned man knows that he is ignorant.","To die is nothing; but it is terrible not to live.","If I speak, I am condemned. If I stay silent, I am damned!","Toleration is the best religion.","If you want to civilize a man, begin with his grandmother."]

function randomQuote() {document.getElementById('quote').innerHTML = "'"+ quotes[randomizer(quotes.length)]+"'"
}