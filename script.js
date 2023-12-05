const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const inputOriginal = document.getElementById("input-original");
const cipher = document.getElementById("cipher");
const result = document.getElementById("result");
const range = document.getElementById("range");

const shifMessage = () => {
  const wordArray = [...inputOriginal.value.toUpperCase()];
  // alert(wordArray);
  printChar(0, wordArray);
}

const printChar = (currentLetterIndex, wordArray) => {
  if (wordArray.length === currentLetterIndex) return;
  inputOriginal.value = inputOriginal.value.substring(1);
  const spanChar = document.createElement('span');
  result.appendChild(spanChar);
  const charArray = wordArray[currentLetterIndex];
  spanChar.innerHTML = alphabet.includes(charArray) ? alphabet[(alphabet.indexOf(charArray) + parseInt(range.value)) % alphabet.length] : charArray;
  printChar(currentLetterIndex + 1, wordArray); // Recursive
}

const submit = e => {
  e.preventDefault();
  result.innerHTML = '';
  shifMessage();
}

cipher.onsubmit = submit;


