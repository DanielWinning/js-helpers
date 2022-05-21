class Helper {
    static isNull(variableToTest) {
        return variableToTest === null;
    }

    static isObject(variableToTest) {
        return typeof variableToTest === "object" && !Helper.isNull(variableToTest) && !Array.isArray(variableToTest);
    }

    /**
     *
     * @param obj
     * @param prop
     */
    static propertyIsDefined(obj, prop) {
        if (Helper.isObject(obj)) {
            return obj.prop !== undefined;
        }
        throw new Error("The given variable is not an object.");
    }
}

module.exports = Helper;