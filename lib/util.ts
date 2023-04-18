export type ArrayElement<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

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
