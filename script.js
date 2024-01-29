const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const isPalindrome = () => {
  const textInputValue = textInput.value;

  if (!textInputValue) return alert('Please input a value');

  const regex = /[\W\s_]/gi;

  const cleanInputText = textInputValue.replace(regex, '').toLowerCase();
  const reverseInputCleanText = cleanInputText.split('').reverse().join('');

  const resultText =
    cleanInputText === reverseInputCleanText
      ? `${textInputValue} is `
      : `${textInputValue} is not `;

  resultDiv.textContent = `${resultText} a palindrome`;
};

checkButton.addEventListener('click', isPalindrome);
