export const solveNQueenProblem = (n: number) => {
  const board = [...new Array(n).fill(null).map(() => new Array(n).fill(""))];
  const allBoardResult = [];

  const isSafe = (board: string[][], row: number, col: number) => {
    // vertical check
    for (let r = 0; r < board.length; r++) {
      if (board[r][col] === "Q") {
        return false;
      }
    }

    // horizontal check
    for (let c = 0; c < board.length; c++) {
      if (board[row][c] === "Q") {
        return false;
      }
    }

    // upper left check diagonally
    for (let r = row, c = col; r >= 0 && c >= 0; r--, c--) {
      if (board[r][c] === "Q") {
        return false;
      }
    }

    // bottom right check diagonally
    for (let r = row, c = col; r < board.length && c < board.length; c++, r++) {
      if (board[r][c] === "Q") {
        return false;
      }
    }

    // top right check diagonally
    for (let r = row, c = col; r >= 0 && c < board.length; c++, r--) {
      if (board[r][c] === "Q") {
        return false;
      }
    }

    // bottom left check diagonally
    for (let r = row, c = col; r < board.length && c >= 0; c--, r++) {
      if (board[r][c] === "Q") {
        return false;
      }
    }

    return true;
  };

  const saveBoard = (board: string[][]) => {
    const result = [];
    for (let i = 0; i < board.length; i++) {
      let resultStr = "";
      for (let j = 0; j < board.length; j++) {
        resultStr += board[i][j] === "Q" ? "Q" : ".";
      }
      result.push(resultStr);
    }
    allBoardResult.push(result);
  };

  const backTrackingQueen = (board: string[][], col: number) => {
    if (col === board.length) {
      saveBoard(board);
      return;
    }

    for (let row = 0; row < board.length; row++) {
      if (isSafe(board, row, col)) {
        board[row][col] = "Q";
        backTrackingQueen(board, col + 1);
        board[row][col] = ".";
      }
    }
  };

  backTrackingQueen(board, 0);

  return allBoardResult.length;
};

console.log(solveNQueenProblem(4));
