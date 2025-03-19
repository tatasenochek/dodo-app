export interface IPagination {
	pageCount: number;
	currentPage: number;
	setCurrentPage: (i: number) => void;
	handlePrevPage: () => void;
	handleNextPage: () => void;
}
