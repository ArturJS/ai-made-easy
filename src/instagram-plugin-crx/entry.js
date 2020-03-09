async function waitUntil(fn, timeout = Number.MAX_SAFE_INTEGER) {
    return new Promise((resolve, reject) => {
        let start = Date.now();
        let intervalId = setInterval(() => {
            if (Date.now() - start > timeout) {
                clearInterval(intervalId);
                reject(
                    new RangeError('Timeout while trying to get comments...')
                );
            } else if (fn()) {
                clearInterval(intervalId);
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
        '#react-root > section > main > div > div > article >',
        ' div.eo2As > div.EtaWk > ul > ul > div >',
        ' li > div > div.C7I1f > div.C4VMK > span'
    ].join('');

    try {
        await waitUntil(() => !!document.querySelector(commentsSelector));
        let comments = extractComments(commentsSelector);
        // todo return comments
        console.info(comments);
        return comments;
    } catch (error) {
        console.log(error);
    }
}

async function measureComment(text) {
    return Math.random(); // todo use ML algorithm
}

function getColor(value) {
    //value is float between 0 and 1
    let hue = ((1 - value) * 120).toString(10);
    return ['hsl(', hue, ', 100%, 50%)'].join('');
}

async function highlightComments(comments) {
    for (let comment of comments) {
        let degree = await measureComment(comment);
        comment.element.style.backgroundColor = getColor(1 - degree);
    }
}

async function main() {
    if (!/instagram.com/.test(location.href)) {
        return;
    }

    while (true) {
        let comments = await getTabComments();
        await highlightComments(comments);
        await sleep(1000);
    }
}

main()
    .then(() => {
        console.log('Done!');
    })
    .catch(error => {
        console.log(error);
    });
