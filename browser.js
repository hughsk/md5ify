module.exports = function() {
  throw new Error(
    'md5ify is designed to be executed at build time in the browser. Make sure you have included md5ify/transform in your list of browserify transforms!'
  )
}
