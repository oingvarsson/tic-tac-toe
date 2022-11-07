import checkWinner from "./checkwinner.js";

const generateChildBoards = (board, token, idx = -1, boards = []) => {
  const size = board.length;
  const flatBoard = board.flat();
  const position = flatBoard.findIndex((t, i) => t === '' && i > idx);

  if (position > -1) {
    flatBoard[position] = token;
    const newBoard = board.map((b, i) => flatBoard.slice(i * size, i * size + size));
    boards.push(newBoard);
    return generateChildBoards(board, token, position, boards);
  } else {
    return boards;
  }
};

const minimax = (board, depth, maximizing, alpha = -Infinity, beta = Infinity) => {
  const player = maximizing ? 'X' : 'O';
  const winner = checkWinner(board);
  if (winner) {
    return winner === 'draw' ? 0 : winner === 'X' ? 1 : -1;
  }
  if (depth>2) return 0;

  if (maximizing) {
    let maxEval = -Infinity;
    for (let row = 0; row < board.length; row++) {
      for (let column = 0; column < board.length; column++) {
        if (board[row][column] === '') {
          board[row][column] = player;
          const score = minimax(board, depth + 1, !maximizing, alpha, beta);
          board[row][column] = '';
          maxEval = Math.max(maxEval, score);
          alpha = Math.max(score, alpha);
          if (beta >= alpha) break;
        }
        // if (beta >= alpha) break;
      }
    }
    return maxEval;
  } else {
    let minEval = Infinity;
    for (let row = 0; row < board.length; row++) {
      for (let column = 0; column < board.length; column++) {
        if (board[row][column] === '') {
          board[row][column] = player;
          const score = minimax(board, depth + 1, !maximizing, alpha, beta);
          board[row][column] = '';
          minEval = Math.min(minEval, score);
          beta = Math.min(score, beta);
          if (beta <= alpha) break;
        }
        // if (beta <= alpha) break;
      }
    }
    return minEval;
  }
};

const findBestMove = (player, state) => {
  console.log('Finding best move');
  console.time('BestTime');
  console.time('Generate child boards');
  const children = generateChildBoards(state, player);
  console.timeEnd('Generate child boards');

  const bestBoard = children.reduce((best, board) => {
    const score = minimax(board, 0, false);
    return score > best.score ? { board, score } : best;
  }, { board: state, score: -Infinity })

  console.timeEnd('BestTime');
  return bestBoard;
};

export default findBestMove;
