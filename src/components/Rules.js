import rules from "../assets/images/image-rules.svg";
import close from "../assets/images/icon-close.svg";
import { useState } from "react";
function Rules() {
	const [open, setOpen] = useState(false);
	function closeHandler() {
		setOpen(false);
	}
	return (
		<>
			{open && (
				<div className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-black md:flex md:items-center md:justify-center bg-opacity-40">
					<div className="md:relative md:top-0 md:bottom-0  flex flex-col items-center justify-start w-full md:max-w-[40%] md:min-w-[500px] h-screen gap-20 p-14 bg-white md:h-[60vh] px-7 md:text-5xl md:rounded-2xl">
						<h1 className="text-3xl font-bold tracking-tighter md:relative md:w-full md:left-4 md:text-left text-darkText">
							RULES
						</h1>
						<img src={rules} alt="rules" className="pb-16 md:scale-[1.2]" />
						<span
							onClick={closeHandler}
							className="right-10 md:-order-1 md:absolute"
						>
							<img src={close} alt="btn-close" className="md:scale-[1.2]" />
						</span>
					</div>
				</div>
			)}
			<div className="flex justify-center w-full md:justify-end md:items-end">
				<button
					onClick={setOpen.bind(true)}
					className="px-12 py-2 text-2xl text-white border-2 border-white rounded-xl font-barlow"
				>
					RULES
				</button>
			</div>
		</>
	);
}
export default Rules;
