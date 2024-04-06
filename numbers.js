/* парс Number.parseFloat() and Number.parseInt() */

// let elementWidth = "764px";
// elementWidth = Number.parseInt(elementWidth);
// console.log("elementWidth: ", elementWidth);

// let elementHight = "3465.897px";
// console.log("elementHight: ", Number.parseFloat(elementHight));

/* Method toFixed use for reduce quntity after '.' */

// let salary = 1675.84639;
// console.log(Number(salary.toFixed(2)));

/* NaN = Not a Number, то что привести к числу не возможно */

// let quntity = "67";
// let string = "Строку к числе привести невозможно, получим NaN";

// console.log(Number(quntity));
// console.log(Number(string));

// Math
// - возведение в степень pow()
// * первая переменная число которое возводим в степень
//  * второе числе в какую степень

//- Exponent operstor (value ** value)

// const base = 5;
// const power = 2;

// const result = Math.pow(base, power);

// console.log(Math.pow(4, 2));
// console.log(result);
// console.log(2 ** 5);

/* Task 1 calculate for power */

// let base = prompt("base number");
// base = Number(base);
// console.log(base);

// let power = prompt("power number");
// power = Number(power)
// console.log(power);

// const value = Math.pow(base, power);
// console.log(value);
// alert(value);

// console.log('hi')

/* generate random numbers by :
- Math.random() 
- Math.round() 
   * Для округления числа
- (Math.random() * (max - min) + min) 
   *it is for random number in your own diaposone */

// console.log(Math.random() * (30 - 10) + 30);

// console.log(Math.round(67.243));

// const max = 70;
// const min = 20;
// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);

/? Exemple when we use that method ?/;

// const colors = ['tomato', 'teal', 'blue', 'black', 'brown', 'red']
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];
//  console.log(color)

//  document.body.style.backgroundColor = color
