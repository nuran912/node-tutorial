/*
npm(node package manager)
npm -i <packageName>    :to install local dependencies to be used in a particular project
npm install -g <packageName>    :to install global depencies to use in any project

package.json    :stores important info about project
to install package.json;
    manually create package.json in the root along with required properties
    npm init    (step by step, automatic method.press enter to skip)
    npm init -y (installs everything default)
*/

//external modules(packages/dependencies) have to be installed before using them
//external dependency eg: lodash, bootstrap

//lodash is a utility library containing various methods
const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)   //flattenDeep is a method in lodash
console.group(newItems) //output: [1, 2, 3, 4]




