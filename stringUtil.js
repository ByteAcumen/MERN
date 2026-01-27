function reverse(input){
    return input.split("").reverse().join("");
}
function countChars(input){
    return input.length;
}
function toUpper(input){
    return input.toUpperCase();
}

module.exports = { reverse, countChars, toUpper }