import styles from "./pagination.module.scss"
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
		<ul className={styles["pagination__list"]}>
			<button
				className={clsx(
					styles["pagination__item"],
					currentPage === 1 && styles["disabled"]
				)}
				onClick={handlePrevPage}
			>
				<ChevronLeft />
			</button>

			{[...Array(pageCount)].map((_, index) => (
				<li
					className={clsx(
						styles["pagination__item"],
						currentPage === index + 1 && styles["item-active"]
					)}
					key={index}
					onClick={() => setCurrentPage(index + 1)}
				>
					{index + 1}
				</li>
			))}

			<button
				className={clsx(
					styles["pagination__item"],
					currentPage === pageCount && styles["disabled"]
				)}
				onClick={handleNextPage}
			>
				<ChevronRight />
			</button>
		</ul>
	);
}
