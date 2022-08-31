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

module.exports.fact = function () {
        function ran(arr) {
                let result = arr[Math.floor(Math.random * arr.length)]
                return result
        }

        let array = ["In a room of 23 people there’s a 50% chance that two people have the same birthday.

","The word “hundred” comes from the old Norse term, “hundrath”, which actually means 120 and not 100.","Most mathematical symbols weren’t invented until the 16th century. Before that, equations were written in words.","“Forty” is the only number that is spelt with letters arranged in alphabetical order.

","Conversely, “one” is the only number that is spelt with letters arranged in descending order."]

        let res = ran(array)
}
