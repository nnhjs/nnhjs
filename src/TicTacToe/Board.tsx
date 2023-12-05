import { Button, Flex, Text } from '@radix-ui/themes';
import { calculateWinner } from 'src/TicTacToe/utils.ts';
import clsx from 'clsx';

function Square({
  value,
  onSquareClick,
  winnerItem,
  disabled,
}: {
  value: string | null;
  onSquareClick: () => void;
  winnerItem: boolean;
  disabled: boolean;
}) {
  return (
    <Button
      className={clsx('h-16 w-16 border-4', winnerItem && 'bg-green-200')}
      variant="soft"
      onClick={onSquareClick}
      disabled={disabled}
    >
      <Text size="6">{value}</Text>
    </Button>
  );
}

function Board({
  xIsNext,
  squares,
  onPlay,
  currentMove,
  newGame,
}: {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (nextSquares: (string | null)[]) => void;
  currentMove: number;
  newGame: () => void;
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

  let status: string;
  let line: number[] = [];
  if (winner) {
    status = 'Winner: ' + winner.name + ' 🎉';
    line = winner.line;
  } else if (currentMove === 9) {
    status = 'Draw 🤝';
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const gameOver = Boolean(currentMove === 9 || winner);

  return (
    <Flex className="gap-16">
      <Flex>
        <Button size="3" onClick={newGame} variant="soft" disabled={!gameOver}>
          New Game
        </Button>
      </Flex>

      <Flex direction="column" gap="4">
        <div className="status">{status}</div>
        <Flex gap="4">
          {[0, 1, 2].map((item) => (
            <Square
              key={item}
              value={squares[item]}
              onSquareClick={() => handleClick(item)}
              winnerItem={line.includes(item)}
              disabled={gameOver}
            />
          ))}
        </Flex>
        <Flex gap="4">
          {[3, 4, 5].map((item) => (
            <Square
              key={item}
              value={squares[item]}
              onSquareClick={() => handleClick(item)}
              winnerItem={line.includes(item)}
              disabled={gameOver}
            />
          ))}
        </Flex>
        <Flex gap="4">
          {[6, 7, 8].map((item) => (
            <Square
              key={item}
              value={squares[item]}
              onSquareClick={() => handleClick(item)}
              winnerItem={line.includes(item)}
              disabled={gameOver}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Board;
