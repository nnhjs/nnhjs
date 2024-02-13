import clsx from "clsx";
import { useState } from "react";
import Board from "src/apps/App/TicTacToe/Board.tsx";

function Game() {
	const [history, setHistory] = useState<(string | null)[][]>([
		Array(9).fill(null),
	]);
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
		let description: string;
		if (move > 0) {
			description = `Back to move #${move}`;
		} else {
			description = "Go to game start";
		}
		return (
			<li
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				key={move}
				className={clsx(
					"my-2 rounded-md bg-gray-100 px-2",
					move === currentMove && "bg-blue-200",
				)}
			>
				<button onClick={() => jumpTo(move)} type="button">
					{description}
				</button>
			</li>
		);
	});

	return (
		<>
			<h1 className="py-16 text-center">Tic-Toc-Toe</h1>
			<div className="flex justify-center gap-16">
				<Board
					xIsNext={xIsNext}
					squares={currentSquares}
					onPlay={handlePlay}
					currentMove={currentMove}
					newGame={newGame}
				/>
				<div className="flex flex-col gap-1">
					History
					<ol>{moves}</ol>
				</div>
			</div>
		</>
	);
}

export default Game;
