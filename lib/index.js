'use strict'

module.exports = function (str) {
  var parts = str.split(':')
  var ms = 0
  var mod = 3600000

  while (parts.length > 0) {
    ms += mod * parseInt(parts.shift(), 10)
    mod /= 60
  }

  return ms
}
