window.SentimentPredictor.intervalId = 0;

async function waitUntil(fn, timeout = Number.MAX_SAFE_INTEGER) {
    clearInterval(window.SentimentPredictor.intervalId);
    return new Promise((resolve, reject) => {
        let start = Date.now();
        window.SentimentPredictor.intervalId = setInterval(() => {
            if (Date.now() - start > timeout) {
                clearInterval(window.SentimentPredictor.intervalId);
                reject(
                    new RangeError('Timeout while trying to get comments...')
                );
            } else if (fn()) {
                clearInterval(window.SentimentPredictor.intervalId);
                resolve();
            }
        }, 15);
    });
}

async function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

function extractComments(selector) {
    let elements = document.querySelectorAll(selector);
    return Array.from(elements).map(e => ({ element: e, text: e.textContent }));
}

async function getTabComments() {
    let commentsSelector = [
        `body > div._2dDPU.CkGkG > div.zZYga > div > 
        article > div.eo2As > div.EtaWk > ul > ul > 
        div > li > div > div.C7I1f > div.C4VMK > span`,

        `#react-root > section > main > div > div.ltEKP > 
        article > div.eo2As > div.EtaWk > ul > ul > 
        div > li > div > div.C7I1f > div.C4VMK > span`,

        `#react-root > section > main > div > div.ltEKP > 
        article > div.eo2As > div.EtaWk > ul > ul > 
        li > ul > div > li > div > div.C7I1f > div.C4VMK > span`,

        `body > div._2dDPU.CkGkG > div.zZYga > div > article > div.eo2As > 
        div.EtaWk > ul > ul:nth-child(2) > li > ul > div:nth-child(2) > 
        li > div > div.C7I1f > div.C4VMK > span`,

        `#react-root > section > main > section > div:nth-child(2) > 
        div:nth-child(1) > div > article:nth-child(2) > div.eo2As > 
        div.Igw0E.IwRSH.eGOV_._4EzTm.XfCBB > div.Igw0E.IwRSH.eGOV_._4EzTm.pjcA_ > 
        div > span > span`, // should we keep this one?

        `#react-root > section > main > section > div > 
        div > div > article > div.eo2As > 
        div.Igw0E.IwRSH.eGOV_._4EzTm.XfCBB > 
        div > div > div > span > span`
    ].join(', ');

    try {
        await waitUntil(() => !!document.querySelector(commentsSelector));
        let comments = extractComments(commentsSelector);
        return comments;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function measureComment({ sentimentPredictor, text }) {
    return sentimentPredictor.performMeasurement(text);
}

function getColor(value) {
    //value is a float number between 0 and 1
    let hue = ((1 - value) * 120).toString(10);
    return ['hsl(', hue, ', 100%, 50%)'].join('');
}

async function highlightComments({ sentimentPredictor, comments }) {
    for (let comment of comments) {
        let { element, text } = comment;

        if (!element) {
            return;
        }

        let degree = await measureComment({ sentimentPredictor, text });

        element.style.backgroundColor = getColor(1 - degree);
        element.style.borderRadius = '3px';
        element.style.overflow = 'hidden';
        element.style.padding = '0 5px';
    }
}

window.initWatchingComments = async function initWatchingComments() {
    let sentimentPredictor = SentimentPredictor.create();

    await sentimentPredictor.waitForLoaded();

    while (true) {
        let comments = await getTabComments();
        await highlightComments({ sentimentPredictor, comments });
        await sleep(1500);
    }
};

async function main() {
    if (!/instagram.com/.test(location.href)) {
        return;
    }

    await initWatchingComments();
}

main()
    .then(() => {
        console.log('Done!');
    })
    .catch(error => {
        console.log(error);
    });
