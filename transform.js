const staticModule = require('static-module')
const resolve      = require('resolve')
const path         = require('path')
const md5ify       = require('./')

module.exports = transform

function transform(filename) {
  const dirname = path.dirname(filename)

  const sm = staticModule({
    md5ify: function(file) {
      return JSON.stringify(md5ify(file))
    }
  }, {
    vars: {
      __filename: filename,
      __dirname: dirname,
      require: {
        resolve: function(target) {
          return resolve.sync(target, { basedir: dirname })
        }
      }
    },
    varModules: {
      path: path
    }
  })

  return sm
}
