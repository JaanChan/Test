var translationData = {
        'A': '9',
        'B': '3',
        'C': ')',
        'D': '#',
        'E': '5',
        'F': '/',
        'G': '*',
        'H': 'q',
        'I': ';',
        'J': ':',
        'K': '"',
        'L': '+',
        'M': '_',
        'N': 'o',
        'O': '!',
        'P': '-',
        'Q': '¥',
        'R': '¢',
        'S': '~',
        'T': '€',
        'U': '×',
        'V': '6',
        'W': '^',
        'X': '§',
        'Y': '∆',
        'Z': '✓'
    };

    // Reverse translation data
    var reverseTranslationData = {};
    for (var key in translationData) {
        if (translationData.hasOwnProperty(key)) {
            reverseTranslationData[translationData[key]] = key;
        }
    }

    // Translate function
    function translate(text) {
        var translatedText = '';
        for (var i = 0; i < text.length; i++) {
            var char = text.charAt(i).toUpperCase();
            translatedText += translationData[char] || char;
        }
        return translatedText;
    }

    // Reverse translate function
    function reverseTranslate(text) {
        var reversedText = '';
        for (var i = 0; i < text.length; i++) {
            var char = text.charAt(i);
            reversedText += reverseTranslationData[char] || char;
        }
        return reversedText;
    }

    // Translate button click event
    document.getElementById('translate-btn').addEventListener('click', function() {
        var inputText = document.getElementById('input-text').value;
        var outputText = translate(inputText);
        document.getElementById('output-text').value = outputText;
    });

    // Reverse button click event
    document.getElementById('reverse-btn').addEventListener('click', function() {
        var outputText = document.getElementById('output-text').value;
        var inputText = reverseTranslate(outputText);
        document.getElementById('input-text').value = inputText;
    });

    // Copy button click event
    document.getElementById('copy-btn').addEventListener('click', function() {
        var outputText = document.getElementById('output-text');
        outputText.select();
        document.execCommand('copy');
        alert('Copied to clipboard');
    });
