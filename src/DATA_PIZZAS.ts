import { IPizza } from "./components/PizzaItem/types";

export const DATA_PIZZAS: IPizza[] = [
	{
		id: "0",
		imageUrl:
			"https://media.dodostatic.net/image/r:584x584/11EE7D6149EB101D8727573088FA2EFF.avif",
		title: "Диабло 🌶🌶",
		types: [0, 1],
		sizes: [25, 30, 35],
		price: 629,
		category: 4,
		rating: 4,
		description:
			"Острые колбаски чоризо , острый перец халапеньо , соус барбекю, митболы из говядины , томаты , сладкий перец , красный лук , моцарелла, фирменный томатный соус",
	},
	{
		id: "1",
		imageUrl:
			"https://media.dodostatic.net/image/r:584x584/11EE7D610D2925109AB2E1C92CC5383C.avif",
		title: "Сырная 🌱👶",
		types: [0],
		sizes: [25, 35],
		price: 299,
		category: 5,
		rating: 6,
		description: "Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо",
	},
	{
		id: "2",
		imageUrl:
			"https://media.dodostatic.net/image/r:584x584/11EE7D6110059795842D40396BCF1E73.avif",
		title: "Цыпленок барбекю",
		types: [0],
		sizes: [25, 35],
		price: 629,
		category: 3,
		rating: 4,
		description:
			"Цыпленок , бекон , соус барбекю, красный лук , моцарелла, фирменный томатный соус",
	},
	{
		id: "3",
		imageUrl:
			"https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
		title: "Двойной цыпленок 👶",
		types: [1],
		sizes: [25, 30, 35],
		price: 459,
		category: 5,
		rating: 8,
		description: "Цыпленок , моцарелла, фирменный соус альфредо",
	},
	{
		id: "4",
		imageUrl:
			"https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif",
		title: "Чизбургер-пицца",
		types: [0, 1],
		sizes: [25, 30, 35],
		price: 509,
		category: 3,
		rating: 8,
		description:
			"Ветчина , маринованные огурчики , томаты , красный лук , чеснок , соус бургер, моцарелла, фирменный томатный соус",
	},
	{
		id: "5",
		imageUrl:
			"https://media.dodostatic.net/image/r:584x584/11EE7D6122BB3424B593BB15EACE3197.avif",
		title: "Двойная пепперони",
		types: [0],
		sizes: [30, 35],
		price: 569,
		category: 1,
		rating: 2,
		description:
			"Двойная порция пикантной пепперони , увеличенная порция моцареллы, фирменный томатный соус",
	},
	{
		id: "6",
		imageUrl:
			"https://media.dodostatic.net/image/r:584x584/11EE7D610A62D78598406363A9A8AD65.avif",
		title: "Пепперони",
		types: [0, 1],
		sizes: [25, 30, 35],
		price: 499,
		category: 1,
		rating: 9,
		description:
			"Пикантная пепперони , увеличенная порция моцареллы, фирменный томатный соус",
	},
	{
		id: "7",
		imageUrl:
			"https://media.dodostatic.net/image/r:584x584/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
		title: "Маргарита 🌱",
		types: [0, 1],
		sizes: [25, 30, 35],
		price: 489,
		category: 2,
		rating: 10,
		description:
			"Увеличенная порция моцареллы, томаты , итальянские травы , фирменный томатный соус",
	},
	{
		id: "8",
		imageUrl:
			"https://media.dodostatic.net/image/r:584x584/11EE7D611ADF5AAD898B8B651186E023.avif",
		title: "Четыре сезона",
		types: [0, 1],
		sizes: [25, 30, 35],
		price: 499,
		category: 5,
		rating: 10,
		description:
			"Увеличенная порция моцареллы, ветчина , пикантная пепперони , кубики брынзы , томаты , шампиньоны , итальянские травы , фирменный томатный соус",
	},
	{
		id: "9",
		imageUrl:
			"https://media.dodostatic.net/image/r:584x584/11EE7D61546D8483A61A0BBAA7ADCC78.avif",
		title: "Овощи и грибы 🌱",
		types: [0, 1],
		sizes: [25, 30, 35],
		price: 559,
		category: 2,
		rating: 7,
		description:
			"Шампиньоны , томаты , сладкий перец , красный лук , кубики брынзы , моцарелла, фирменный томатный соус, итальянские травы ",
	},
	{
		id: "10",
		imageUrl:
			"https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
		title: "Мясная с аджикой 🌶🌶",
		types: [0, 1],
		sizes: [25, 30, 35],
		price: 549,
		category: 4,
		rating: 6,
		description:
			"Баварские колбаски , острый соус аджика, острые колбаски чоризо , цыпленок , пикантная пепперони , моцарелла, фирменный томатный соус",
	},
];
	
	// [
// 	{
// 		id: 0,
// 		imageUrl:
// 			"https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
// 		title: "Пепперони Фреш с перцем",
// 		types: [0, 1],
// 		sizes: [26, 30, 40],
// 		price: 803,
// 		category: 0,
// 		rating: 4,
// 	},
// 	{
// 		id: 1,
// 		imageUrl:
// 			"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
// 		title: "Сырная",
// 		types: [0],
// 		sizes: [26, 40],
// 		price: 245,
// 		category: 0,
// 		rating: 6,
// 	},
// 	{
// 		id: 2,
// 		imageUrl:
// 			"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
// 		title: "Цыпленок барбекю",
// 		types: [0],
// 		sizes: [26, 40],
// 		price: 295,
// 		category: 1,
// 		rating: 4,
// 	},
// 	{
// 		id: 3,
// 		imageUrl:
// 			"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",
// 		title: "Кисло-сладкий цыпленок",
// 		types: [1],
// 		sizes: [26, 30, 40],
// 		price: 275,
// 		category: 2,
// 		rating: 2,
// 	},
// 	{
// 		id: 4,
// 		imageUrl:
// 			"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
// 		title: "Чизбургер-пицца",
// 		types: [0, 1],
// 		sizes: [26, 30, 40],
// 		price: 415,
// 		category: 3,
// 		rating: 8,
// 	},
// 	{
// 		id: 5,
// 		imageUrl:
// 			"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg",
// 		title: "Крэйзи пепперони",
// 		types: [0],
// 		sizes: [30, 40],
// 		price: 580,
// 		category: 2,
// 		rating: 2,
// 	},
// 	{
// 		id: 6,
// 		imageUrl:
// 			"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
// 		title: "Пепперони",
// 		types: [0, 1],
// 		sizes: [26, 30, 40],
// 		price: 675,
// 		category: 1,
// 		rating: 9,
// 	},
// 	{
// 		id: 7,
// 		imageUrl:
// 			"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
// 		title: "Маргарита",
// 		types: [0, 1],
// 		sizes: [26, 30, 40],
// 		price: 450,
// 		category: 4,
// 		rating: 10,
// 	},
// 	{
// 		id: 8,
// 		imageUrl:
// 			"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
// 		title: "Четыре сезона",
// 		types: [0, 1],
// 		sizes: [26, 30, 40],
// 		price: 395,
// 		category: 5,
// 		rating: 10,
// 	},
// 	{
// 		id: 9,
// 		imageUrl:
// 			"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg",
// 		title: "Овощи и грибы 🌱",
// 		types: [0, 1],
// 		sizes: [26, 30, 40],
// 		price: 285,
// 		category: 5,
// 		rating: 7,
// 	},
// ];
