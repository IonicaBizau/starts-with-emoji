const startsWithEmoji = require("../lib");

console.log(startsWithEmoji(":house: sweet home!"));
// => { startsWithEmoji: true, emoji: ':house:' }

console.log(startsWithEmoji("What a nice :gift:!"));
// => { startsWithEmoji: false, emoji: undefined }
