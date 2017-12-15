import parseFromXian from '../../src/xian-parser'

describe('the X-ian Parser', () => {
    it('capitalises the input', () => {
        expect(parseFromXian('Astronauta'))
            .to.eql(['ASTRONAUTA']) // #Diversity
    })

    it('removes the plural character', () => {
        expect(parseFromXian('PILOTOX'))
            .to.eql(['PILOTO']) // #Diversity
    })

    it('inverts the order of the words', () => {
        expect(parseFromXian('PILOTO LOCO'))
            .to.eql(['LOCO', 'PILOTO']) // #Diversity
    })
})
