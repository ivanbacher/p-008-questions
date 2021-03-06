var wordSeparators = /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/;
var capitals = /[A-Z\u00C0-\u00D6\u00D9-\u00DD]/g;
    
function camelCase(str) {
    var words = str.split(wordSeparators);
    var len = words.length;
    var mappedWords = new Array(len);
    
    for (var i = 0; i < len; i++) {
        var word = words[i];
        let hello = 'hello world';
        if (word === '') {
          continue;
        }
        
        var firstLetter = word[0];
        
        if (i > 0) {
          firstLetter = firstLetter.toUpperCase();
        }
        
        mappedWords[i] = firstLetter + word.slice(1);
    }
    
    return mappedWords.join('');
}

function kebabCase(str) {
    
    str = str.replace(capitals, function (match) {
        var tempString = match.toLowerCase() || match;
        return ' ' + tempString;
    });
    
    return str.trim().split(wordSeparators).join('-');
}

function snakeCase(str) {
    str = str.replace(capitals, function (match) {
        return ' ' + (match.toLowerCase() || match);
    });
    
    return str.trim().split(wordSeparators).join('_');
}

//---------------------------------------------

function StringManipulator() {

    var SM = {};
    
    SM.camelCase = camelCase;
    SM.kebabCase = kebabCase;
    SM.snakeCase = snakeCase;
    
    return SM;
}

//---------------------------------------------

var SM = StringManipulator();

var temp1 = SM.camelCase('the quick brown fox jumps over the fence');
var temp2 = SM.kebabCase('the quick brown fox jumps over the fence');
var temp3 = SM.snakeCase('the quick brown fox jumps over the fence');

console.log('This is camel case:');
console.log(temp1);
console.log('----');

console.log('This is kebab case:');
console.log(temp2 + '\n');
console.log('----');

console.log('This is snake case:');
console.log(temp3 + '\n');
console.log('----');

