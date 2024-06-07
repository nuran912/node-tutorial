//local     -secret will only be used in 4-names
const secret = 'SUPER SECRET';
//share     -john,peter will be used anywhere in the app
const john = 'John';
const peter = 'Peter';

//module.exports allows you to share the mentioned data among files
module.exports = {john,peter}