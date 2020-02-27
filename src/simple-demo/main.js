async function createModel() {
    const model = await tf.loadModel('model.json');
    return model;
}

function process(txt) {
    out = txt.replace(/[^a-zA-Z0-9\s]/, '');
    out = out.trim().split(/\s+/);
    for (var i = 0; i < out.length; i++) out[i] = out[i].toLowerCase();
    return out;
}

async function loadDict() {
    await $.ajax({
        url: 'dict.csv',
        dataType: 'text'
    }).done(success);
}

function success(data) {
    var wd_idx = new Object();
    lst = data.split(/\r?\n|\r/);

    for (var i = 0; i < lst.length; i++) {
        key = lst[i].split(',')[0];
        value = lst[i].split(',')[1];

        if (key == '') continue;
        wd_idx[key] = parseInt(value);
    }

    word_index = wd_idx;
}

function create_sequences(txt) {
    max_tokens = 40;
    tokens = [];
    words = process(txt);
    seq = Array.from(Array(max_tokens), () => 0);
    start = max_tokens - words.length;
    for (var i = 0; i < words.length; i++) {
        if (Object.keys(word_index).includes(words[i])) {
            seq[i + start] = word_index[words[i]];
        }
    }
    return seq;
}

async function mySentiment(model) {
    txt = document.getElementById('myInput').value;
    seq = create_sequences(txt);

    input = tf.tensor(seq);
    input = input.expandDims(0);
    pred = document.model.predict(input);

    if (pred.dataSync() >= 0.5) {
        document.getElementById('myDiv01').innerHTML =
            'Вау, позитивный комментарий! ' +
            `<img 
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/220/smiling-face-with-smiling-eyes_1f60a.png"
                srcset="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/samsung/220/smiling-face-with-smiling-eyes_1f60a.png 2x" 
                alt="Smiling Face with Smiling Eyes on Samsung One UI 1.5" width="108" height="108">` +
            (pred.dataSync() * 100).toFixed(0) +
            '%<br>';
    } else {
        document.getElementById('myDiv01').innerHTML =
            'Похож на негативный... ' +
            `<img 
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/236/worried-face_1f61f.png" 
                srcset="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/236/worried-face_1f61f.png 2x" 
                alt="Worried Face on Twitter Twemoji 12.1.5" 
                width="120" 
                height="120">` +
            (pred.dataSync() * 100).toFixed(0) +
            '%<br>';
    }
}

function myDots() {
    document.myInterval = setInterval(
        "document.getElementById('myDiv01').innerHTML += '.'",
        100
    ); // every 1/10 second add a dot
}

async function initTrue(model) {
    txt = document.getElementById('myInput').value;

    //console.log('Start loading dicionary')
    document.getElementById('myDiv01').innerHTML =
        'Загрузка, готовим печеньки...';
    myDots(); // add some dots
    await loadDict();

    //console.log('Finish loading dictionary')

    //console.log('Start loading model')
    document.model = await createModel();
    //console.log('Finish loading model')

    clearInterval(document.myInterval); //  stop adding dots
    document.getElementById('myDiv01').innerHTML = 'Готово! 😊';
    seq = create_sequences('Love'); // just a testing run

    input = tf.tensor(seq);
    input = input.expandDims(0);
    pred = document.model.predict(input);
    // pred.print()
}

initTrue();

word_index = undefined;
