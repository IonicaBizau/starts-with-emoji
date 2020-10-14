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
 * @return {undefined|String} If the string starts with `:emoji:` return `:emoji:` else undefined
 */
module.exports = function startsWithEmoji(s) {
    REGEX_EMOJI.lastIndex = 0;

    var isEmojiAtStart = REGEX_EMOJI.test(s)

    // if emoji is not at the start return undefined
    return isEmojiAtStart ? s.match(regexEmoji())[0] : undefined
};

/**
 * regex
 * Starts with emoji regex.
 *
 * @name regex
 * @function
 * @return {RegExp} The regex value.
 */
module.exports.regex = function () {
    REGEX_EMOJI.lastIndex = 0;
    return REGEX_EMOJI;
};