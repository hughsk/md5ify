# md5ify
![](http://img.shields.io/badge/stability-stable-orange.svg?style=flat)
![](http://img.shields.io/npm/v/md5ify.svg?style=flat)
![](http://img.shields.io/npm/dm/md5ify.svg?style=flat)
![](http://img.shields.io/npm/l/md5ify.svg?style=flat)

Synchronously return the md5 hex hash of a file path through
either [Node](http://github.com/nodejs/node) or
[browserify](http://browserify.org).

Useful, for example, for keeping unique IDs of particular
files based on their contents in order to cache external
resources better.

## Usage

[![NPM](https://nodei.co/npm/md5ify.png)](https://nodei.co/npm/md5ify/)

### `md5ify(filename)`

Returns a hash of the file's contents at `filename`.

``` javascript
const md5ify = require('md5ify')
const hash   = md5ify(__filename)

console.log(hash)
```

### `md5ify` with browserify

The above works in Node, but you can easily make it work
in browserify too by adding it as a transform. This works
similarly to [brfs](http://github.com/substack/brfs) and
determines the file's hash at build time. Simply include
it in your list of `browserify.transforms` in your project's
`package.json` file:

``` json
{
  "name": "my-package",
  "version": "1.0.0",
  "browserify": {
    "transforms": [
      "md5ify/transform"
    ]
  }
}
```

Alternatively, you may specify the transform through
browserify's command-line interface using the `-t` flag:

``` bash
browserify index.js -t md5ify/transform
```

Or through browserify's Node API using the `.transform`
method:

``` javascript
const browserify = require('browserify')
const bundler    = browserify('./index.js')

bundler.transform('md5ify/transform')
bundler.bundle(function(err, bundle) {
  if (err) throw err
  console.log(String(bundle))
})
```

## License

MIT. See [LICENSE.md](http://github.com/hughsk/md5ify/blob/master/LICENSE.md) for details.
