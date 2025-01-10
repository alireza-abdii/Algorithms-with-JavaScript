

class EpsilonGreedy {
    constructor(numArms, epsilon) {
        this.numArms = numArms;
        this.epsilon = epsilon;
        this.counts = Array(numArms).fill(0);    
        this.values = Array(numArms).fill(0);    
    }
}

