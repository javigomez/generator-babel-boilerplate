function passwordIsNotEmpty(password) {
  return password !== ''
}

function passwordHasMinimumLenght(password) {
  return password.length >= 6
}

function checkPassword(password) {
  if (
    passwordIsNotEmpty(password)
    && passwordHasMinimumLenght(password))
    return true
  else
    return false
}

module.exports = {
  passwordIsNotEmpty: passwordHasMinimumLenght,
  passwordHasMinimumLenght: passwordHasMinimumLenght,
  checkPassword: checkPassword
}
