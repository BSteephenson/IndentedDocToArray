fs = require('fs')

parse = require('./main.js')

fileContents = fs.readFileSync('test_file.txt', {encoding : 'utf8'})


parsed = parse(fileContents)

console.log(JSON.stringify(parsed))