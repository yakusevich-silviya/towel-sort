// function towelSort (matrix) {

const { underline } = require("colors");

// }

module.exports = function towelSort(matrix) {
    let result = [];

    if (matrix) {
        for (i = 0; i < matrix.length; i++) {
            if (i !== 0 && i % 2 !== 0) {
                matrix[i].reverse();
            }
        }

        result = matrix.flat();
    } else {
        result = [];
    }

    return result;
};
