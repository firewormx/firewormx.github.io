export default class NameVariations {
    /** @param {string} name */
    constructor(name) {
      this.name = name;
    }

    getNumberOfChars() {
        // return the number of characters in: name
     return this.name.length;
    }

    getLower() {
        // return name all in lower case (example: "ABC" becomes "abc")
        return this.name.toLowerCase();

    }

    getUpper() {
       // return name all in upper case (example: "abc" becomes "ABC")
       return this.name.toUpperCase();

    }
}