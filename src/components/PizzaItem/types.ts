export interface IPizza {
	id: string;
	imageUrl: string;
	title: string;
	types: number[];
	sizes: number[];
	price: number;
	category: number;
	rating: number;
	description: string;
}

export interface IPizzaItems {
  pizza: IPizza
}