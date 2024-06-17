var array = [1, 2, 3, 4, 6, 7, 8, 9];

function printElementsGreaterThanFive(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            console.log(arr[i]);
        }
    }
}

printElementsGreaterThanFive(array);