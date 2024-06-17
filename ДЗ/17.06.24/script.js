var array = [1, 1, 0, 0, 1, 0, 1, 1, 0, 0];

 for (var i = 0; i < array.length; i++) {
     
    if (array[i] === 0) {
         array[i] = 1;
     } else {
         array[i] = 0;
     }
 }

 console.log(array);