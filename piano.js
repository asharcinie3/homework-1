function toggleMenu() {
    var mobileLinks = document.querySelector('.links.mobile');
    mobileLinks.style.display = (mobileLinks.style.display === 'block') ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    const pianoKeysContainer = document.querySelector('.piano-keys');

    pianoKeysContainer.addEventListener('mouseover', function() {
        const allKeyTexts = document.querySelectorAll('.key-text');
        allKeyTexts.forEach(function(text) {
            text.style.display = 'block';
        });
    });

    pianoKeysContainer.addEventListener('mouseout', function() {
        const allKeyTexts = document.querySelectorAll('.key-text');
        allKeyTexts.forEach(function(text) {
            text.style.display = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sound = {
        65:"http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav",
        87:"http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav",
        83:"http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav",
        69:"http://carolinegabriel.com/demo/js-keyboard/sounds/043.wav",
        68:"http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav",
        70:"http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav",
        84:"http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav",
        71:"http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav",
        89:"http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav",
        72:"http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav",
        85:"http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav",
        74:"http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav",
        75:"http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav",
        79:"http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav",
        76:"http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav",
        80:"http://carolinegabriel.com/demo/js-keyboard/sounds/055.wav",
        186:"http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav"
    };

    document.addEventListener('keydown', function(event) {
        const keyPressed = event.keyCode;
        const soundURL = sound[keyPressed];

        // Play sound if available
        if (soundURL) {
            const audio = new Audio(soundURL);
            audio.play();
        }

        // Get the corresponding HTML element for the pressed key
        const pressedKey = document.querySelector(`.piano-key[data-key="${keyPressed}"]`);

        // Check if there is a corresponding HTML element
        if (pressedKey) {
            // Add a class to indicate that the key is pressed
            pressedKey.classList.add('key-pressed');

            // Remove the class after a short delay to revert the style
            setTimeout(function() {
                pressedKey.classList.remove('key-pressed');
            }, 200);
        }
    });
});