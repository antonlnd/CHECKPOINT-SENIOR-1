export const groupBy = (collection, iterator) => {
	const group = {};
	collection.forEach(elem => {
		let key = (typeof iterator === 'function') ? key = iterator(elem) : key = elem[iterator];
		if (group[key]) {group[key].push(elem);} else {group[key] = [elem];}
	});
	return group;
};
export const flowRight = () => {
	let i = arguments.length - 1
	for (i; i >= 0; i--) {if (i >= 1) {return arguments[i](arguments[i - 1])} else {return arguments[0]()}}
};
