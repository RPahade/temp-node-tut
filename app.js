// const names = require('./4-names')
// console.log(names);

// const names = require('./4-names')
// const sayHi = require('./5-utils')
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)

// const names = require('./4-names')
// const sayHi = require('./5-utils')
// const data = require('./6-alternative-flavour')
// console.log(data);
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)

//require('./7-mind-grenade.js')

//const { log } = require('console')

//npm-global command, comes with node
//npm --version

//local dependency-use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm i -g <packageName>

//package.json - manifest file (stores important info about project/package)
//manual approach (create package.json in the root , create properties etc)
//npm init (step by step, press enter to skip)
//npm init --y (everything default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);



