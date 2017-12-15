const diacriticsVowelEquivalenceTable = {
    'Á': 'A',
    'É': 'E',
    'Í': 'I',
    'Ó': 'O',
    'Ú': 'U'
}

function normalise(input) {
    return input
        .split('')
        .map(letter => {
            return diacriticsVowelEquivalenceTable[letter]
                ? diacriticsVowelEquivalenceTable[letter]
                : letter
            }
        )
        .join('')
}

function removePluralCharacter(input) {
    var lastCharIndex = input.length - 1
    
    return input[lastCharIndex] === 'S'
        ? input.substr(0, lastCharIndex)
        : input
}

function parseWord (input) {
    return removePluralCharacter(normalise(input.toUpperCase()))
}

export default function parse (input) {
    return input
        .split(' ')
        .map(parseWord)
}
