const Input = () => {
	return (
		<div>
			<h1 className="py-4">Input</h1>
			<div className="flex flex-col gap-4">
				<input
					className="block w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
					placeholder="Search for anything..."
					type="text"
					name="search"
				/>

				<input
					className="block w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
					placeholder="Search for anything..."
					type="text"
					name="search"
				/>
			</div>

			<p
				onMouseDown={(e) => {
					e.preventDefault();
					// alert('Hello');
				}}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod
			</p>
		</div>
	);
};

export default Input;
