import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { sortedParams } from "../../constant/constant";
import { ISort } from "./types";

export function Sort({
	activeIndexSort,
	onclick,
	handlerSorted,
	sortOrder,
}: ISort) {
	const [isVisible, setIsVisible] = useState<boolean>(true);

	function handlerActivSortedParams(index: number) {
		onclick(index);
		setIsVisible(true);
	}

	return (
		<div className="sort">
			<div className="sort__label">
				{sortOrder ? (
					<ChevronUp size={14} onClick={handlerSorted} />
				) : (
					<ChevronDown size={14} onClick={handlerSorted} />
				)}
				<b>Сортировка по:</b>
				<span onClick={() => setIsVisible(!isVisible)}>
					{sortedParams[activeIndexSort].sortName}
				</span>
			</div>
			<ul className={clsx(`sort__popup ${isVisible === true ? "hidden" : ""}`)}>
				{sortedParams.map((item, index) => (
					<li
						key={index}
						onClick={() => handlerActivSortedParams(index)}
						className={clsx(`${activeIndexSort === index ? "active" : ""}`)}
					>
						{item.sortName}
					</li>
				))}
			</ul>
		</div>
	);
}
