# Верхнеуровневый план выступления и доклада

Заголовок
AI made easy...
... as pie

План доклада:
AI в двух словах
 (это просто функция апроксимации, для решения задач нахождения похожих патернов и их репликации)
Как это может помочь в решении задач на frontend-e
Краткий перечень наиболее распространенных AI алгоритмов
Типы обучения AI
** кратко про Supervised learning **
кратко про Unsupervised learning
кратко про Reinforcement learning

Демо пример с системой автоматической оценки отзывов на ваш продукт. (когда кто-то оставляет комменты) + для сбора автоматических метрик того, как новые фичи влияют на его конечную привлекательность для потребителя.
 (сделать по аналогии https://youtu.be/_ncjDruwCJU)
+ показываем что это просто сделать на JS как дважды два)) (на самом деле нет...)

Показываем перечень весомых плюсов этой автоматической системы и сколько потенциально она может принести денег продукту.

Вкратце показываем инструменты с помощью которых и как это было сделано. ("кошелек миллера" использовать для разбиения составных частей программы, чтобы всем было просто воспринимать написанный код)

Gotchas (когда выгодно и не очень использовать ML)

We can do a lot more via AI (дальше перечень вещей)

Thank you!

(approximately 30-40 slides)

## 28.01.2020 ideas
// для студентов просто high-level overview ML
// для Grid Dynamics сравнение JS vs Python реализаций (где на JS это полезнее, чем на Python)
Оценка комментов в instagram, автоматический модератор (with comments removal), либо сбор метрик по комментам IMDB (english comments)

https://github.com/tensorflow/tfjs-models/tree/master/posenet

google presentation
Python VS JS (when we need UI AI recognition)
pre-trained model
https://www.tensorflow.org/js/tutorials/conversion/import_keras - in order to convert from python to JS


maybe https://github.com/appcypher/awesome-wasm-langs#python ?

## 31.01.2020 ideas

### Title: ML why do we need this on frontend?...


https://transcranial.github.io/keras-js/#/imdb-bidirectional-lstm

Add a couple of words about [Embeeding] -> [Bidirectional LSTM] -> [Dropout 0.5] -> [Dense]

What does it mean exactly each enigmatic word from the above.
### __!!!!!Python VS JS (when we need UI AI recognition) + Keras.js + TensorFlow.js__
What about WASM + Python
What are the restrictions of JS ML libs in comparison with Python ones?

pre-trained model
https://www.tensorflow.org/js/tutorials/conversion/import_keras - in order to convert from python to JS

How to train JS model.

Don't forget to mention the Loss function https://en.wikipedia.org/wiki/Loss_function

## 1.02.2020 ideas

### __Python VS JS (when we need UI AI recognition) + Keras.js + TensorFlow.js__

Useful links:

Should I learn Machine Learning on Javascript or Python?
https://www.freecodecamp.org/forum/t/should-i-learn-machine-learning-on-javascript-or-python/292000/3

Machine Learning : Tensorflow v/s Tensorflow.js v/s Brain.js
https://stackoverflow.com/questions/51797280/machine-learning-tensorflow-v-s-tensorflow-js-v-s-brain-js

What is the performance like in TensorFlow.js vs Tensorflow? And how exactly does TensorFlow.js interface with the GPU?
https://www.reddit.com/r/MachineLearning/comments/azwrcd/d_what_is_the_performance_like_in_tensorflowjs_vs/
<br/><br/>
#### Why should I learn TensorFlow.js?
TensorFlow.js is an open-source hardware-accelerated JavaScript library for training and deploying machine learning models.

 - Develop ML in the Browser
 - Use flexible and intuitive APIs to build models from scratch using the low-level JavaScript linear algebra library or the high-level layers API.
 - Run Existing models
 - Use TensorFlow.js model converters to run pre-existing TensorFlow models right in the browser.
 - Retrain Existing models
 - Retrain pre-existing ML models using sensor data connected to the browser, or other client-side data.<br/>
https://www.quora.com/Why-should-I-learn-TensorFlow-js
<br/><br/>
#### What is the difference between the TensorFlow JS and TensorFlow Python apart from programming language? Is there anything that the TensorFlow Python can do that the TensorFlow JS cannot or vice versa?
https://www.quora.com/What-is-the-difference-between-the-TensorFlow-JS-and-TensorFlow-Python-apart-from-programming-language-Is-there-anything-that-the-TensorFlow-Python-can-do-that-the-TensorFlow-JS-cannot-or-vice-versa

Comparison :

- Speed : tf > tf.js. Tf.js is faster for small models, but when model becomes large, training becomes 10–15x slower. Read it here - [TensorFlow.js](https://js.tensorflow.org/faq/)
- If you are from Deep Learning background, tf will always be better for you as you get lots of freedom over little things. But else tf.js will be better for deploying models.
- Tensorboard. Ahh…the savior of millions. Tensorflow has tensorboard, tf.js doesn’t have direct support as its just an API. I can’t develop anything in tensorflow without watching the models behave, so I think tensorboard is an important part of tf that lacks in tf.js.
- Usage : Tf.js is hell lot easier to use than tf itself.
- GPU accelaration : It is not needed in tf.js as it will use the GPU access from browser itself. So it you dont have GPU, tf.js will use your integrated GPU. but tensorflow itself can’t use integrated intel graphics.
- Cuda : you dont need to install CUDA for tf.js, which you will need for GPU support in tensorflow(which is a pain process to install).
That’s probably it…Rest everything else is supported in both platforms.

The only thing that tf.js can’t do is train a large model or even import a large model. Well TBH I dont think anyone using tf.js will need to use a large model.
<br/><br/>
#### Why doesn't anyone recommend JavaScript/Node.js as a language for machine learning or data analysis?
https://www.quora.com/Why-doesnt-anyone-recommend-JavaScript-Node-js-as-a-language-for-machine-learning-or-data-analysis

Because they don't really offer any benefit over the languages we already use.

node.js is designed for building network applications. That really has nothing to do with ML/DA.

There are a few most commonly used languages for ML, and they all offer things that are very valuable -
MATLAB - readily available libraries, fast matrix operations, and flexibility
Python - easy for prototyping and is fast enough for most applications with libraries like NumPy and SciPy
C++ - for very high performance

I would learn Python. It's a generally very useful language outside of ML as well.

To be a competent developer you can't restrict yourself to a language or 2. Different jobs are best done in different languages, and JS is unsuitable for this application.

Can you do some ML in JS if you REALLY wanted to? Sure. But that's like hitting nails with a screwdriver. It would just make your life a whole lot more difficult.


<br/><br/>
#### Is JavaScript a good choice for machine learning?
https://www.quora.com/Is-JavaScript-a-good-choice-for-machine-learning

First, JavaScript is not known to be a great programming language for Machine Learning. The most popular one is Python. There are great Python libraries for Machine Learning - Scikit Learn, Tensorflow, Keras, etc. Ideally, you should use Python to save your time.

Second, while learning ML, or for that matter, any concept, your focus should be on the core idea - how it works and most importantly, why it works? Implementation in JavaScript or Python or any other programming language is just a matter of writing working code. The bottleneck is generally not on the coding piece of it. The bottleneck is on understanding the concept.

In fact, a lot of people focus on the programming language, tools, frameworks, and what not. While the implementation is one of the pieces of the puzzle, it is far from being the crucial piece. The most important part is to understand the core concept and be able to solve problems using that concept.

You can have a resume full of various programming languages and tools. However, if you are unable to come up with solutions to the interview problems thrown at you, your knowledge of 10 such programming languages is completely useless.

As an exception, some companies working in a very specific domain indeed require you to be well versed with a particular programming language. For instance, all the high-frequency trading firms like Tower Research, APT Portfolio, Alphagrep, etc. expect you to have a firm grip on C/C++ programming since these companies almost exclusively use C/C++. Also, certain important concepts of C/C++ that are specific are often used in HFT firms. That’s why they prefer those with a deep knowledge of these programming languages.

But, by-and-large, your focus should be on learning problem-solving and building concepts than on learning 10 different programming languages.
<br/><br/>
#### Машинное обучение с Node.js при помощи библиотеки Tensorflow.js
https://habr.com/ru/company/piter/blog/432984/

`Tensorflow.js начиналась как фронтендовая библиотека для работы в браузере, но в этом году в нее была добавлена экспериментальная поддержка Node.js. Таким образом, TensorFlow.js можно использовать и в бэкендовых приложениях на JavaScript, что совершенно избавляет нас от необходимости прибегать к Python.
`

`Использование TensorFlow.js с Node.js

@tensorflow/tfjs – библиотека Core TensorFlow.js
@tensorflow/tfjs-node — расширение TensorFlow.js Node.js
@tensorflow/tfjs-node-gpu – расширение TensorFlow.js Node.js с поддержкой вычислений на GPU
`


<br/><br/>
#### 


<br/><br/>
#### 

## 3.02.2020 ideas

New title
### Machine Learning with JavaScript. Is JavaScript (or not really) displacing Python?...

Описание: *
Добавьте в описание доклада достаточно подробностей, чтобы суть доклада была ясна. Опишите технологии, которые будете использовать, сформулируйте цель доклада (проблемы и их решения), укажите целевую аудиторию, и что люди узнают и получат из вашего доклада.
Не подавайте доклад, изобилующий рекламой той или иной технологии. Сконцентрируйтесь на применении этих технологий.

```
Суть доклада заключается в том, что мы выдвигаем предположениe насчет того, что JS скоро захватит ML мир и вытеснит Python, однако шаг за шагом открываем ранее неизвестные подпробности и потаенные моменты того, когда это не совсем так.
Примером того может служить использование (вернее их частичная нерелевантность) тяжелых Neural-Network models на стороне UI конечного пользователя, однако как вполне рабочая альтернатива может быть использована mobilenet, которая является облегченной версией Python AI model, которая может быть запущена даже на low budget devices.
На случай, если конечного пользователя не волнует размер AI модели, то может быть использован https://github.com/iodide-project/pyodide , который за счёт бриджирования через WASM дает шанс использовать готовые решения написанные на Python. (ToDo for me: figure out potential pitfalls and how to avoid them)
```

Детальный план доклада: *
Около 20 пунктов, которые отражают суть и последовательность изложения в докладе.

```
- краткий обзор того, чем может помочь AI с точки зрения автоматизации в самых разных аспектах нашей жизни
- немного инфы о том, что такое ML, из чего (from high-level perspective) оно состоит, что это своего рода yet another апроксиматор, который решает задачи с определенным % точности
- когда лучше всего и не совсем релевантно использовать ML
- что есть для ML в Python
- что есть в JS для ML (Tensorflow.js, Keras.js, so on...) какие существуют ограничения в рамках их использования
- как pyodide с использованием WASM позволяет по большей части решить проблему с портированием уже готовых Python библиотек на JS и какие потенциальные (а также вполне реальные) проблемы это несёт
- демо пример с оценкой комментов с использованием sentiment classification на основе IMDB https://transcranial.github.io/keras-js/#/imdb-bidirectional-lstm
- помечтаем насчет возможных перспектив ML + JS
- quick recap
```

## 5.02.2020 ideas

Agenda:
- results of JavaScript vs Python
- Instagram bot
- what to do next?

Recap:
 - raw draft for presentation
 - split in into several large parts (each of them contains slide with quick overview)

 - try to convert via onnx and via tensorflow + try out pyodide with pytorch
 - neural network learning pitfalls when using js
 - chrome extension for Instagram bot
 - (should we mention about this chrome extension security?...)
 - highlight bad comments in Instagram (only in case if it's not possible to remove comment)

AI mentor notes: 

https://onnx.ai

serving ml model

1. получить список всех комментов в акканте

2. триггернуть удаление комментария

https://docs.google.com/presentation/d/19P78WHudaXpQuIP-P4nx1I5Dumd9mkWDUXI8An7dMwU/edit?usp=sharing

План:
1. стуктура в презентации

2. упоминание всех тулов в презентации

3. поднять модель sentiment analysis в js

4. получать результаты для текста из массива в js

4*. Спарсить комменты с IG

5. запуск модели из python

5*. конвертация модели из python

https://github.com/xiamx/awesome-sentiment-analysis#nodejs

https://github.com/abdulfatir/twitter-sentiment-analysis/blob/master/code/lstm.py

LSTM

Transformer, BERT (круче чем LSTM)

meetings approximately at 19:00


## 8.02.2020 ideas

Tell about sentiment analysis and how it works beneath the hood.

About instagram chrome extension.
1. Show the code that is responsible for neural network convertation from Python to JavaScript.
2. The part where we connect the network to our application
3. How do we perform comments removal.

https://habr.com/ru/post/476052/
