class Helper {
    static isNull(variableToTest) {
        return variableToTest === null;
    }

    static isObject(variableToTest) {
        return typeof variableToTest === "object" && !Helper.isNull(variableToTest) && !Array.isArray(variableToTest);
    }

    static propertyIsDefined(obj, prop) {
        if (Helper.isObject(obj)) {
            if (prop === undefined) {
                throw new Error("Property name is undefined.");
            }
            return obj[prop] !== undefined;
        }
        throw new Error("The given variable is not an object.");
    }
}

module.exports = Helper;