const Helper = require("../src/Helper.js");
const nullValue = null, string = "Hello, world!", number = 1;

test("isNull($nullValue) equals true", () => {
    expect(Helper.isNull(null)).toBe(true);
});

test("isNull($string) equals false", () => {
    expect(Helper.isNull(string)).toBe(false);
});

test("isNull($number) equals false", () => {
    expect(Helper.isNull(number)).toBe(false);
});