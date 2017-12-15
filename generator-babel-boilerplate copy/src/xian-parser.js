function parseWord (input) {
    var upperCasedInput = input.toUpperCase()
    var removedPluralCharacter = removePluralCharacter(upperCasedInput)
    
    return removedPluralCharacter
}

function removePluralCharacter(input) {
    var lastCharIndex = input.length - 1
    
    return input[lastCharIndex] === 'X'
        ? input.substr(0, lastCharIndex)
        : input
}

export default function parse (input) {
    return input
        .split(' ')
        .map(parseWord)
        .reverse()
    
}