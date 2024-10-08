class Lexio {
  constructor() {
    this.Tokenizer = class Tokenizer {
      constructor(contractions = {
        "i'm": "i am",
        "you're": "you are",
        "it's": "it is",
        "we're": "we are",
        "they're": "they are",
        "i've": "i have",
        "you've": "you have",
        "we've": "we have",
        "they've": "they have",
        "i'll": "i will",
        "you'll": "you will",
        "he'll": "he will",
        "she'll": "she will",
        "it'll": "it will",
        "we'll": "we will",
        "they'll": "they will",
        "don't": "do not",
        "doesn't": "does not",
        "didn't": "did not",
        "won't": "will not",
        "wouldn't": "would not",
        "shan't": "shall not",
        "shouldn't": "should not",
        "mustn't": "must not",
        "ain't": "am not",
        "let's": "let us",
        "oughtn't": "ought not",
        "used to": "used to",
        "so that": "in order that",
        "inc.": "in case",
        "that's": "that is",
        "this's": "this is",
        "who's": "who is",
        "gonna": "going to",
        "gotta": "got to",
        "wanna": "want to",
        "shoulda": "should have",
        "coulda": "could have",
        "woulda": "would have",
        "y'all": "you all",
        "ya": "you",
        "em": "them"
      }) {
        this.contractions = contractions
      }
      removePunctuation(text) {
        try {
          return text.replace(/[^\w\s]/g, " ")
        } catch (e) {
          throw e
        }
      }
      expandContractions(text) {
        for (let contraction in this.contractions) {
          text = text.replace(new RegExp(contraction.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "gi"), this.contractions[contraction])
        }
        try {
          return text
        } catch (e) {
          throw e
        }
      }
      tokenize(text) {
        text = this.expandContractions(text)
        text = this.removePunctuation(text)
        text = text.trim().toLowerCase().split(/\s/g)
        text = text.filter(token => token !== "")
        try {
          return text
        } catch (e) {
          throw e
        }
      }
    }
    this.StopWordRemover = class StopWordRemover {
      constructor(stopWords = ["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in",
  "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the",
  "their", "then", "there", "these", "they", "this", "to", "was", "were",
  "which", "while", "with", "above", "across", "against", "along", "among",
  "around", "at", "before", "behind", "below", "beside", "between", "by",
  "down", "from", "in", "into", "near", "of", "off", "on", "over", "past",
  "since", "through", "throughout", "till", "to", "toward", "under", "until",
  "up", "upon", "with", "within", "without", "and", "but", "or", "nor",
  "for", "so", "yet", "i", "me", "my", "mine", "we", "us", "our", "ours",
  "you", "your", "yours", "he", "him", "his", "she", "her", "hers", "it",
  "its", "they", "them", "their", "theirs", "am", "is", "are", "was", "were",
  "be", "been", "being", "have", "has", "had", "do", "does", "did", "shall",
  "should", "will", "would", "can", "could", "may", "might", "must", "ought", "shall", "should", "will", "would"]) {
        this.stopWords = stopWords
      }
      removeStopWords(tokens) {
        let result = []
        tokens.forEach((token) => {
          if (!this.stopWords.includes(token)) {
            result.push(token)
          }
        })
        try {
        return result
        } catch (e) {
          throw e
        }
      }
    }
  }
}
class LexioSentimentAnalyzer {
  constructor(uDict = {}) {
    this.uDict = uDict;
    this.bDict = {
      "hell":-1,
      "admire": 1,
      "adore": 1,
      "amazing": 1,
      "appreciate": 1,
      "awesome": 1,
      "no": -1,
      "sucks": -1,
      "friggin": -1,
      "fuck": -1,
      "none": -1,
      "not": -1,
      "never": -1,
      "sad": -1,
      "sorry": -1,
      "unhappy": -1,
      "bad": -1,
      "worse": -1,
      "worst": -1,
      "yes": 1,
      "happy": 1,
      "glad": 1,
      "good": 1,
      "better": 1,
      "best": 1,
      "okay": 0,
      "maybe": 0,
      "possibly": 0,
      "likely": 0,
      "unlikely": -1,
      "certainly": 1,
      "definitely": 1,
      "always": 1,
      "forever": 1,
      "rarely": -1,
      "seldom": -1,
      "beautiful": 1,
      "benefit": 1,
      "boost": 1,
      "brilliant": 1,
      "celebrate": 1,
      "cherish": 1,
      "comfort": 1,
      "delight": 1,
      "enjoy": 1,
      "excellent": 1,
      "fantastic": 1,
      "good": 1,
      "happy": 1,
      "harmony": 1,
      "hope": 1,
      "inspire": 1,
      "joy": 1,
      "love": 1,
      "lovely": 1,
      "motivate": 1,
      "outstanding": 1,
      "peace": 1,
      "praise": 1,
      "recommend": 1,
      "reassure": 1,
      "refresh": 1,
      "restore": 1,
      "satisfy": 1,
      "strengthen": 1,
      "thrive": 1,
      "uplift": 1,
      "value": 1,
      "welcome": 1,
      "abhor": -1,
      "abuse": -1,
      "annoy": -1,
      "awful": -1,
      "bad": -1,
      "bitter": -1,
      "cruel": -1,
      "damage": -1,
      "demolish": -1,
      "destroy": -1,
      "disappoint": -1,
      "endanger": -1,
      "evil": -1,
      "exploit": -1,
      "fail": -1,
      "fear": -1,
      "frighten": -1,
      "harm": -1,
      "hate": -1,
      "horrible": -1,
      "hurt": -1,
      "ignore": -1,
      "injure": -1,
      "insult": -1,
      "interrupt": -1,
      "isolate": -1,
      "lose": -1,
      "manipulate": -1,
      "neglect": -1,
      "pain": -1,
      "reject": -1,
      "scorn": -1,
      "suffer": -1,
      "terrible": -1,
      "tragedy": -1,
      "ugly": -1,
      "unhappy": -1,
      "unpleasant": -1,
      "worst": -1,
      "describe": 0,
      "explain": 0,
      "mention": 0,
      "note": 0,
      "report": 0,
      "say": 0,
      "state": 0,
      "ask": 0,
      "analyze": 0,
      "compare": 0,
      "consider": 0,
      "debate": 0,
      "discuss": 0,
      "examine": 0,
      "explore": 0,
      "highlight": 0,
      "illustrate": 0,
      "interpret": 0,
      "outline": 0,
      "review": 0,
      "study": 0,
      "normal": 0,
      "standard": 0,
      "average": 0,
      "news": 0,
      "information": 0,
      "fact": 0,
      "data": 0,
      "detail": 0,
      "description": 0,
      "documentation": 0,
      "evidence": 0,
      "example": 0,
      "explanation": 0,
      "finding": 0,
      "information": 0,
      "instruction": 0,
      "message": 0,
      "note": 0,
      "observation": 0,
      "report": 0,
      "result": 0,
      "statement": 0,
    }
    this.sDict = { ...this.bDict, ...this.uDict }
  }
  analyzeSentiment(text) {
    let sentimentScore = 0
    const lexio = new Lexio()
    const tokenizer = new lexio.Tokenizer()
    const swr = new lexio.StopWordRemover()
    const tokens = swr.removeStopWords(tokenizer.tokenize(text))
    tokens.forEach((token) => {
      if (this.sDict[token]) {
        sentimentScore += this.sDict[token]
      }
    })
    try {
      if (sentimentScore < 0) {
        return "negative";
      } else if (sentimentScore > 0) {
        return "positive"
      } else if (sentimentScore === 0) {
        return "neutral"
      } else {
        return `sentimentScore:${sentimentScore}`
      }
    } catch (e) {
      throw e
    }
  }
}
class Lner {
  constructor(gazetteer = {}, rules = []) {
    this.gazetteer = gazetteer;
    this.rules = rules;

  }
  addGazetteer(entity, type) {
    this.gazetteer[entity.toLowerCase()] = type;
  }
  addRule(rule) {
    this.rules.push(rule)
  }
  identifyEntities(text) {
    const lexio = new Lexio()
    const tokenizer = new lexio.Tokenizer()
    const tokens = tokenizer.tokenize(text)
    const entities = []
    tokens.forEach((token) => {
      if (this.gazetteer[token]) {
        entities.push(token, this.gazetteer[token.toLowerCase()])
      }
      this.rules.forEach(rule => {
        if (rule.test(token)) {
          entities.push({ token, type: rule.type })
        }
      })
    })
    try {
    return entities
    } catch (e) {
      throw e
    }
  }
}
class LexioPorterStemmer {
  constructor(porterStemmerSuffixes = [
    'ATE', 'ATELY', 'ATING', 'ED', 'EN', 'ING', 'IZE', 'IZED',
    'IZES', 'LY', 'ANCE', 'ANCES', 'ANT', 'ANTS', 'ATION',
    'ATIONS', 'EMENT', 'EMENTS', 'ENCE', 'ENCES', 'ENT',
    'ENTS', 'ER', 'ERS', 'FUL', 'FULS', 'IBILITY', 'IBLE',
    'ISM', 'ISMS', 'ABLE', 'AL', 'ALIS', 'ALS', 'ICAL',
    'ICS', 'IVE', 'LESS', 'OUS', 'WISE', 'CTION', 'CTIONS',
    'DITION', 'DITIONS', 'GUARD', 'GUARDS', 'HOOD', 'HOODS',
    'SHIP', 'SHIPS', 'BE', 'HAVE', 'S', 'D', 'NESS', 'NE', 'ING'
  ].map(suffix => suffix.toLowerCase())) {
    this.porterStemmerSuffixes = porterStemmerSuffixes;
  }
  stem(token) {
    token = token.toLowerCase()
    if (token.endsWith('ss')) {
      token = token.slice(0, -2)
    } else if (token.endsWith('s')) {
      token = token.slice(0, -1)
    }
    if (token.endsWith('ed') || token.endsWith('ly')) {
      token = token.slice(0, -2)
    } else if (token.endsWith('ing')) {
      token = token.slice(0, -3)
    }
    for (const suffix in this.porterStemmerSuffixes) {
      if (token.endsWith(suffix)) {
        if (suffix.length <= 3) continue;
        token.slice(0, -suffix.length)
      }
    }
    try {
      return token
    }catch(e){
      throw e
    }
  }
}
class LexioLemmatizer {
  constructor(bDict = {
    "abandon": "abandon",
    "abandoned": "abandon",
    "abandoning": "abandon",
    "moved": "move",
    "ability": "ability",
    "able": "able",
    "absence": "absence",
    "absent": "absent",
    "accept": "accept",
    "accepted": "accept",
    "accepting": "accept",
    "action": "action",
    "active": "active",
    "activity": "activity",
    "actual": "actual",
    "actually": "actually",
    "add": "add",
    "added": "add",
    "adding": "add",
    "address": "address",
    "adjust": "adjust",
    "adjusted": "adjust",
    "adjusting": "adjust",
    "advance": "advance",
    "advanced": "advance",
    "advancing": "advance",
    "advice": "advice",
    "advise": "advise",
    "advised": "advise",
    "advising": "advise",
    "affect": "affect",
    "affected": "affect",
    "affecting": "affect",
    "agree": "agree",
    "agreed": "agree",
    "agreeing": "agree",
    "allow": "allow",
    "allowed": "allow",
    "allowing": "allow",
    "almost": "almost",
    "alone": "alone",
    "already": "already",
    "also": "also",
    "although": "although",
    "always": "always",
    "am": "be",
    "among": "among",
    "amount": "amount",
    "an": "an",
    "and": "and",
    "another": "another",
    "any": "any",
    "anyone": "anyone",
    "anything": "anything",
    "appear": "appear",
    "appeared": "appear",
    "appearing": "appear",
    "apply": "apply",
    "applied": "apply",
    "applying": "apply",
    "approach": "approach",
    "approached": "approach",
    "approaching": "approach",
    "area": "area",
    "argue": "argue",
    "argued": "argue",
    "arguing": "argue",
    "argues": "argue",
    "around": "around",
    "arrange": "arrange",
    "arranged": "arrange",
    "arranging": "arrange",
    "arrive": "arrive",
    "arrived": "arrive",
    "arriving": "arrive",
    "as": "as",
    "ask": "ask",
    "asked": "ask",
    "asking": "ask",
    "aspect": "aspect",
    "assess": "assess",
    "assessed": "assess",
    "assessing": "assess",
    "assign": "assign",
    "assigned": "assign",
    "assigning": "assign",
    "assist": "assist",
    "assisted": "assist",
    "assisting": "assist",
    "assume": "assume",
    "assumed": "assume",
    "assuming": "assume",
    "at": "at",
    "attack": "attack",
    "attacked": "attack",
    "attacking": "attack",
    "attempt": "attempt",
    "attempted": "attempt",
    "attempting": "attempt",
    "attend": "attend",
    "attended": "attend",
    "attending": "attend",
    "authority": "authority",
    "available": "available",
    "average": "average",
    "avoid": "avoid",
    "avoided": "avoid",
    "avoiding": "avoid",
    "aware": "aware",
    "away": "away",
    "be": "be",
    "bear": "bear",
    "beat": "beat",
    "became": "become",
    "because": "because",
    "become": "become",
    "becomes": "become",
    "been": "be",
    "before": "before",
    "began": "begin",
    "begin": "begin",
    "beginning": "begin",
    "behalf": "behalf",
    "being": "be",
    "believe": "believe",
    "believed": "believe",
    "believing": "believe",
    "below": "below",
    "beside": "beside",
    "best": "best",
    "jumping": "jump",
    "jumped": "jump",
    "killed": "kill",
    "killing": "kill"
  }, uDict = {}) {
    this.bDict = bDict;
    this.uDict = uDict
    this.dict = { ...this.uDict, ...this.bDict }
  }
  lemmatize(text) {
    const lexio = new Lexio();
    const tok = new lexio.Tokenizer()
    const tokens = tok.tokenize(text)
    const lemmatizedTokens = tokens.map(token => {
      return this.dict[token] || token;
    })
    try {
    return lemmatizedTokens
    } catch (e) {
      throw e
    }
  }
}
class Lbow {
  constructor() {
    this.vocab={}
    this.docCount=0;
  }
  createVocab(texts){
    const lexio = new Lexio();
    const tokenizer = new lexio.Tokenizer()
    const swr = new lexio.StopWordRemover()
    const lep = new LexioPorterStemmer()
    texts.forEach(text=>{
      text = lep.stem(text)
     let tokens= swr.removeStopWords(tokenizer.tokenize(text))
     tokens.forEach(token=>{
       if (!this.vocab[token]) {
         this.vocab[token]=0
       }else{
         this.vocab[token]++
       }
     })
    })
    this.docCount=texts.length;
  }
  createFeatureVector(text){
     const lexio = new Lexio();
    const tokenizer = new lexio.Tokenizer()
    const tokens = tokenizer.tokenize(text)
    const vector = {}
    Object.keys(this.vocab).forEach(feature=>{
      vector[feature] = tokens.includes(feature)?1:0;
    });
    return vector;
  }
  getDocCount(){
    return this.docCount
  }
  getVocabSize(){
    return Object.keys(this.vocab).length
  }
}
