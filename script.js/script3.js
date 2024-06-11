var array = [1, 5, 3, 2, 11, 4, 5, 2, 4, 8, 9, 1];

for (var i = 0; i < array.length; i++) {
    if (array[i] < 6) {
        array[i] *= 2;
    }
}
console.log(array);