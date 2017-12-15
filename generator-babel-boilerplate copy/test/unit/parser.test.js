import buildParser from '../../src/parser'
import parseFromCastilian from '../../src/castilian-parser'
import parseFromXian from '../../src/xian-parser'

describe('the Parser', () => {
    var parserFactory = function () {
        return buildParser(parseFromCastilian, parseFromXian)
    }

    it('parses in Castilian', () => {
        var parser = parserFactory()
        expect(parser.parse('Olas k asés chicx', 'ES'))
            .to.eql(['OLA', 'K', 'ASE', 'CHICX']) // #Diversity
    })

    it('parses in Xian', () => {
        var parser = parserFactory()
        expect(parser.parse('Olas k asés chicx', 'XX'))
            .to.eql(['CHIC', 'ASÉS', 'K', 'OLAS']) // #Diversity
    })
})