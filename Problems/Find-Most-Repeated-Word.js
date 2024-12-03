

const findMostRepeatedWord = words => {
    const count = {}

    words.forEach(word => {
        count[word] = (count[word] || 0) + 1;
    });

    let mostWord = null;
    let maxCount = 0;

    for (const word in count) {
        if (count[word] > maxCount) {
            mostWord = word;
            maxCount = count[word];
        }
    }

    return { word: mostWord, count: maxCount };
}



