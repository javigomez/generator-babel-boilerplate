const t = require('./index.js')

describe('checkPassword', () => {
  describe('given an empty password', () => {
    it('should return false', () => {
      const actual = t.passwordIsNotEmpty('f')
      expect(actual).toBeFalsy()
    })
  })

  describe('given a password', () => {
    describe(`it's shorter than 6 characters`, () => {
      it('should return false', () => {
        const actual = t.passwordHasMinimumLenght('hola')
        expect(actual).toBeFalsy()
      })
    })
  })
})
