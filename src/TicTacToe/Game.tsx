import { useState } from 'react';
import Board from 'src/TicTacToe/Board.tsx';
import { Button, Flex, Heading } from '@radix-ui/themes';
import clsx from 'clsx';

function Game() {
  const [history, setHistory] = useState<(string | null)[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: (string | null)[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  function newGame() {
    setCurrentMove(0);
    setHistory([[]]);
  }

  const moves = history.map((_, move) => {
    let description;
    if (move > 0) {
      description = 'Back to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move} className={clsx('my-2 rounded-md bg-gray-100 px-2', move === currentMove && 'bg-red-200')}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <Heading as="h2" size="8" className="py-16 text-center">
        Tic-Toc-Toe
      </Heading>
      <Flex className="justify-center gap-16">
        <Flex>
          <Button size="3" onClick={newGame} variant="soft">
            New Game
          </Button>
        </Flex>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} currentMove={currentMove} />
        <Flex className="flex-col gap-1">
          History
          <ol>{moves}</ol>
        </Flex>
      </Flex>
    </>
  );
}

export default Game;
