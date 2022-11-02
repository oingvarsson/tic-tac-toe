const checkWinner = board => {
  const columns = board.map((row, y) => row.map((token, x) => board[x][y]));
  const diagonals = [];
  diagonals.push(board.map((row, i) => board[i][i]));
  diagonals.push(board.map((row, i) => board[i][board.length-1-i]));

  let winner = null;
  for (const arr of [...columns, ...board, ...diagonals]) {
    if (arr.length === arr.filter(token => token === arr[0] && token!=='').length)
      winner = arr[0];
  }

  if (board.flat().find(square => square === '') === undefined) return 'draw';
  return winner;
};

export default checkWinner;
