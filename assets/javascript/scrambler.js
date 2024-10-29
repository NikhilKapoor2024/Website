/* constant lists of words and hints */
const words = [
    "test",
    "lego",
    "monster",
    "python",
    "water",
    "loathsome"
];
const hints = [
    "Literally easiest one in the word",
    "studded building blocks",
    "scary creature",
    "best coding language ever",
    "liquid",
    "giving rise to loathing"
];

// Initalizing word that displays
let displayWord = "";

/*
 * Function: scramble_letters(String: str)
 * Purpose: Scrambles a word
 */
function scramble_letters(str) {
    array_str = Array.from(str);
    for (let i = 0; i < array_str.length - 1; i++) {
        let j = Math.floor(Math.random() * array_str.length);
        let temp = array_str[i];
        array_str[i] = array_str[j];
        array_str[j] = temp;
    }

    return array_str.join(" ");
}

/*
 * Function: check()
 * Purpose: checks the input and displayWord for match
 */
function check() {
    let input = document.getElementById("input");
    let output = document.getElementById("output");

    if (input.value.toLocaleLowerCase() === displayWord.toLocaleLowerCase()) {
        output.innerHTML = "Result: Correct!";
    } else {
        output.innerHTML = "Result: Incorrect!";
    }
}

/*
 * Function: refresh()
 * Purpose: refreshes page to load a new word
 */
function refresh() {
    index = Math.floor(Math.random() * words.length);
    displayWord = words[index];
    displayHint = hints[index];
    scrambleWord = document.getElementById("scramble_word");
    scrambleWord.innerText = scramble_letters(displayWord).toUpperCase();
    let hint = document.getElementById("hint");
    hint.innerHTML = "<b>Hint:</b> " + displayHint;
    document.getElementById("output").innerText = "Result:";
}

// Function call when page loads for the first time
refresh();
