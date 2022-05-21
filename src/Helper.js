class Helper {
    static isNull(variableToTest) {
        return variableToTest === null;
    }

    static isDefined(variableToTest) {
        return variableToTest !== undefined;
    }
}

module.exports = Helper;