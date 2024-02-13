import clsx from "clsx";
import { calculateWinner } from "src/apps/App/TicTacToe/utils.ts";

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
		<button
			className={clsx("h-16 w-16 border-4", winnerItem && "bg-green-200")}
			onClick={onSquareClick}
			disabled={disabled}
			type="button"
		>
			<p>{value}</p>
		</button>
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
			nextSquares[i] = "X";
		} else {
			nextSquares[i] = "O";
		}
		onPlay(nextSquares);
	}

	let status: string;
	let line: number[] = [];
	if (winner) {
		status = `Winner: ${winner.name} 🎉`;
		line = winner.line;
	} else if (currentMove === 9) {
		status = "Draw 🤝";
	} else {
		status = `Next player: ${xIsNext ? "X" : "O"}`;
	}

	const gameOver = Boolean(currentMove === 9 || winner);

	return (
		<div className="flex gap-16">
			<div className="flex">
				<button onClick={newGame} disabled={!gameOver} type="button">
					New Game
				</button>
			</div>

			<div className="flex gap-1">
				<div className="status">{status}</div>
				<div className="flex gap-1">
					{[0, 1, 2].map((item) => (
						<Square
							key={item}
							value={squares[item]}
							onSquareClick={() => handleClick(item)}
							winnerItem={line.includes(item)}
							disabled={gameOver}
						/>
					))}
				</div>
				<div className="flex gap-1">
					{[3, 4, 5].map((item) => (
						<Square
							key={item}
							value={squares[item]}
							onSquareClick={() => handleClick(item)}
							winnerItem={line.includes(item)}
							disabled={gameOver}
						/>
					))}
				</div>
				<div className="flex gap-1">
					{[6, 7, 8].map((item) => (
						<Square
							key={item}
							value={squares[item]}
							onSquareClick={() => handleClick(item)}
							winnerItem={line.includes(item)}
							disabled={gameOver}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Board;
