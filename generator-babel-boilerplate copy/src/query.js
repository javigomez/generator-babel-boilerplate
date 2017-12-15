function query (input) {
    const self = {}

    self.normalise = function () {
        return query(input.normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
    }
    self.removePlural = function () {
        var lastCharIndex = input.length - 1
        
        var result = input[lastCharIndex] === 'S'
            ? input.substr(0, lastCharIndex)
            : input

        return query(result)
    }
    
    return self
}

export default query

