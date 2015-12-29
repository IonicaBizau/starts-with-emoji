const regexEmoji = require("regex-emoji")
    , regexParser = require("regex-parser")
    ;

const REGEX_EMOJI = regexParser("/^" + regexEmoji().toString().substring(1));

/**
 * startsWithEmoji
 * Checks if a string starts with emoji.
 *
 * @name startsWithEmoji
 * @function
 * @param {String} s The input string.
 * @return {Boolean} `true`, if the string starts with `:emoji:` snippet or `false` otherwise.
 */
module.exports = function startsWithEmoji(s) {
    return REGEX_EMOJI.test(s);
};
