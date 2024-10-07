# LexioJS
Introducing LexioJS a lightweight(~7.60 kb minified) simple JavaScript library built with vanilla JS which provides you a lightning fast API for performing basic NLP tasks Such as:
```
  -Tokenization
  -Text Processing 
  -Stop Word Removal
  -sentiment analysis 
  -NER
  -stemming
  -lemmatization
  -feature extraction
```
## Overview

Lexio.js is a JavaScript library for Natural Language Processing (NLP) tasks. It provides various classes and methods for text processing, sentiment analysis, named entity recognition, stemming, and lemmatization.


## Classes


### Lexio


#### Description

The core class containing Tokenizer and StopWordRemover.


#### Methods


`Tokenizer`


- `tokenize(text: string)`: Tokenizes the input text into individual words or tokens.
- `removePunctuation(text: string)`: Removes punctuation from the input text.
- `expandContractions(text: string)`: Expands contractions in the input text.


`StopWordRemover`


- `removeStopWords(tokens: array)`: Removes stopwords from the input tokens.


### LexioSentimentAnalyzer


#### Description

Analyzes sentiment of input text.


#### Methods


- `analyzeSentiment(text: string)`: Analyzes sentiment of the input text.
    - Returns: "positive", "negative", or "neutral"


### Lner (Named Entity Recognizer)


#### Description

Identifies named entities in input text.


#### Methods


- `identifyEntities(text: string)`: Identifies named entities in the input text.
    - Returns: An array of identified entities


### LexioPorterStemmer


#### Description

Stems input tokens.


#### Methods


- `stem(token: string)`: Stems the input token.
    - Returns: The stemmed token


### LexioLemmatizer


#### Description

Lemmatizes input text.


#### Methods


- `lemmatize(text: string)`: Lemmatizes the input text.
    - Returns: An array of lemmatized tokens

### Lbow

#### description 

extracts features from a text into a feature vector object,using bag of words

#### methods

- `createVocab(texts: array)`: creates an object containing the words in a document or list of sentences.
- `createFeatureVector(text: string)`: creates an array of all the features in a sentence and their occurrences 

## Usage


#### Importing Lexio.js
you can use a CDN to include Lexio in directly in your project!
```
<script src="https://cdn.jsdelivr.net/gh/SomnathDevPro/LexioJS@main/src/lexio.min.js"></script>
```


#### Tokenization

```
const lexio = new Lexio();
const tokenizer = new lexio.Tokenizer();
const tokens = tokenizer.tokenize('This is an example sentence.');
console.log(tokens); // Output: ["This", "is", "an", "example", "sentence"]
```


#### Sentiment Analysis

```
const lexio = new Lexio();
const sentimentAnalyzer = new LexioSentimentAnalyzer();
const sentiment = sentimentAnalyzer.analyzeSentiment('I love this product!');
console.log(sentiment); // Output: "positive"
```


#### Named Entity Recognition

```
const lexio = new Lexio();
const ner = new Lner();
const entities = ner.identifyEntities('John Smith is a software engineer at Google.');
console.log(entities); // Output: [{"token": "John Smith", "type": "Person"}, {"token": "Google", "type": "Organization"}]
```


#### Stemming

```
const stemmer = new LexioPorterStemmer();
const stemmedToken = stemmer.stem('running');
console.log(stemmedToken); // Output: "run"
```


#### Lemmatization

```
const lemmatizer = new LexioLemmatizer();
const lemmatizedTokens = lemmatizer.lemmatize('The quick brown fox jumps over the lazy dog.');
console.log(lemmatizedTokens); // Output: ["The", "quick", "brown", "fox", "jump", "over", "the", "lazy", "dog"]
```


## License

Lexio.js is licensed under the MIT License.


## Contributing


Pull requests and issues are welcome!

thanks for checking out my project 😊 
please give me a star if you liked...
