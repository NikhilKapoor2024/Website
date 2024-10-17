function randomNumber(max) {
    // generates random number between 0 and a max
    return Math.floor(Math.random() * max);
}

function randomName() {
    // randomly selects name from list
    let names = ['Nikhil', 'Bob', 'Joe', 'Stan', 'John'];
    let rng = randomNumber(names.length);
    return names[rng];
}

function colorChanger() {
    // randomly selects color to change text to
    let colors = [];
    colors[0] = 'red';
    colors[1] = 'green';
    colors[2] = 'blue';
    colors[3] = 'purple';
    let text = document.getElementById('demo_three');
    text.style.color = colors[randomColor(4)];
}
