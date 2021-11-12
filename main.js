//list of possible main messages
const m1 = "If you love someone, set them free. If they come back they're yours; if they don't they never were. -Richard Bach"
const m2 = "To be free and to live a free life - that is the most beautiful thing there is. -Miguel Indurain"
const m3 = `Language is a process of free creation; its laws and principles are fixed, but the manner in which the principles 
of generation are used is free and infinitely varied. Even the interpretation and use of words involves a process of 
free creation. -Noam Chomsky`
const m4 = "There is no must in art because art is free. -Wassily Kandinsky"
const m5 = "If we don't believe in freedom of expression for people we despise, we don't believe in it at all. -Noam Chomsky"
const m6 = "Every renaissance comes to the world with a cry, the cry of the human spirit to be free. Anne Sullivan"
const m7 = "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller"
const m8 = "Perfection is not attainable, but if we chase perfection we can catch excellence. -Vince Lombardi"
const m9 = "Keep your face always toward the sunshine - and shadows will fall behind you. -Walt Whitman"
const m10 = "No act of kindness, no matter how small, is ever wasted. -Aesop"

//array of message variables
const mArr = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10];

//list of possible greetings
const g1 = "Hello"
const g2 = "Greetings"
const g3 = "Welcome"
const g4 = "Good day"
const g5 = "Good to see you"

// array of greetings variables
const gArr = [g1, g2, g3, g4, g5];

//list of possible signoffs
const s1 = "Until next time"
const s2 = "Have a great day"
const s3 = "Thanks for stopping by"
const s4 = "See you soon"
const s5 = "Remember to be mindfull in the present moment"

//array of signoffs
const sArr = [s1, s2, s3, s4, s5];

//functions to produce random messages
function randM(){
    let i = Math.floor(Math.random() * mArr.length);
    return mArr[i];  
}

function randG(){
    let i = Math.floor(Math.random() * gArr.length);
    return gArr[i];  
}

function randS(){
    let i = Math.floor(Math.random() * sArr.length);
    return sArr[i];  
}
//Putting the final message together
const greeting = randG();
const mainM = randM();
const signoff = randS();
