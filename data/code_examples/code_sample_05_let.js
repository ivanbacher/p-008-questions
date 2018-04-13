// Decode query string into an object of keys => vals
function decode(queryStr, shouldTypecast) {
    let queryArr = (queryStr || '').replace('?', '').split('&'),
        reg = /([^=]+)=(.+)/,
        i = -1,
        obj = {},
        equalIndex, cur, pValue, pName;

    while ((cur = queryArr[++i])) {
        equalIndex = cur.indexOf('=');
        pName = cur.substring(0, equalIndex);
        pValue = decodeURIComponent(cur.substring(equalIndex + 1));
        if (shouldTypecast !== false) {
            pValue = typecast(pValue);
        }
        if (hasOwn(obj, pName)){
            if(isArray(obj[pName])){
                obj[pName].push(pValue);
            } else {
                obj[pName] = [obj[pName], pValue];
            }
        } else {
            obj[pName] = pValue;
       }
    }
    return obj;
}


function typecast(val) {

    let UNDEF;

    /**
     * Parses string and convert it into a native value.
     */
    function calc() {
        let r;
        if ( val === null || val === 'null' ) {
            r = null;
        } else if ( val === 'true' ) {
            r = true;
        } else if ( val === 'false' ) {
            r = false;
        } else if ( val === UNDEF || val === 'undefined' ) {
            r = UNDEF;
        } else if ( val === '' || isNaN(val) ) {
            //isNaN('') returns false
            r = val;
        } else {
            //parseFloat(null || '') returns NaN
            r = parseFloat(val);
        }
        return r;
    }

    return calc();
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

function hasOwn(obj, prop){
    return Object.prototype.hasOwnProperty.call(obj, prop);
}


let query = '?foo=bar&lorem=123';
let result_1 = decode(query);        
let result_2 = decode(query, false);

console.log(result_1); // {foo: "bar", lorem: 123}
console.log(result_2); // {foo: "bar", lorem: "123"}