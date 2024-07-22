/**
 * @desc solveNQueen method returns all possible combination where a queen can be placed safely
 * @param n : N indicates chessBoardSize (n x n)
 */
export const solveNQueen = (n: number): string[][] => {
  const allBoardResult: string[][] = [];
  const chessBoard: string[][] = [
    ...new Array(n).fill(null).map(() => new Array(n).fill(null)),
  ];

  const isSafeToAddQueen = (
    row: number,
    col: number,
    chessBoard: string[][]
  ) => {
    // check for horizontal placement
    for (let i = 0; i < chessBoard.length; i++) {
      if (chessBoard[row][i] === "Q") {
        return false;
      }
    }

    // check for vertical placement
    for (let j = 0; j < chessBoard[0].length; j++) {
      if (chessBoard[j][col] === "Q") {
        return false;
      }
    }

    // check for upper left diagonal placement
    for (let r = row, c = col; r >= 0 && c >= 0; r--, c--) {
      if (chessBoard[r][c] === "Q") {
        return false;
      }
    }

    // check for bottom right diagonal placement
    for (
      let r = row, c = col;
      r < chessBoard.length && c < chessBoard.length;
      c++, r++
    ) {
      if (chessBoard[r][c] === "Q") {
        return false;
      }
    }

    // check for top right diagonal placement
    for (let r = row, c = col; r >= 0 && c < chessBoard.length; r--, c++) {
      if (chessBoard[r][c] === "Q") {
        return false;
      }
    }

    // check for bottom left diagonal placement
    for (let r = row, c = col; r < chessBoard.length && c >= 0; r++, c--) {
      if (chessBoard[r][c] === "Q") {
        return false;
      }
    }

    return true;
  };

  const saveBoard = (board: string[][]) => {
    const result = [];
    for (let i = 0; i < board.length; i++) {
      let boardRowString = "";
      for (let j = 0; j < board[i].length; j++) {
        boardRowString += board[i][j] === "Q" ? "Q" : ".";
      }
      result.push(boardRowString);
    }
    allBoardResult.push(result);
  };

  const queenTracking = (chessBoard: string[][], col: number) => {
    if (col === chessBoard.length) {
      saveBoard(chessBoard);
      return;
    }

    for (let row = 0; row < chessBoard.length; row++) {
      if (isSafeToAddQueen(row, col, chessBoard)) {
        chessBoard[row][col] = "Q";
        queenTracking(chessBoard, col + 1);
        chessBoard[row][col] = ".";
      }
    }
  };

  queenTracking(chessBoard, 0);

  return allBoardResult;
};

console.log(solveNQueen(5));
