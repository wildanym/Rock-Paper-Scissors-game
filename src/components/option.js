import "../index.css";

function Option(props) {
	return (
		<div
			className={`relative flex items-center justify-center rounded-full w-[135px] h-[135px] ${props.class}`}
		>
			<div
				className={`absolute h-[140px] ${props.class} brightness-50 -z-10 -bottom-[0.34rem] rounded-full w-[135px]`}
			></div>
			{props.result && (
				<>
					<div className="absolute h-[165px] bg-white opacity-[0.03] rounded-full w-[165px]"></div>
					<div className="absolute h-[220px] bg-white opacity-[0.03] rounded-full w-[220px]"></div>
					<div className="absolute h-[280px] bg-white opacity-[0.02] rounded-full w-[280px]"></div>
				</>
			)}

			<div className="relative items-center justify-center w-[6.5rem] h-[6.5rem] overflow-hidden bg-white rounded-full felx ">
				<div className="absolute h-[6.5rem] border-black opacity-25 border-t-[6px] rounded-full w-[6.5rem]"></div>
				<img
					className={`absolute scale-[.9] left-6 ${props.top}`}
					src={props.img}
					alt="icon"
				/>
			</div>
		</div>
	);
}

export default Option;
