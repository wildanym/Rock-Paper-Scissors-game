import Option from "./option";
import triangle from "../assets/images/bg-triangle.svg";
import scissors from "../assets/images/icon-scissors.svg";
import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import { useState } from "react";
function PlayArea(props) {
	const [player, setPlayer] = useState("");
	const [house, setHouse] = useState("");
	const [result, setResult] = useState("");
	const [isShow, setIsShow] = useState(false);

	function playing(pick) {
		setIsShow(true);
		setPlayer(pick);
		let housePick;
		let result;
		let math = Math.floor(Math.random() * 10);
		if (math <= 3) housePick = "scissors";
		if (math > 3 && math < 7) housePick = "paper";
		if (math > 6 && math <= 10) housePick = "rock";
		setHouse(housePick);
		if (housePick === pick) {
			result = "DRAW";
		} else if (housePick === "scissors") {
			pick === "paper" ? (result = "YOU LOSE") : (result = "YOU WIN");
		} else if (housePick === "paper") {
			pick === "scissors" ? (result = "YOU WIN") : (result = "YOU LOSE");
		} else if (housePick === "rock") {
			pick === "paper" ? (result = "YOU WIN") : (result = "YOU LOSE");
		}
		if (result === "YOU WIN") {
			props.setCount(1);
		} else if (result === "YOU LOSE") {
			props.setCount(-1);
		}
		setResult(result);
	}
	return (
		<>
			{!isShow ? (
				<div className="relative flex flex-col gap-2 md:mt-28 md:pt-10 min-w-[296px] mb-24 md:scale-[1.7]">
					<div className="relative z-10 flex items-center justify-between bg-transparent ">
						<div
							onClick={() => {
								playing("scissors");
							}}
							className="transition-all hover:scale-105"
						>
							<Option
								clickable={true}
								class="scissors-bg"
								img={scissors}
								top="top-5"
							/>
						</div>
						<div
							onClick={() => {
								playing("paper");
							}}
							className="transition-all hover:scale-105"
						>
							<Option
								clickable={true}
								class="paper-bg"
								img={paper}
								top="top-5"
							/>
						</div>
					</div>
					<div className="relative z-10 flex items-center justify-center ">
						<div
							onClick={() => {
								playing("rock");
							}}
							className="transition-all hover:scale-105"
						>
							<Option clickable={true} class="rock-bg" img={rock} top="top-7" />
						</div>
					</div>
					<img
						src={triangle}
						alt="triangle"
						className="absolute z-0 scale-[.7]"
					/>
				</div>
			) : (
				<div className="flex flex-col gap-20 md:relative ">
					<div className="flex gap-7 md:scale-[2] md:gap-44">
						<div
							className={`relative ${
								result === "YOU WIN" ? "z-10" : "z-20"
							} flex flex-col items-center gap-4`}
						>
							{player === "scissors" && (
								<Option
									result={result === "YOU WIN" ? true : false}
									class="scissors-bg"
									img={scissors}
									top="top-5"
								/>
							)}
							{player === "paper" && (
								<Option
									result={result === "YOU WIN" ? true : false}
									class="paper-bg"
									img={paper}
									top="top-5"
								/>
							)}
							{player === "rock" && (
								<Option
									result={result === "YOU WIN" ? true : false}
									class="rock-bg"
									img={rock}
									top="top-7"
								/>
							)}
							<p className="text-sm font-bold tracking-widest text-white md:-order-1 font-barlow">
								YOU PICKED
							</p>
						</div>
						<div
							className={`relative ${
								result === "YOU LOSE" ? "z-10" : "z-20"
							} flex flex-col items-center gap-4`}
						>
							{house === "scissors" && (
								<Option
									result={result === "YOU LOSE" ? true : false}
									class="scissors-bg"
									img={scissors}
									top="top-4"
								/>
							)}
							{house === "paper" && (
								<Option
									result={result === "YOU LOSE" ? true : false}
									class="paper-bg"
									img={paper}
									top="top-4"
								/>
							)}
							{house === "rock" && (
								<Option
									result={result === "YOU LOSE" ? true : false}
									class="rock-bg"
									img={rock}
									top="top-7"
								/>
							)}
							<p className="text-sm font-bold tracking-widest text-white md:-order-1 font-barlow">
								THE HOUSE PICKED
							</p>
						</div>
					</div>

					<div className="flex flex-col items-center gap-6 md:absolute md:right-24">
						<p className="text-5xl font-bold text-white">{result}</p>
						<button
							onClick={setIsShow.bind(this, false)}
							className="px-12 py-4 text-2xl font-semibold tracking-widest bg-white rounded-xl text-darkText"
						>
							PLAY AGAIN
						</button>
					</div>
				</div>
			)}
		</>
	);
}
export default PlayArea;
