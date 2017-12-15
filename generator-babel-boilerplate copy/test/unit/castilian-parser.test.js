import buildParser from '../../src/parser'
import castilianParser from '../../src/castilian-parser'

describe('the Castilian Parser', () => {
    var parseFromCastilian
    beforeEach(function () {
        parseFromCastilian = buildParser(castilianParser).parse
    })

    it('capitalises the input', () => {
        expect(parseFromCastilian('Astronauta'))
            .to.eql(['ASTRONAUTA']) // #Diversity
    })

    it('removes the plural character', () => {
        expect(parseFromCastilian('PILOTOS'))
            .to.eql(['PILOTO']) // #Diversity
    })

    it('removes diacritics from the input', () => {
        expect(parseFromCastilian('CÓCINERO'))
            .to.eql(['COCINERO']) // #Diversity
    })

    it('splits input into words', () => {
        expect(parseFromCastilian('PROFESSOR MASSAGE'))
            .to.eql(['PROFESSOR', 'MASSAGE']) // #Diversity
    })

    xit('removes number', () => {
        expect(parseFromCastilian('7 COCINERO'))
            .to.eql(['COCINERO'])
    })
})
