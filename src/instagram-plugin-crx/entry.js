function waitUntil(fn, timeout) {
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

function main() {
    function getComments(selector) {
        let elements = document.querySelectorAll(selector);
        return Array.from(elements)
            .map(e => e.textContent)
            .join('\n');
    }

    let commentsSelector = [
        '#react-root > section > main > div > div > article >',
        ' div.eo2As > div.EtaWk > ul > ul > div >',
        ' li > div > div.C7I1f > div.C4VMK > span'
    ].join('');

    waitUntil(() => document.querySelector(commentsSelector), 10000)
        .then(() => {
            let comments = getComments(commentsSelector);
            console.info(comments);
        })
        .catch(error => {
            console.log(error);
        });
}

main();
