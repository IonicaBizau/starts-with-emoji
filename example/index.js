const startsWithEmoji = require("../lib");

console.log(startsWithEmoji(":house: sweet home!"));
// => true

console.log(startsWithEmoji("What a nice :gift:!"));
// => false
