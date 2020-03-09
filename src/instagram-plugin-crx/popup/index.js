(function() {
    let audios = [];
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1254003
    chrome.runtime.sendMessage({ action: 'popupOpened' }, response => {
        audios = response.data;

        const audio = document.createElement('video');
        audio.src = response.data;
        audio.controls = true;
        document.querySelector('.js-audios').appendChild(audio);
    });

    document.querySelector('.js-audios').addEventListener('click', e => {
        if (e.target.dataset.index) {
            const audio = new Audio(audios[e.target.dataset.index]);
            audio.play();
        }
    });
})();
