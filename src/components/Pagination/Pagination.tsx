import { ChevronLeft, ChevronRight } from "lucide-react";
import { IPagination } from "./types";
import clsx from "clsx";

export function Pagination({
  pageCount,
  currentPage,
	setCurrentPage,
	handlePrevPage,
	handleNextPage,
}: IPagination) {
  return (
    <ul className="pagination__list">
			<button
				className={clsx(
					`pagination__item ${currentPage === 1 ? "disabled" : ""}`
				)}
				onClick={handlePrevPage}
			>
				<ChevronLeft />
			</button>

			{[...Array(pageCount)].map((_, index) => (
				<li
					className={clsx(
						`pagination__item ${currentPage === index + 1 ? "item-active" : ""}`
					)}
					key={index}
					onClick={() => setCurrentPage(index + 1)}
				>
					{index + 1}
				</li>
			))}

			<button
				className={clsx(
					`pagination__item ${currentPage === pageCount ? "disabled" : ""}`
				)}
				onClick={handleNextPage}
			>
				<ChevronRight />
			</button>
		</ul>
	);
}
