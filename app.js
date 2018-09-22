// Counting word frequency
var div = document.querySelector('div');
var textInput = document.getElementById('textBoxId');
var textValue;
div.innerHTML = '';

function getText() {
  textValue = textInput.value;

  var wordArray = splitWords(textValue);
  var wordMap = makeWordMap(wordArray);
  var finalWordArray = sortByCount(wordMap);
  var len = finalWordArray.length;

  //display results
  for (let i = 0; i < len; i++) {
    if (finalWordArray[i].total > 1) {
      div.innerHTML =
        div.innerHTML +
        ' ' +
        finalWordArray[i].name +
        ' = ' +
        finalWordArray[i].total +
        '<br>';
    } else break;
  }
}

function splitWords(text) {
  var wordArray = text.split(/\s+/);
  return wordArray;
}

function makeWordMap(wordArray) {
  var wordsMap = {};
  wordArray.forEach(function(key) {
    if (wordsMap.hasOwnProperty(key)) {
      wordsMap[key]++;
    } else {
      wordsMap[key] = 1;
    }
  });
  return wordsMap;
}

function sortByCount(wordsMap) {
  var finalWordArray = [];
  finalWordArray = Object.keys(wordsMap).map(function(key) {
    return {
      name: key,
      total: wordsMap[key]
    };
  });

  finalWordArray.sort(function(a, b) {
    return b.total - a.total;
  });

  return finalWordArray;
}
