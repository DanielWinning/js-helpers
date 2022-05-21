const Helper = require("../src/Helper.js");
let string = "Hello, world!",
    number = 1,
    obj = {
        name: "Test"
    },
    arr = [];

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

/**
 * Helper.propertyIsDefined()
 */
test("propertyIsDefined(null) throws Error", () => {
    expect(() => {
        Helper.propertyIsDefined(null);
    }).toThrow();
});
test("propertyIsDefined() returns true when property is defined", () => {
    expect(Helper.propertyIsDefined(obj, "name")).toBe(true);
});
test("propertyIsDefined() returns false when property is not defined", () => {
    expect(Helper.propertyIsDefined(obj, "address")).toBe(false);
});
test("propertyIsDefined() throws error when property name is not provided",)