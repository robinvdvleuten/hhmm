module.exports = function (str) {
  const parts = str.split(':')
  let ms = 0
  let mod = 3600000

  while (parts.length > 0) {
    ms += mod * parseInt(parts.shift(), 10)
    mod /= 60
  }

  return ms
}
