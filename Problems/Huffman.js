

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

const generateHuffmanCodes = (node, prefix = "", codes = {}) => {
    if (!node) return;

    if (node.char !== null) {
        codes[node.char] = prefix;
    }

    generateHuffmanCodes(node.left, prefix + "0", codes);
    generateHuffmanCodes(node.right, prefix + "1", codes);

    return codes;
}

const huffmanEncoding = (input) => {
    const freqMap = {};
    for (const char of input) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    const huffmanTree = buildHuffmanTree(freqMap);

    const huffmanCodes = generateHuffmanCodes(huffmanTree);

    const encodedData = input.split("").map(char => huffmanCodes[char]).join("");

    return { huffmanCodes, encodedData, huffmanTree };
}

const inputString = "huffman coding algorithm";
const { huffmanCodes, encodedData } = huffmanEncoding(inputString);

console.log("Huffman Codes:", huffmanCodes);
console.log("Encoded Data:", encodedData);