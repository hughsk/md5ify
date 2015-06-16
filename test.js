const browserify = require('browserify')
const test       = require('tape')
const vm         = require('vm')
const md5ify     = require('./')

test('md5ify transform', function(t) {
  browserify('./fixture')
    .transform('./transform')
    .bundle(function(err, bundle) {
      if (err) return t.fail(err.message || err)

      t.plan(3)

      var count  = 0
      var hashes = [
        require.resolve('./browser'),
        require.resolve('./fixture'),
        require.resolve('./index')
      ].map(md5ify)


      vm.runInNewContext(bundle, {
        require: function() {},
        console: {
          log: function(content) {
            t.equal(content, hashes[count++])
          }
        }
      })
    })
})
