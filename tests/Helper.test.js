const Helper = require("../src/Helper.js");
const nullValue = null, string = "Hello, world!", number = 1, obj = {}, arr = [];

/**
 * Helper.isNull()
 */
test("isNull(null) equals true", () => {
    expect(Helper.isNull(null)).toBe(true);
});
test("isNull(string) equals false", () => {
    expect(Helper.isNull(string)).toBe(false);
});
test("isNull(number) equals false", () => {
    expect(Helper.isNull(number)).toBe(false);
});
test("isNull(obj) equals false", () => {
    expect(Helper.isNull(obj)).toBe(false);
});

/**
 * Helper.isObject()
 */
test("isObject(null) equals false", () => {
    expect(Helper.isObject(null)).toBe(false);
});
test("isObject(object) equals true", () => {
    expect(Helper.isObject(obj)).toBe(true);
});
test("isObject(array) equals false", () => {
    expect(Helper.isObject(arr)).toBe(false);
});
test("isObject(string) equals false", () => {
    expect(Helper.isObject(string)).toBe(false);
});