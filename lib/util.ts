
export type Promisify<T> = T extends (...args: infer TArgs) => infer TReturn
	? (...args: TArgs) => Promise<TReturn>
	: never;

export type Replacer<TArgs extends any[] = never> = (
	text: string,
	...args: TArgs
) => string;

export type AsyncReplacer<TArgs extends any[]> = Promisify<Replacer<TArgs>>;

export const composeReplacers =
	<TArgs extends any[]>(replacers: Replacer<TArgs>[]): Replacer<TArgs> =>
	(text, ...args) =>
		replacers.reduce((acc, replace) => replace(acc, ...args), text);

export const replaceAsync = async (
	str: string,
	regex: RegExp,
	replacer: (...args: string[]) => Promise<string>
) => {
	const promises: Promise<string>[] = [];
	str.replace(regex, (...args: string[]) => {
		promises.push(replacer(...args));
		return '';
	});
	const data = await Promise.all(promises);
	return str.replace(regex, () => data.shift()!);
};
