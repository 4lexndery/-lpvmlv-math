// IF YOU STEAL MY CODE THEN JOIN MY DISCORD SERVER discord.gg/KkGrkMjJVT

module.exports.add = function (frt, sec) {
	let result = frt + sec
	return result
}

module.exports.sub = function (frt, sec) {
	let result = frt - sec
	return result
}

module.exports.mul = function (frt, sec) {
	let result = frt * sec
	return result
}

module.exports.div = function (frt, sec) {
	let result = frt / sec
	return result
}

module.exports.mod = function (frt, sec) {
	let result = frt % sec
	return result
}

module.exports.exp = function (num, exp) {
	let result = num ** exp
	return result
}

module.exports.random = function (max,min) {
	let result = Math.floor(Math.random() * (max -min + 1)) + min
	return result
}

module.exports.randomVal = function (arr) {
	let result = arr[Math.floor(Math.random() * arr.length)]
	return result
}
