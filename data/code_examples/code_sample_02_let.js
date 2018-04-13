// Add padding zeros if n.length < minLength.
function pad(n, minLength, char){
    n = toNumber(n);
    return lpad(''+ n, minLength, char || '0');
}


function lpad(str, minLen, ch) {
    str = toString(str);
    ch = ch || ' ';

    return (str.length < minLen) ?
        repeat(ch, minLen - str.length) + str : str;
}


function toString(val){
    return val == null ? '' : val.toString();
}


// Repeat string n times
function repeat(str, n){
    let result = '';
    str = toString(str);
    n = toInt(n);
    
    if (n < 1) {
        return '';
    }

    while (n > 0) {
        if (n % 2) {
            result += str;
        }
        n = Math.floor(n / 2);
        str += str;
    }
    return result;
}


// "Convert" value into an 32-bit integer.
function toInt(val){
    // doesn't break the functionality
    return ~~val;
}


function toNumber(val){
    // numberic values should come first because of -0
    if (typeof val === 'number') return val;
    // we want all falsy values (besides -0) to return zero to avoid
    // headaches
    if (!val) return 0;
    if (typeof val === 'string') return parseFloat(val);
    // arrays are edge cases. `Number([4]) === 4`
    if (isArray(val)) return NaN;
    return Number(val);
}


let isArray = Array.isArray || function (val) {
    return isKind(val, 'Array');
};


function isKind(val, kind){
    return kindOf(val) === kind;
}


function kindOf(val) {
    return Object.prototype.toString.call(val).slice(8, -1);
}



let result_1 = pad(1, 5);      
let result_2 = pad(12, 5);     
let result_3 = pad(123, 5);
let result_4 = pad(1234, 5);
let result_5 = pad(12345, 5);
let result_6 = pad(12, 5, '_');


console.log(result_1); // "00001"
console.log(result_2); // "00012"
console.log(result_3); // "00123"
console.log(result_4); // "01234"
console.log(result_5); // "12345"
console.log(result_6); // "___12"