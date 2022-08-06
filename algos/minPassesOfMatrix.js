function minimumPassesOfMatrix(matrix) {
  // Write your code here.
  //2D
  //shorting path, 分层
  //multiple sources
  //single dest
  //dedup
  //3 loop
  const dx = [0, 1, -1, 0];
  const dy = [1, 0, 0, -1];
  let totalOfNegative = 0;
  const queue = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] > 0) {
        queue.push([i, j]);
      } else if (matrix[i][j] < 0) {
        totalOfNegative++;
      }
    }
  }

  if (totalOfNegative === 0) {
    return 0;
  }

  let passes = 0;

  while (queue.length > 0) {
    passes++;

    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift();
      for (let d = 0; d < 4; d++) {
        const newX = x + dx[d];
        const newY = y + dy[d];
        if (!isValid(newX, newY, matrix)) {
          continue;
        }

        totalOfNegative--;
        if (totalOfNegative === 0) {
          return passes;
        }

        matrix[newX][newY] = matrix[newX][newY] * -1;

        queue.push([newX, newY]);
      }
    }
  }

  return -1;
}

function isValid(x, y, matrix) {
  if (x < 0 || x >= matrix.length) {
    return false;
  }
  if (y < 0 || y >= matrix[0].length) {
    return false;
  }
  if (matrix[x][y] >= 0) {
    return false;
  }
  return true;
}

// Do not edit the line below.
export default minimumPassesOfMatrix;

/*
{
 "matrix": [
  [0, -1, -3, 2, 0],
  [1, -2, -5, -1, -3],
  [3, 0, 0, -4, -1]
]

}


=>

{
    "result": 3
}


*/
