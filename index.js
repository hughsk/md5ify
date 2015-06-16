const crypto = require('crypto')
const fs     = require('fs')

module.exports = md5ify

function md5ify(file) {
  return crypto.createHash('md5')
    .update(fs.readFileSync(file))
    .digest('hex')
}
