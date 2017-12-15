function calculate(expression) {
    var delimiters = getDelimiters(expression)    
    return sum(parseNumbersFrom(expression, delimiters))
}

module.exports = calculate

const isSpecifyingDelimiter = expression => expression.substring(0,2) == '//'

const removeCustomDelimiterSpecification = expression => expression.substring(4)

const parseNumbersUsingDelimiters = (expression, delimiters) => {   
    regex = new RegExp(`(${delimiters.join('|')})`, 'g')
    return expression.replace(regex, ',').split(',')
}

const parseNumbersFrom = (expression, delimiters) => {
    const expressionWithDelimiters = isSpecifyingDelimiter(expression)
        ? removeCustomDelimiterSpecification(expression)
        : expression
    return parseNumbersUsingDelimiters(expressionWithDelimiters, delimiters)   
}

const getDelimiters = expression => {
    const delimiters = [',', '\n']
    return isSpecifyingDelimiter(expression)
        ? [...delimiters, ...expression.substring(2,3)]
        : delimiters
}

const sum = numbers => numbers.reduce((acc, num) => acc + Number(num), 0)


