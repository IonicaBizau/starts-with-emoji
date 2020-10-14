const startsWithEmoji = require("../lib");

console.log(startsWithEmoji(":house: sweet home!"));
// => ':house:'

console.log(startsWithEmoji("What a nice :gift:!"));
// => undefined
