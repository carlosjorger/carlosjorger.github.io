export const primaryFormatDate = (stringDate: string) => {
	const date = new Date(stringDate);
	return date.toDateString();
};
