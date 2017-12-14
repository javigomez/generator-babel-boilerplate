import typeformTraining from '../../src/typeform-training';

describe('typeformTraining', () => {
  describe('tests against the DOM', () => {
    it('renders', () => {
      const newDiv = document.createElement('div');
      const newContent = document.createTextNode('Hello world');
      newDiv.appendChild(newContent);
      const body = document.getElementsByTagName('body')[0];
      body.appendChild(newDiv);
      expect(body.innerHTML).to.eql('foo');
    });
  });

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
  });
});
