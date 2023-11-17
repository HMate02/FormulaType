const mondatok = [
    "A Forma-1 egy globálisan elismert motorsport, melyben a világ legerősebb és legversenyképesebb csapatai és versenyzői mérik össze tudásukat. A száguldó cirkusznak is nevezett sorozat évente körülbelül húsz versenyhétvégét tart, elkalauzolva a rajongókat a világ különböző tájaira, ahol a versenypályák technikai kihívásokat és gyönyörű látványt kínálnak. A Formula 1 autók rendkívül fejlett technológiát alkalmaznak, beleértve a hibrid erőforrásokat, a légáramlás optimalizálását és a futóművek precíz beállítását.",
    "Az év során számos különböző típusú pálya szerepel a versenynaptárban, beleértve a hagyományos aszfaltot, a városi pályákat és a híres száguldó erdőket. A futamok során a versenyzőknek nemcsak a versenypályát kell legyőzniük, hanem taktikailag is ügyesnek kell lenniük a stratégiájuk tervezése során. A csapatok és versenyzőik folyamatosan fejlesztik és optimalizálják az autókat a szezon során, reagálva az ellenfelek és a technológiai változások kihívásaira.",
    "A versenyeken a boxkiállások is kulcsszerepet játszanak, ahol a csapatok a leggyorsabban próbálnak gumiabroncsokat cserélni és szükség esetén egyéb karbantartási munkálatokat végezni. Az autók aerodinamikai kialakítása és a súlyelosztás precíz szabályozása alapvető fontosságú a versenyen elért sebesség és teljesítmény szempontjából. A Forma-1 szorosan kapcsolódik a gépjárműiparhoz, és a fejlesztések sok esetben átvezetnek a közúti járművekbe is.",
    "A pilóták mellett a csapatok stratégái is kulcsfontosságú szerepet játszanak a futamok kimenetelében, hiszen a taktikai döntések befolyásolhatják a verseny végeredményét. A kvalifikációk és az időmérőkörök során a versenyzők az optimális időzítést és sebességet keresik a rajthoz. A versenyzőknek érzékenyen kell reagálniuk a változó körülményekre, mint például az időjárás és az ellenfelek stratégiája.",
    "A világbajnokságban az összpontszámok alapján dől el a győztes, ahol a versenyzők az egész szezon során elért eredményeikért kapnak pontokat. A Forma-1-ben a tapasztalt versenyzők és a fiatal tehetségek is megméretik magukat, miközben a száguldó cirkusz folyamatosan új tehetségeket vonz a sorozatba. A versenypályák között olyan ikonikus helyszínek találhatók, mint a Monacói Nagydíj utcái, ahol a szűk kanyarok és a városi környezet különleges kihívást jelentenek.",
    "Az F1 autók sebessége a pályákon meghaladhatja a 300 km/h-t, így a versenyzőknek kiváló reakcióidővel és precíz irányítással kell rendelkezniük. A Forma-1 csapatok számára a költségek, a szponzorok és az innováció kulcsfontosságú tényezők, amelyek befolyásolják a hosszú távú versenyképességet. A Forma-1 a csúcsa a motorsportnak, ahol a sebesség, a technológia és az emberi teljesítmény találkoznak.",
    "A Forma-1-ben a csapatok a versenyautókat az abszolút határokig fejlesztik, kísérletezve az új anyagokkal és technológiákkal a maximális teljesítmény érdekében. A Forma-1-es csapatok versenyautóik karosszériáját a légáramlás optimalizálása érdekében számítógépes szimulációkkal tesztelik. A különböző gumikeverékek alkalmazása lehetővé teszi a csapatok számára, hogy a versenyekhez alkalmazkodva optimalizálják a futóművek beállítását.",
    "Az autóknak meg kell felelniük a szigorú technikai előírásoknak, beleértve a súly, az aerodinamika, az erőforrás és egyéb szabályokat. A csapatok folyamatosan fejlesztik az autókat, hogy az adott koncepcióból kihozzák a maximumot, de az újításoknak meg kell felelniük a szabályoknak. A Forma-1 technikai szabályzata évente változik, amely lehetővé teszi a csapatoknak és a tervezőknek, hogy innovatív megoldásokkal fejlesszék az autókat.",
    "A hétvégét általában pénteki szabadedzések kezdik, melyek során a csapatok lehetőséget kapnak az autók beállításainak finomhangolására. A versenyzők itt gyakorolhatják a különböző típusú gumikat, tesztelhetik az autó teljesítményét és alkalmazkodhatnak a pálya különböző szakaszaihoz. A csapatok rendszeresen felhasználják a szabadedzéseket az új fejlesztések kipróbálására és az autók teljesítményének maximalizálására.",
    "A versenyen a versenyzők a kvalifikáción elért helyezésük szerint rajtolnak, kivéve, ha büntetést kaptak vagy változtattak az autójuk beállításain. A futamok meghatározott távolságúak, de időtartamuk a futam kezdetétől maximum 2 óra lehet. A versenyeken kötelező legalább egy kiállás, ahol a versenyzők friss gumikra cserélik a már elhasznált gumikat. Egy lassú kerékcsere súlyos másodpercekbe kerülhet az adott pilótának, ami nagyban befolyásolhatja a verseny alakulását.",
    "Az esős időjárásban történő autózás különleges kihívásokat jelent a versenyzőknek és a csapatoknak. Az esőben a pálya jellemzői megváltoznak, és a versenyzőknek alkalmazkodniuk kell az alacsonyabb tapadáshoz és a rosszabb láthatósághoz. Az esős versenyek még izgalmasabbá teszik a futamokat, mivel a nedves pálya elősegítheti a kiszámíthatatlan eseményeket. Az esős időjárásban az esőgumik alkalmazása és azok megfelelő kezelése kulcsfontosságú.",
];

const iromezo = document.querySelector(".iromezo p");
const szovegdoboz = document.querySelector(".wrapper .szovegdoboz");
const ujJatekButton = document.querySelector(".uj-jatek-button");
const ido = document.querySelector(".ido span b");
const hiba = document.querySelector(".hiba-szam");
const wpmTag = document.querySelector(".wpm-szam");
const cpmTag = document.querySelector(".cpm-szam");
const pontossagTag = document.querySelector(".pontossag-szam");

let idozito;
let maxIdo = 60;
let hatralevoIdo = maxIdo;
let betuIdx =  0;
let hibak = 0;
let irE = 0;

function mondatBetoltes() {

    const randomIdx = Math.floor(Math.random() * mondatok.length);
    iromezo.innerHTML = "";
    mondatok[randomIdx].split("").forEach(char => {
        console.log(char);
        let span = `<span>${char}</span>`
        iromezo.innerHTML += span;
    });
    iromezo.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => szovegdoboz.focus());
    iromezo.addEventListener("click", () => szovegdoboz.focus());
}

function irasFunc() {

    let karakterek = iromezo.querySelectorAll("span");
    let beirtKarakter = szovegdoboz.value.split("")[betuIdx];
    if (betuIdx < karakterek.length - 1 && hatralevoIdo > 0) {

        if (!irE) {
            idozito = setInterval(idozitoFunc, 1000);
            irE = true;
        }
        if (beirtKarakter == null) {

            if (betuIdx > 0) {
                betuIdx--;
                if (karakterek[betuIdx].classList.contains("helytelen")) {
                    hibak--;
                }
                karakterek[betuIdx].classList.remove("helyes", "helytelen");
            }
        } else {

            if (karakterek[betuIdx].innerText == beirtKarakter) {
                karakterek[betuIdx].classList.add("helyes");
            } else {
                hibak++;
                karakterek[betuIdx].classList.add("helytelen");
            }
            betuIdx++;
        }

        karakterek.forEach(span => span.classList.remove("active"));
        karakterek[betuIdx].classList.add("active");

        let wpm = Math.round(((betuIdx - hibak) / 5) / (maxIdo - hatralevoIdo) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0: wpm;

        wpmTag.innerText = wpm;
        hiba.innerText = hibak;
        cpmTag.innerText = betuIdx - hibak;
        let pontossag = (betuIdx - hibak) / betuIdx * 100;
        pontossagTag.innerText = parseFloat(pontossag.toFixed(2));

    } else {
        clearInterval(idozito);
        szovegdoboz.value = "";
    }
}

function idozitoFunc() {

    if (hatralevoIdo > 0) {
        hatralevoIdo--;
        ido.innerText = hatralevoIdo;
        let wpm = Math.round(((betuIdx - hibak) / 5) / (maxIdo - hatralevoIdo) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(idozito);
        iromezo.style.opacity = .1;
    }
}

function ujJatek() {

    mondatBetoltes();
    clearInterval(idozito);
    hatralevoIdo = maxIdo;
    betuIdx = hibak = irE = 0;
    szovegdoboz.value = "";
    ido.innerText = hatralevoIdo;
    wpmTag.innerText = 0;
    hiba.innerText = 0;
    cpmTag.innerText = 0;
    pontossagTag.innertText = 0
    iromezo.style.opacity = 1;
}

mondatBetoltes();
szovegdoboz.addEventListener("input", irasFunc);
ujJatekButton.addEventListener("click", ujJatek);