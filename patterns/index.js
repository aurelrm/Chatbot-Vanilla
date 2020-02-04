const XRegExp = require('xregexp');

const  patternDict = [{
    pattern: '\\b(?<greeting>Hi|Hello|Hey)\\b',
    intent: 'Hello'
},{
    pattern:'\\b(bye|exit|quit)\\b',
    intent: 'Exit'
},
{
    pattern:'\\b(weather[ ]in[ ](?<city>[a-zA-Z]*(?:[ |-][a-zA-Z]*)))\\b',
    intent: 'Current Weather2'
},
{
    pattern:'\\b(weather[ ]in[ ](?<city>[a-zA-Z]*))\\b',
    intent: 'Current Weather'
},

{
    pattern:'\\b([Tt]ime[ ]in[ ](?<city>[a-zA-Z]*))\\b',
    intent: 'time'
}
];
module.exports = patternDict;
