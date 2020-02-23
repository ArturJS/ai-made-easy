(function() {
    init()
        .then(() => {
            console.log('App is ready');
        })
        .catch(error => {
            console.error('Failed due to error: ', error);
        });

    // how to kerasjs https://devhub.io/repos/transcranial-keras-js
    // and https://github.com/transcranial/keras-js/blob/master/demos/src/components/models/ImdbBidirectionalLstm.vue#L278
    // https://transcranial.github.io/keras-js-docs/usage/

    async function init() {
        window.app = {
            model: new KerasJS.Model({
                filepath:
                    'https://transcranial.github.io/keras-js-demos-data/imdb_bidirectional_lstm/imdb_bidirectional_lstm.bin',
                gpu: true
            }),
            onSubmit: () => {
                let textToAnalyze = document.querySelector(
                    '[name="textToAnalyze"]'
                ).value;
            }
        };

        await app.model.ready();
    }
})();
