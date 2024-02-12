function toggleMenu() {
    var mobileLinks = document.querySelector('.links.mobile');
    mobileLinks.style.display = (mobileLinks.style.display === 'block') ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    const pianoKeysContainer = document.querySelector('.piano-keys');
    let sequence = ''; // Track the sequence of keys typed

    // Object to store the sound URLs for each key
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

    // Function to play sound and animate pressed key
    function playSoundAndAnimate(keyPressed) {
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
    }

    // Event listener for keydown events
    document.addEventListener('keydown', function(event) {
        const keyPressed = event.key.toLowerCase();
        const soundURL = sound[keyPressed];

        // Add key to the sequence
        sequence += keyPressed;

        // Check if the sequence matches the trigger sequence
        if (sequence === 'weseeyou') {
            // Fade out the piano
            const piano = document.querySelector('.piano');
            piano.style.transition = 'opacity 2s';
            piano.style.opacity = 0;

            // Show the image of the Great Old One
            const greatOne = document.querySelector('.great-one');
            greatOne.style.display = 'block';

            // Play creepy audio
            const creepyAudio = new Audio('https://orangefreesounds.com/wp-content/uploads/2020/09/Creepy-piano-sound-effect.mp3?_=1');
            creepyAudio.play();

            // Disable further key presses
            document.removeEventListener('keydown', handleKeyPress);
        }

        // Play sound and animate pressed key
        playSoundAndAnimate(keyPressed);
    });

    // Event listener for mouseover events
    pianoKeysContainer.addEventListener('mouseover', function(event) {
        const allKeyTexts = document.querySelectorAll('.key-text');
        allKeyTexts.forEach(function(text) {
            text.style.display = 'none';
        });

        const dataKey = event.target.dataset.key;
        if (dataKey) {
            const keyText = event.target.querySelector('.key-text');
            if (keyText) {
                keyText.style.display = 'block';
            }
        }
    });

    // Event listener for click events
    pianoKeysContainer.addEventListener('click', function(event) {
        const dataKey = event.target.dataset.key;
        if (dataKey) {
            playSoundAndAnimate(dataKey);
        }
    });
});