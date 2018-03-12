class SmartCalculator {

    constructor(initialValue) {
        // your implementation
        this.valueStr = initialValue + "";
    }

    valueOf() {
          console.log(this.valueStr);

        return eval(this.valueStr);
    }

    add(number) {
        // your implementation
        this.valueStr += " + " + number;
        return this;
    }

    subtract(number) {
        // your implementation
        this.valueStr += " - " + number;
        return this;
    }

    multiply(number) {
        // your implementation
        this.valueStr += " * " + number;
        return this;
    }

    devide(number) {
        // your implementation
        this.valueStr += " / " + number;
        return this;
    }

    pow(number) {
        // your implementation
        this.valueStr += " ** "+number;
        return this;
    }


}

module.exports = SmartCalculator;
