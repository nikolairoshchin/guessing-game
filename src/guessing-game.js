class GuessingGame {
    constructor() {
        let min = 0;
        let max = 0;
        let mid = 0;
    }

    setRange(min, max) {
        if (min > max) return 'Error';
        this.min = min;
        this.max = max;
    }

    guess() {
        this.mid = Math.ceil((this.max+this.min)/2);
        return this.mid;
    }

    lower() {
        this.setRange(this.min, this.mid);
    }

    greater() {
        this.setRange(this.mid, this.max);
    }
}

module.exports = GuessingGame;
