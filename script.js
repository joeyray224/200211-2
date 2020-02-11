var matrixExample = [
[ 1, 2, 3, 4 ],
[ 4, 5, 6, 5 ],
[ 7, 8, 9, 7 ],
[ 7, 8, 9, 7 ]
];

function sumUpDiagonals(matrix) {
  let sum = 0;
  let length = matrix.length - 1;
  for (let i = 0; i <= length; i++) {
    sum += matrix[i][i];
    sum += matrix[i][length - i];
  }
  return sum;
}


console.log(sumUpDiagonals(matrixExample));
