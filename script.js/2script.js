document.addEventListener("DOMContentLoaded", function() {
    const size = 5;
    const matrix = [];

    
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            matrix[i][j] = (i === j) ? 1 : 0;
        }
    }

    
    console.log("Diagonal Matrix:");
    matrix.forEach(row => {
        console.log(row.join(" "));
    });
});
