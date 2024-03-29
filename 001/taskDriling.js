// Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra 

const { sort } = require("semver");

// atspausdinamas su console.log
console.log('1. Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra atspausdinamas su console.log;')

const labas = 'Labas rytas Lietuva!';
function text(labas) {return labas};
console.log(text (labas));


console.log('2. ---------')
// Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, 
// įterpiamas atspausdinamas su console.log, o antrasis kiek kartų 
// spausdinimas atliekamas. Rašydami šią funkciją remkitės pirmame 
// uždavinyje parašytą funkciją;

// I var:

let kartai = 2; 

for (let counter = 1; counter <= kartai; counter++) {
console.log(labas);
}

// II var: 

(function loop(i) {
    if (i < kartai) {
      console.log(labas);
      loop(i + 1);
    }
  }(0));

  // III var:
 
console.log(labas.repeat(kartai));

console.log('4. ---------')// Parašykite funkciją, 
// kuri skaičiuotų, iš kiek sveikų skaičių jos 
// argumentas dalijasi be liekanos (išskyrus 
//     vienetą ir patį save)

function countDivisors(num) {
    if (num < 2) {return 0;
    }

    let dalmenuSkaic = 0;
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        dalmenuSkaic++;
  
        if (i !== num / i) {
          dalmenuSkaic++;
        }
      }
    }
    return dalmenuSkaic;
  }

  let numberToCheck = 16;

  const result = countDivisors(numberToCheck);

  console.log(`The number ${numberToCheck} has ${result} divisors.`);


console.log('5. ---------')// Sugeneruokite masyvą 
//   iš 100 elementų, kurio reikšmės atsitiktiniai 
//   skaičiai nuo 33 iki 77. Išrūšiuokite masyvą 
//   pagal daliklių be liekanos kiekį mažėjimo 
//   tvarka, panaudodami ketvirto uždavinio funkciją.

function getRandomArray(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
     
    
    const randomArray = [];
    
    for (let i = 0; i < 100; i++) {
        const randomNumber = getRandomArray(33, 77);
        randomArray.push(randomNumber);
    }
    


const dalmenuSkaicius = countDivisors(randomArray);
console.log(dalmenuSkaicius);
// console.log(randomArray.sort((a, b) => a - b));




















// Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 333 iki 777. Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius skaičius.
// Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas. Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų. Paskutinio masyvo paskutinis elementas yra lygus 0;
// Suskaičiuokite septinto uždavinio elementų, kurie nėra masyvai, sumą. Skaičiuoti reikia visuose masyvuose ir submasyvuose.
// Sugeneruokite masyvą iš trijų elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 33. Jeigu tarp trijų paskutinių elementų yra nors vienas ne pirminis skaičius, prie masyvo pridėkite dar vieną elementą- atsitiktinį skaičių nuo 1 iki 33. Vėl patikrinkite pradinę sąlygą ir jeigu reikia pridėkite dar vieną elementą. Kartokite, kol sąlyga nereikalaus pridėti elemento. 
// Sugeneruokite masyvą iš 10 elementų, kurie yra masyvai iš 10 elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 100. Jeigu tokio didelio masyvo (ne atskirai mažesnių) pirminių skaičių vidurkis mažesnis už 70, suraskite masyve mažiausią skaičių (nebūtinai pirminį) ir prie jo pridėkite 3. Vėl paskaičiuokite masyvo pirminių skaičių vidurkį ir jeigu mažesnis nei 70 viską kartokite. 
