document.addEventListener("DOMContentLoaded", function() {
    const data = {
        1: [10, 20, 30],
        2: [17, 19, 21],
        3: [25, 45, 77]
    };

    const sums = {};

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            sums[key] = data[key].reduce((acc, curr) => acc + curr, 0);
        }
    }

    console.log("Sum of Object Values:");
    for (const key in sums) {
        if (sums.hasOwnProperty(key)) {
            console.log(`Key ${key}: Sum = ${sums[key]}`);
        }
    }
});
