import { Button, Flex, Text } from '@radix-ui/themes';
import { calculateWinner } from 'src/TicTacToe/utils.ts';
import clsx from 'clsx';

function Square({
  value,
  onSquareClick,
  winnerItem,
}: {
  value: string | null;
  onSquareClick: () => void;
  winnerItem: boolean;
}) {
  return (
    <Button className={clsx('h-16 w-16 border-4', winnerItem && 'bg-green-200')} variant="soft" onClick={onSquareClick}>
      <Text size="6">{value}</Text>
    </Button>
  );
}

function Board({
  xIsNext,
  squares,
  onPlay,
  currentMove,
}: {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (nextSquares: (string | null)[]) => void;
  currentMove: number;
}) {
  const winner = calculateWinner(squares);
  function handleClick(i: number) {
    if (winner || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }
  let status;
  let line;
  if (winner) {
    status = 'Winner: ' + winner.name + ' 🎉';
    line = winner.line;
  } else if (currentMove === 9) {
    status = 'Draw 🤝';
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <Flex direction="column" gap="4">
      <div className="status">{status}</div>
      <Flex gap="4">
        {[0, 1, 2].map((item) => (
          <Square value={squares[item]} onSquareClick={() => handleClick(item)} winnerItem={!!line?.includes(item)} />
        ))}
      </Flex>
      <Flex gap="4">
        {[3, 4, 5].map((item) => (
          <Square value={squares[item]} onSquareClick={() => handleClick(item)} winnerItem={!!line?.includes(item)} />
        ))}
      </Flex>
      <Flex gap="4">
        {[6, 7, 8].map((item) => (
          <Square value={squares[item]} onSquareClick={() => handleClick(item)} winnerItem={!!line?.includes(item)} />
        ))}
      </Flex>
    </Flex>
  );
}

export default Board;
