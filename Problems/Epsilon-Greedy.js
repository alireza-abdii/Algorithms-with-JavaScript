

class EpsilonGreedy {
    constructor(numArms, epsilon) {
        this.numArms = numArms;
        this.epsilon = epsilon;
        this.counts = Array(numArms).fill(0);
        this.values = Array(numArms).fill(0);
    }

    selectArm() {
        if (Math.random() < this.epsilon) {
            return Math.floor(Math.random() * this.numArms);
        } else {
            return this.values.indexOf(Math.max(...this.values));
        }
    }

    update(arm, reward) {
        this.counts[arm]++;

        const n = this.counts[arm];
        const value = this.values[arm];

        this.values[arm] = value + (reward - value) / n;
    }
}

