function talk(){
    
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";

    // Bob retorts 'Calm down, I know what I'm doing!' if you yell a question at him.
    if (user.includes("???")) {
        document.getElementById('chatLog').innerHTML = "Calm down, I know what I'm doing!" + "<br>";
    }
    // Bob answers 'Sure.' if you ask him a question.
    else if (user.includes('?')) {
            document.getElementById('chatLog').innerHTML = "Sure" + "<br>";
    }
    // Bob answers 'Whoa, chill out!' if you yell at him.
    else if (user.includes('!')) {
        document.getElementById('chatLog').innerHTML = "Whoa, chill out!" + "<br>";
    }
    // Bob says 'Fine. Be that way!' if you address him without actually saying anything.
    else if (!user) {
        document.getElementById('chatLog').innerHTML = "Fine. Be that way!" + "<br>";
    }
    // Bob answers 'Whatever.' to anything else.
    else {
        document.getElementById('chatLog').innerHTML = "Whatever";
    }
}