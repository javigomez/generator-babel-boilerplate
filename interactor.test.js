const {button, interactor, textArea, wrap} = require('./interactor.js')

describe("the interactor", () => {
    xit("shows the wrapped text in the text area", () => {
        var aButton = button('button1');
        var aTextArea = textArea('textarea1');
        var anInteractor = interactor(wrap, aButton, aTextArea);

        anInteractor.doWrap("hola", 2);

        expect(document.findElementById('textarea1')[0]
            .innerHTML).toEqual('ho\nla');
    });
    it("shows the wrapped text in the text area", () => {
        var aButton = button('button1');
        var aTextArea = textArea('textarea1');
        var wasTextShown = false;
        var shownText = null;
        aTextArea.show = function (text) {
            wasTextShown = true;
            shownText = text;
        };  // Spy 
        var anInteractor = interactor(wrap, aButton, aTextArea);

        anInteractor.doWrap("hola", 2);

        expect(wasTextShown).toBeTruthy();
        expect(shownText).toEqual('ho\nla');
    });
    it("shows the wrapped text in the text area", () => {
        var aButton = button('button1');
        var aTextArea = textArea('textarea1');
        var wasTextShown = false;
        var shownText = null;
        aTextArea.show = function (text) {
            wasTextShown = true;
            shownText = text;
        };  // Spy function
        var stubWrap = function () {
            return 'foo';
        }; // Stub function 
        var anInteractor = interactor(stubWrap, aButton, aTextArea);

        anInteractor.doWrap("foo", 7);

        expect(wasTextShown).toBeTruthy();
        expect(shownText).toEqual('foo');
    });
    it("shows the wrapped text in the text area", () => {
        var aButton = button('button1');
        var aTextArea = textArea('textarea1');
        var wasTextShown = false;
        var shownText = null;
        aTextArea.show = function (text) {
            wasTextShown = true;
            shownText = text;
        };  // Spy function
        var stubWrap = function () {
            return 'foo';
        }; // Stub function 
        var anInteractor = interactor(stubWrap, aButton, aTextArea);

        aButton.click()

        expect(wasTextShown).toBeTruthy();
        expect(shownText).toEqual('foo');
    });
});

describe("the word wrapper ", function () {
    it("wraps words", function () {
        expect(wrap("hola", 7)).toEqual("hola");
        expect(wrap("hola", 2)).toEqual("ho\nla");
        expect(wrap("ohlala", 2)).toEqual("oh\nla\nla");
    });

















    /*  it("wraps a single word", function(){
          expect(wrap("word", 2)).eql("wo\nrd");
          expect(wrap("word", 3)).eql("wor\nd");
      });
    
      it("doesnt have to wrap when length is too short", function(){
          expect(wrap("word", 7)).eql("word");
      });
    
      it("wraps long word into several lines", function(){
          expect(wrap("abcdefghi", 3)).eql("abc\ndef\nghi");
      });
    
      describe("wraps words breaking lines at spaces", function(){
          it("exactly at the end of line", function(){
              expect(wrap("word word", 5)).eql("word\nword");
          });
          it("after the end of line", function(){
              expect(wrap("word word", 4)).eql("word\nword");
          });
          it("before the end of line", function(){
              expect(wrap("wo word", 5)).eql("wo\nword");
          });
          // TODO next test with more than one blank in same line
    
      });
    
    */
});