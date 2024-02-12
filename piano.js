function toggleMenu() {
    var mobileLinks = document.querySelector('.links.mobile');
    mobileLinks.style.display = (mobileLinks.style.display === 'block') ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    const pianoKeysContainer = document.querySelector('.piano-keys');

    pianoKeysContainer.addEventListener('mouseover', function(event) {
        const allKeyTexts = document.querySelectorAll('.key-text');
        allKeyTexts.forEach(function(text) {
            text.style.display = 'block';
        });

        const dataKey = event.target.dataset.key;
        if (dataKey) {
            const pressedKey = document.querySelector(`.piano-key[data-key="${dataKey}"]`);
            if (pressedKey) {
                pressedKey.classList.add('key-pressed');
                setTimeout(function() {
                    pressedKey.classList.remove('key-pressed');
                }, 200);
            }
        }
    });

    pianoKeysContainer.addEventListener('mouseout', function() {
        const allKeyTexts = document.querySelectorAll('.key-text');
        allKeyTexts.forEach(function(text) {
            text.style.display = 'none';
        });
    });

    const sound = {
        "a": "http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav",
        "w": "http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav",
        "s": "http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav",
        "e": "http://carolinegabriel.com/demo/js-keyboard/sounds/043.wav",
        "d": "http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav",
        "f": "http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav",
        "t": "http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav",
        "g": "http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav",
        "y": "http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav",
        "h": "http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav",
        "u": "http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav",
        "j": "http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav",
        "k": "http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav",
        "o": "http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav",
        "l": "http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav",
        "p": "http://carolinegabriel.com/demo/js-keyboard/sounds/055.wav",
        ";": "http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav"
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