export default function buildParser (parseFromCastilian, parseFromXian) {
    function parse (input, languageCode) {
        switch (languageCode) {
            case 'XX':
                return parseFromXian(input)
            default:
                return parseFromCastilian(input)
        }
    }
    
    return {
        parse
    }
}