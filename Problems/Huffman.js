

class HuffmanNode {
    constructor(char, freq) {
        this.char = char;
        this.freq = freq;
        this.left = null;
        this.right = null;
    }
}

const buildHuffmanTree = (freqMap) => {
    const pq = Object.entries(freqMap).map(([char, freq]) => new HuffmanNode(char, freq));

    pq.sort((a, b) => a.freq - b.freq);

    while (pq.length > 1) {
        const left = pq.shift();
        const right = pq.shift();

        const newNode = new HuffmanNode(null, left.freq + right.freq);
        newNode.left = left;
        newNode.right = right;

        pq.push(newNode);
        pq.sort((a, b) => a.freq - b.freq);
    }

    return pq[0];
}