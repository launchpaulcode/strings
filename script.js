// Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.
let vardas = "jonas" ;
let pavarde = "jonavicius";
let vardoilgis = vardas.length;
let pavardesilgis = pavarde.length;
console.log(vardas + pavarde);

if ( vardoilgis > pavardesilgis)
{
    console.log(pavarde);
    console.log( pavardesilgis + "<" + vardoilgis );
}
else
{
    console.log(vardas);
    console.log( pavardesilgis + ">" + vardoilgis );

}
// ----------------------------------------------------------------------------------------
// Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms. (LEONARDO dicaprio)

let vardas1 = "Leonardo" ;
let pavarde1 = "Dicaprio";
let vardascap = vardas1.toUpperCase();
let pavardesmall = pavarde1.toLowerCase();
console.log(vardascap);
console.log(pavardesmall);
// ---------------------------------------------------------

// Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

let vardas2 = "Leonardo" ;
let pavarde2 = "Dicaprio";
let raidziukratinys = vardas2.charAt(0) + pavarde2.charAt(0);

console.log(raidziukratinys);

// ---------------------------------------------------------------
// Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

let vardas3 = "leonardo" ;
let pavarde3 = "dicaprio";
let vardo3ilgis = vardas3.length;
let pavardes3ilgis = pavarde3.length;

console.log(vardo3ilgis);
console.log(pavardes3ilgis);

let raidziukratinys2 = vardas3.charAt(vardas3.length-1) + vardas3.charAt(vardas3.length -2) + vardas3.charAt(vardas3.length -3) + pavarde3.charAt(pavarde3.length-1) + pavarde3.charAt(pavarde3.length-2) + pavarde3.charAt(pavarde3.length-3); 

console.log(raidziukratinys2);

// -----------------------------------------------------------------
//5
// Sukurti kintamąjį su stringu: “An American in Paris”. Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.

let ilgaskintamasis = "An American in Paris";
let pakeitimas1 = ilgaskintamasis.replace(/[a]/gi, "*");
let pakeitimas2 = pakeitimas1.replace(/[A]/gi, "*");
console.log(pakeitimas2);



let askaicius = ilgaskintamasis.search(/a/);


//kai nera ieskomos raides .search reiksme = -1;
//-----------------------
// Sukurti kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.

let ilgaskintamasis1= "An American in Paris";


let pakeitimas3 = ilgaskintamasis1.replace(/[aeoiuy]/gi, "");
console.log(pakeitimas3);

let breakfast = "Breakfast at Tiffany's";
let pakeitimas4 = breakfast.replace(/[aeoiuy]/gi, "");
console.log(pakeitimas4);

let odyssey = "2001: A Space Odyssey";
let pakeitimas5 = odyssey.replace(/[aeoiuy]/gi, "");
console.log(pakeitimas5);


let wonderful = "It's a Wonderful Life";
let pakeitimas6 = wonderful.replace(/[aeoiuy]/gi, "");
console.log(pakeitimas6);
// ----------------------------------------------------------------------------------
// Stringe, kurį generuoja toks kodas: "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope" Surasti ir atspausdinti epizodo numerį.

// .repeat( Math.ceil(Math.random() * 10))

// (Math.ceil (Math.random() * 7)+1)

// --------------------------------------------------------------------------------------
// Suskaičiuoti kiek stringe “Don't Be a Menace to South Central While Drinking Your Juice in the Hood” yra žodžių trumpesnių arba lygių nei 5 raidės. Pakartokite kodą su stringu “Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale”.




const astuntosStringas = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood"; 

let padalintiZodziai = astuntosStringas.split(" "); //padalinam stringa i stringu masyva su 14 nariu

console.log(padalintiZodziai);

console.log(zodziuIlgis(padalintiZodziai));



function zodziuIlgis(padalintiZodziai)  //bandom pakeist masyvo elementus i zodziu ilgi skaiciais
{
    return padalintiZodziai.filter(padalintiZodziai => padalintiZodziai.length > 4)

}

let arrayElementsLongerThanFive = padalintiZodziai.length;
console.log(arrayElementsLongerThanFive);


