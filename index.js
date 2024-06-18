
 function generate() {
    var quotes ={
        "dlgash" : '"i am dlgash i am a front end developer and i made this quotes"',
        "rojhat" : '"hey i am rojhat"',
        "ayman" : '"hey i am ayman working as a programmer"'
    }

    var authers = Object.keys(quotes);

    var auther = authers[Math.floor(Math.random() * authers.length)];

    var quote = quotes[auther];

    document.getElementById("quote").innerHTML = quote;

    document.getElementById("auther").innerHTML = auther;

 }