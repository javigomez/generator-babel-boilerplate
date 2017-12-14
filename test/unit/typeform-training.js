import typeformTraining from '../../src/typeform-training';


describe('typeformTraining', () => {
  require('simple-jsdom').install();

  describe('Greet function', () => {
    beforeEach(() => {
      spy(typeformTraining, 'greet');
      typeformTraining.greet();
    });

    it('should have been run once', () => {
      expect(typeformTraining.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(typeformTraining.greet).to.have.always.returned('hello');
    });

    it('foo', () => {
      console.log(document);
      expect(document).to.eql('foo');
    });
  });
});
