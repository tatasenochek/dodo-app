export const url = "https://66e86c47b17821a9d9dca8b5.mockapi.io/pizza";

export const categories: string[] = [
	"Все",
	"Мясные",
	"Вегетарианская",
	"Гриль",
	"Острые",
	"Детские",
];

export type sortedType = {
	sortName: string;
	sortProperty: string;
}

export const sortedParams: sortedType[] = [
	{
		sortName: "популярности",
		sortProperty: "rating",
	},
	{
		sortName: "цене",
		sortProperty: "price",
	},
	{
		sortName: "алфавиту",
		sortProperty: "title",
	},
];
