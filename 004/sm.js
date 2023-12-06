//Nauja tema: Set(as), turi specifines savybes


const array = [];

array.push(10);

const set = new Set();

set.add(10);
set.add(7);
set.add(7);
set.add(7);
set.add(10);
set.add(1235);
set.add(71);
set.add(6);
set.delete(7);
console.log(set.has(10), set.size);

const setArray = [...set];
setArray.sort((a, b) => a - b);
console.log(setArray);

set.clear();
setArray.forEach(item=>set.add(item));

console.log(set);

randSet = new Set();

while(rand.size < 10) {
    rand.Set.add(round(0, 11))
};

console.log(randSet);

//MAPas, nauja tema

const map = new Map();
map.set('petras', 39);
map.set('petras', 39);
map.set('petras', 39);
map.set('petras', 39);

for(const item of map) {
    console.log(key, value);
}
