const tester = require("tester")
    , startsWithEmoji = require("../lib")
    ;

tester.describe("run the tests", test => {
    test.it("detect when starts with emoji", () => {

        test.expect(startsWithEmoji(":house: sweet home")).toBe(':house:');
        test.expect(startsWithEmoji("What a nice :gift:!")).toBe(undefined);
        test.expect(startsWithEmoji(":+1: foo")).toBe(':+1:');
        test.expect(startsWithEmoji("hello world")).toBe(undefined);
    });
});
