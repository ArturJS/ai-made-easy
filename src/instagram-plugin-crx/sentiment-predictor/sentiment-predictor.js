async function createModel() {
    const model = await tf.loadModel(
        chrome.runtime.getURL('sentiment-predictor/model.json')
    );
    return model;
}

function process(text) {
    let out = text.replace(/[^a-zA-Z0-9\s]/, '');
    out = out.trim().split(/\s+/);
    for (let i = 0; i < out.length; i++) {
        out[i] = out[i].toLowerCase();
    }
    return out;
}

function createSequences({ dictionary, text }) {
    let max_tokens = 40;
    let words = process(text);
    let seq = Array.from(Array(max_tokens), () => 0);
    let start = max_tokens - words.length;
    for (let i = 0; i < words.length; i++) {
        if (Object.keys(dictionary).includes(words[i])) {
            seq[i + start] = dictionary[words[i]];
        }
    }
    return seq;
}

function success(data) {
    let wd_idx = new Object();
    let lst = data.split(/\r?\n|\r/);

    for (var i = 0; i < lst.length; i++) {
        let key = lst[i].split(',')[0];
        let value = lst[i].split(',')[1];

        if (key == '') continue;
        wd_idx[key] = parseInt(value);
    }

    return wd_idx;
}

window.SentimentPredictor = class SentimentPredictor {
    constructor() {
        this.dictionary = null;
        this.model = null;
        this.loadingPromise = this.init()
            .then(() => {
                console.info('Sentiment predictor initialized');
            })
            .catch(error => {
                console.error('Sentiment predictor failed to initialize');
                console.error(error);
            });
    }

    static create() {
        return new SentimentPredictor();
    }

    async init() {
        await this.loadDictionary().then(() => {
            console.info('Dictionary loaded successfully');
        });
        await this.initModel();
    }

    async waitForLoaded() {
        return this.loadingPromise;
    }

    async loadDictionary() {
        let response = await fetch(
            chrome.runtime.getURL('sentiment-predictor/dict.csv')
        );
        this.dictionary = success(await response.text());
    }

    async initModel() {
        this.model = await createModel();
    }

    performMeasurement(text) {
        let sequence = createSequences({ dictionary: this.dictionary, text });
        let input = tf.tensor(sequence);
        input = input.expandDims(0);
        return this.model.predict(input).dataSync();
    }
};
