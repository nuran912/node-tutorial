//Modules

//require('./ ') lets you import the data from the specified module(file)
const names = require('./4-names')  //import required names through "module.exports = {john,peter}" 
const func = require('./5-utils')   //import required function through "module.exports = sayHi"

func('Nuran');
func(names.john);
func(names.peter);

const alt = require('./6-alternative')
console.log(alt)
console.log(alt.items[0])
console.log(alt.singlePerson.name)

//the imported code is automatically invoked when require is called
require('./7-mindGrenade')
 