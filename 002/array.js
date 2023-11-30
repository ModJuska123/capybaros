// 1. 'pink' to 'black'
// 2. 'pink' to 'skyblue'
console.log('1.Pirmas uzd----------------')
const colors = [
    'pink',
    'orange',
    'yellow',
    'pink',
    'blue',
    'indigo',
    'pink'
];

const colors1 = [...colors];
const colors2 = [...colors];

colors1.forEach((color, index) => {if (color == 'pink'){colors1[index] = 'black';
}
});
console.log(colors1);

colors2.forEach((color, index) => {
    if (color == 'pink'){
        colors2[index] = 'skyblue';
    }
});
console.log(colors2);

// mapas masyvo modifikacijai atlikti

console.log('----------------')
const colors22 = [
    { name: 'pink' },
    { name: 'orange' },
    { name: 'yellow' },
    { name: 'pink' },
    { name: 'blue' },
    { name: 'indigo' },
    { name: 'pink' }
];
// pinks to black


console.log('--------------');
const colors222 = colors22.map(color => color.name == 'pink' ? {name: 'black'} : color);
console.log(colors222);



console.log('--------------');
const colors44 = [
    {name: 'pink', age: 12},
    {name: 'orange', age: 13},
    {name: 'yellow', age: 14},
    {name: 'pink', age: 15},
    {name: 'blue', age: 16},
    {name: 'indigo', age: 17},
    {name: 'pink', age: 18}
];

const colors444 = colors44.map(color => color.name == 'pink' ? {...color, name: 'black'} : color);
console.log(colors444);

//visas spalvas pakeisti i black


console.log('--------------');
const colors441 = [
    {name: 'pink', age: 12},
    {name: 'orange', age: 13},
    {name: 'yellow', age: 14},
    {name: 'pink', age: 15, tractor: 'John Deere'},
    {name: 'blue', age: 16},
    {name: 'indigo', age: 17},
    {name: 'pink', age: 18}
];

const colors442 = colors441.map(color => ({...color, name: 'black'}));
console.log(colors442);

console.log('--------------');
//masyvas bepukiu

const cats = [
    {name: 'Tomas', age: 12},
    {name: 'Pukis', age: 13},
    {name: 'Juodis', age: 14},
    {name: 'Margis', age: 15, tractor: 'John Deere'},
    {name: 'Ryzas', age: 16},
    {name: 'Pukis', age: 17},
    {name: 'Pukis', age: 18}
];

const catsFiltered = cats.filter(cat => cat.name !== 'Pukis');
console.log(catsFiltered);

//be Juodzio ir +1 metai
console.log('--------------');
const cats2 = [
    {name: 'Tomas', age: 12},
    {name: 'Juodis', age: 13},
    {name: 'Juodis', age: 14},
    {name: 'Margis', age: 15, tractor: 'John Deere'},
    {name: 'Ryzas', age: 16},
    {name: 'Pukis', age: 17},
    {name: 'Juodis', age: 18}
];

let noJuodisPlusOne = cats2.filter(cat => cat.name !== 'Juodis').map(cat => ({...cat, age: cat.age + 1}));
console.log(noJuodisPlusOne);

cats2.find((cat, index) =>{console.log(index)})