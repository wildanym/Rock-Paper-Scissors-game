function Header(props) {
	return (
		<div className="flex items-center justify-between w-full p-4 border-4 border-solid rounded-md md:max-w-5xl border-hOutline">
			<div className="flex flex-col pl-2 text-2xl text-white md:text-4xl font-barlow">
				<div className="leading-[19px] md:leading-[30px]">
					ROCK
					<br />
					PAPER
					<br />
					SCISSORS
				</div>
			</div>
			<div className="font-barlow flex p-2 flex-col items-center h-fit w-[35%] bg-white rounded-md sm:max-w-[15%]">
				<p className="text-sm font-semibold tracking-widest text-score">
					SCORE
				</p>
				<p className="text-5xl font-bold text-darkText">{props.count}</p>
			</div>
		</div>
	);
}

export default Header;
