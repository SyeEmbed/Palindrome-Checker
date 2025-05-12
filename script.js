const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str){
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
  return cleaned === cleaned.split('').reverse().join('');
};

checkBtn.addEventListener("click", () => {
  const value = textInput.value;

  if(!value) {
    alert("Please input a value")
    return;
  };

  const resultText = isPalindrome(value) ? `${value} is a palindrome` : `${value} is not a palindrome`;

  result.textContent = resultText;

});
