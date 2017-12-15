const calculate = require('./string-calculator.js')

describe('string calculator', () => {
    it('given an empty string, returns 0', () => {
        expect(calculate('')).toEqual(0)
    })

    it('given a string with a single number, returns the number', () => {
        expect(calculate('1')).toEqual(1)
    })

    it('sum numbers separated by commas', () => {
        expect(calculate('1,1,1')).toEqual(3)
    })

    it('sum numbers separated by commas or new line characters', () => {
        expect(calculate('1\n2,3')).toEqual(6)
    })

    it('sum numbers separated by specified delimiter', () => {
        expect(calculate('//;\n1;2;3')).toEqual(6)
    })
})
