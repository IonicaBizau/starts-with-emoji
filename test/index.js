const tester = require("tester")
    , startsWithEmoji = require("../lib")
    ;

tester.describe("run the tests", test => {
    test.it("detect when starts with emoji", () => {
        test.expect(startsWithEmoji(":house: sweet home")).toBe(true);
        test.expect(startsWithEmoji("What a nice :gift:!")).toBe(false);
    });
});
