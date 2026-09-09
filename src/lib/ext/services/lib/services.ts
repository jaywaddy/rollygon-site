import { features } from "./features";

export type TPlanFeature = { asterisk?: string; id: string; list: boolean };
export type TPricePlan = {
	description: string;
	discount: number;
	features: TPlanFeature[];
	featureTitle: string;
	id: string;
	isFeatured: boolean;
	label: string;
	note?: string;
	price: {
		annual: number;
		month: number;
		once: number;
	};
};

const discount = 0.1;
const calPrices = (base: number) => {
	const savingsRate = 0.05;
	const savingsAmount = base * savingsRate;

	return {
		annual: Math.round(base - savingsAmount),
		month: base,
		once: base * 12 * 5,
	};
};

const services: TPricePlan[] = [
	{
		label: "Basic",
		description: "This is the most basic plan.",
		id: "p_1",
		discount: discount,
		features: [
			{ id: "f_1", list: true },
			{ id: "f_2", list: true },
			{ id: "f_3", list: true },
			{ asterisk: "+$12 per seat", id: "f_7", list: true },
		],
		featureTitle: featuresHeading(),
		isFeatured: false,
		price: calPrices(197),
		note: "5 seats",
	},
	{
		label: "Premium",
		description: "This is the most premium plan.",
		id: "p_2",
		discount: discount,
		features: [
			{ id: "f_1", list: false },
			{ id: "f_2", list: false },
			{ id: "f_3", list: false },
			{ id: "f_4", list: true },
			{ id: "f_5", list: true },
			{ id: "f_6", list: true },
			{ id: "f_7", list: true },
			{ id: "f_8", list: true },
		],
		featureTitle: featuresHeading("Basic"),
		isFeatured: true,
		price: calPrices(297),
		note: "20 seats",
	},
];

export function featureLabel(featureId: string) {
	return features.filter(({ id }) => id === featureId)[0].label;
}

function featuresHeading(prevPlan?: string) {
	if (prevPlan) {
		return `All ${prevPlan} features, plus:`;
	}

	return "All features";
}

export default services;
