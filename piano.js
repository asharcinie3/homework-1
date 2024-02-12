function toggleMenu() {
    var mobileLinks = document.querySelector('.links.mobile');
    mobileLinks.style.display = (mobileLinks.style.display === 'flex') ? 'none' : 'flex';
}

document.addEventListener('DOMContentLoaded', function() {
    const pianoKeysContainer = document.querySelector('.piano-keys');
    const allKeyTexts = document.querySelectorAll('.key-text');

    pianoKeysContainer.addEventListener('mouseover', function(event) {
        allKeyTexts.forEach(function(text) {
            text.style.display = 'block';
        });

        const dataKey = event.target.dataset.key;
        if (dataKey) {
            const keyText = event.target.querySelector('.key-text');
            if (keyText) {
                keyText.style.display = 'block';
            }
        }
    });

    pianoKeysContainer.addEventListener('mouseout', function() {
        allKeyTexts.forEach(function(text) {
            text.style.display = 'none';
        });
    });

    const sound = {
        "65": "http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav",
        "87": "http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav",
        "83": "http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav",
        "69": "http://carolinegabriel.com/demo/js-keyboard/sounds/043.wav",
        "68": "http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav",
        "70": "http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav",
        "84": "http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav",
        "71": "http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav",
        "89": "http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav",
        "72": "http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav",
        "85": "http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav",
        "74": "http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav",
        "75": "http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav",
        "79": "http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav",
        "76": "http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav",
        "80": "http://carolinegabriel.com/demo/js-keyboard/sounds/055.wav",
        "186": "http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav"
    };

    document.addEventListener('keydown', function(event) {
        const keyPressed = event.key.toLowerCase(); // Convert to lowercase to match the keys
        const soundURL = sound[keyPressed];

        if (soundURL) {
            const audio = new Audio(soundURL);
            audio.play();
        }

        const pressedKey = document.querySelector(`.piano-key[data-key="${keyPressed}"]`);
        if (pressedKey) {
            pressedKey.classList.add('key-pressed');
            setTimeout(function() {
                pressedKey.classList.remove('key-pressed');
            }, 200);
        }
    });
});