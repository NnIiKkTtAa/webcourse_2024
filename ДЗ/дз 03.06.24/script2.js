document.getElementById('calculateButton').addEventListener('click', function() {
    var n = parseInt(document.getElementById('inputNumber').value);
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    document.getElementById('result').innerHTML = 'Сумма чисел от 1 до ' + n + ' равна ' + sum;
});