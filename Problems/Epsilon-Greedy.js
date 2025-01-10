

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

const numArms = 3;
const epsilon = 0.1;
const steps = 100;
const bandit = new EpsilonGreedy(numArms, epsilon);

const rewards = [0.1, 0.5, 0.8];
const randomReward = (probability) => (Math.random() < probability ? 1 : 0);

for (let i = 0; i < steps; i++) {
    const selectedArm = bandit.selectArm();
    const reward = randomReward(rewards[selectedArm]);
    bandit.update(selectedArm, reward);
}

console.log("Final estimated values:", bandit.values);
console.log("Arm counts:", bandit.counts);
