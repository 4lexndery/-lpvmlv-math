[![math-logo](https://i.imgur.com/cq3BIAt.png)](https://math.4lexndery.repl.co)

# Install 'math'

in your terminal type:
`npm i @lpvmlv/math`
or:
`yarn add @lpvmlv/math`

# How to use 'math'

math has 8 functions each of them will be included.

NOTICE - This package[^1] is still in developement, new functions will be added, it's also made by one person[^2] - ECITON

1. `add()`:
> Adds 2 numbers only.

2. `sub()`:
> Subtracts 2 numbers only.

3. `mul()`:
> multiplies 2 numbers only.

4. `div()`:
> divides 2 numbers only.

5. `mod()`:
> modulus with 2 numbers.

6. `exp()`:
> exponentiation first number is a number raised to the power of the second number.

7. `random()`:
> picks a random number between two integer (the first number is the max number and the second is the min number).

8. `randomVal()`:
> takes a random value from an array

example:

```js
const pkg = require('@lpvmlv/math')

const array = [
    /* array values */
]

const add = pkg.add(10,10)
const sub = pkg.sub(10,5)
const mul = pkg.mul(2,10)
const div = pkg.div(10,2)
const mod = pkg.mod(4,3)
const exp = pkg.exp(2,2)
const ran = pkg.random(10,1)
const ranV = pkg.randomVal(array)

console.log(add)
console.log(sub)
console.log(mul)
console.log(div)
console.log(mod)
console.log(exp)
console.log(ran)
console.log(ranV)
```

outputs:
```
20
5
20
5
1
16
* a random number between 1 and 10 *
* a random value in array *
```

now you have enough information about 'math', good luck :thumbsup:

[^1]: Math
[^2]: alec#8712 (discord), 4lexndery ([github](https://github.com/4lexndery))
