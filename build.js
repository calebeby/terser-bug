const terser = require('terser')
const fs = require('fs')

const options = {
  ecma: 8,
  module: true,
  compress: {
    passes: 15,
    unsafe: true,
    pure_getters: true,
    join_vars: false,
    hoist_props: true,
  },
  mangle: false,
  output: { beautify: true },
}

console.log(terser.minify(fs.readFileSync('./input.js', 'utf8'), options).code)
