const tester = require("tester")
    , startsWithEmoji = require("../lib")
    ;

tester.describe("run the tests", test => {
    test.it("detect when starts with emoji", () => {

        // Not sure how to make test objects
        // test.expect(startsWithEmoji(":house: sweet home")).toBe({
        //     startsWithEmoji: true, emoji: ':house:'
        // });

        test.expect(startsWithEmoji(":house: sweet home").startsWithEmoji).toBe(true);
        test.expect(startsWithEmoji(":house: sweet home").emoji).toBe(':house:');
        test.expect(startsWithEmoji("What a nice :gift:!").startsWithEmoji).toBe(false);
        test.expect(startsWithEmoji("What a nice :gift:!").emoji).toBe(undefined);
        test.expect(startsWithEmoji(":+1: foo").startsWithEmoji).toBe(true);
        test.expect(startsWithEmoji(":+1: foo").emoji).toBe(':+1:');
    });
});
