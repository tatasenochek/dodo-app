export interface ISort {
	activeIndexSort: number;
	onclick: (i: number) => void;
	handlerSorted: () => void;
	sortOrder: boolean;
}