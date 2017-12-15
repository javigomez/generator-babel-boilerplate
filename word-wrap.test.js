const wordWrap = require('./word-wrap.js')

describe('word wrap', () => {
    it('do not cut words smaller than the wrap limit', () => {
        expect(wordWrap('abc', 5)).toEqual('abc')
    })
    it('cuts words based on a wrap limit', () => {
        expect(wordWrap('holala', 2)).toEqual('ho\nla\nla')
    })
    it('cuts sentences in words based on a wrap limit', () => {
        expect(wordWrap('hola mundo', 7)).toEqual('hola\nmundo')
    })
})