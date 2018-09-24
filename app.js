// Counting word frequency
let output = document.getElementById('outputBoxId');
let textInput = document.getElementById('textBoxId');
let textValue;
output.innerHTML = '';

function getText() {
  textValue = textInput.value;

  let wordArray = splitWords(textValue);
  let wordMap = makeWordMap(wordArray);
  let finalWordArray = sortByCount(wordMap);
  let len = finalWordArray.length;

  //display results
  for (let i = 0; i < len; i++) {
    if (finalWordArray[i].total > 1) {
      output.innerHTML =
        output.innerHTML +
        ' ' +
        finalWordArray[i].name +
        ' = ' +
        finalWordArray[i].total +
        '\n';
    } else break;
  }
}

function splitWords(text) {
  let wordArray = text.split(/\s+/);
  return wordArray;
}

function makeWordMap(wordArray) {
  let wordsMap = {};
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
  let finalWordArray = [];
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
