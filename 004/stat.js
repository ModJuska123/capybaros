console.log('labas rytas');

class TV {
    static channels = ['Polonia', 'Discavery', 'CNN', 'BBC'];

    static listChannels() {                    //man tu kanalu saraso nerodo, tik dest an consoles
        console.log('Available channels:');
        for (const channel of this.channels) {
            console.log(channel);
        }
    }

    constructor(brand, owner) {
        this.brand = brand;
        this.owner = owner;
        this.channels = ['LRT', 'LNK', 'LTV', 'BTV', 'Pukas', 'TV1'];
    }
    changeChannel(number) {
        console.log('Changing chanel...' + this.owner + [': ']+ this.constructor.channels[number]);
    }
    whatChenelsList() {
        this.constructor.listChannels();
    }

    changeChannelList(newChannels) {
        this.constructor.channel = newChannels;
    }
}
const petras = new TV('Samsung', 'Petras');
const maryte = new TV('LG', 'Maryte');
const bebras = new TV('Samsung', 'Bebras');


petras.changeChannel(0);
maryte.changeChannel(2);
bebras.changeChannel(3);

const newChannels = ['Polonia', 'Discavery', 'CNN', 'BBC'];
bebras.changeChannelList(newChannels)

// TV.channels = newChannels;

petras.changeChannel(0);
maryte.changeChannel(2);
bebras.changeChannel(3);

TV.listChannels();

bebras.whatChenelsList();

// Namu darbas:

// Objektiniai uzdaviniai 4. uzd. (STATIC)  
// Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), 
// kuris rodytų bendrą keleivių skaičių visuose Troleibusas, kuris pridėtų arba 
// atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra 
//     įrašytas bendras keleivių skaičius). Taip pat atitinkamai 
//     modifikuokite metodus ilipa(keleiviuSkaicius) ir 
//     islipa(keleiviuSkaicius).

class Troleibusas {

    static visiKaunoKeleiviai = 7000;

    constructor() {
        this.keleiviuTroleibusuoseKiekis = 0;
        this.visiKaunoKeleiviai = 5000;

    }

    kiekKeleiviuTrulikuoseDabar () {
    console.log('keleiviuSkaiciusVisuoseTroleibusuose:', this.keleiviuTroleibusuoseKiekis);
} 

    pridėtiVienąKeleivi () {
    this.keleiviuTroleibusuoseKiekis++;
}
    pridėtiDaugKeleiviu (kiekis) {
    this.keleiviuTroleibusuoseKiekis += kiekis;
}
    atomtiVienąKeleivi () {
    this.keleiviuTroleibusuoseKiekis--;
}
    atimtiDaugKeleiviu (kiekis) {
    this.keleiviuTroleibusuoseKiekis -= kiekis;
}
}

const dainava = new Troleibusas('Dainava');
// const palemonas = new Troleibusas('Palemonas');
// const centras = new Troleibusas('centras');


dainava.pridėtiVienąKeleivi();
dainava.pridėtiVienąKeleivi();
dainava.pridėtiDaugKeleiviu(100);
dainava.pridėtiDaugKeleiviu(10);
dainava.atimtiDaugKeleiviu(99);
dainava.pridėtiDaugKeleiviu(15);
dainava.pridėtiVienąKeleivi();
// centras.procese(20);
// palemonas.procese(300);

dainava.kiekKeleiviuTrulikuoseDabar();
// console.log(visiKaunoKeleiviai);




//     static visiKeleiviai = ('kurioje yra įrašytas bendras keleivių skaičius')
    
//     constructor() {
        
//     }
    
    
//     bendrasKeleiviuSkaicius(keleiviuSkaicius)
//     keleiviuSkaiciusVisuoseTroleibusuose() //turi rodyti bendr kel sk
// }
