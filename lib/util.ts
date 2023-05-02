export type ArrayElement<TArray extends readonly unknown[]> =
	TArray extends readonly (infer TElement)[] ? TElement : never;

export const replaceAsync = async (
	str: string,
	regex: RegExp,
	asyncReplacer: (...args: string[]) => Promise<string>
) => {
	const promises = [] as Promise<string>[];
	str.replace(regex, (...args: string[]) => {
		promises.push(asyncReplacer(...args));
		return '';
	});
	const data = await Promise.all(promises);
	return str.replace(regex, () => data.shift()!);
};
