document.getElementById('check-btn').addEventListener('click', function() {
    var inputText = document.getElementById('text-input').value;
    var resultDiv = document.getElementById('result');
    
    if (inputText === '') {
        alert('Please input a value');
        return;
    }
    
    var strippedText = inputText.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    var reversedText = strippedText.split('').reverse().join('');
    
    if (strippedText === reversedText) {
        resultDiv.textContent = inputText + ' is a palindrome';
    } else {
        resultDiv.textContent = inputText + ' is not a palindrome';
    }
});