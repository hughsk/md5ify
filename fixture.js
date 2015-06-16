const md5ify = require('md5ify')
const Path   = require('path')

console.log(md5ify(__dirname + '/browser.js'))
console.log(md5ify(require.resolve('./fixture')))
console.log(md5ify(Path.join(__dirname, 'index.js')))
