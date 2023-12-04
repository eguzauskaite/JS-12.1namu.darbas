// 1. Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę)
// 2. Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).
// 3. Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").
// 4. Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.
// 5. Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.
// 6. Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.
// 7. Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda ir mažosios, bet ar visi iš didžiosios.

//======= 1 sprendimas =========
const cars = ["BMW", "VW", "Audi"]
cars.forEach(car => {
    console.log(car)
})

//========= 2 sprendimas ==========

const cars1 = ["BMW", "VW", "Audi"]
cars1.forEach((car, index) => {
    console.log(`${index}: ${car}`)
})

// ========= 3 sprendimas =========
const names = ['roZalija', 'AuGustas', 'rita', 'rOZALIJA', 'VYKINtas']
const correctedNames = names.map(name => {
    const correctedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    return correctedName
  })
  console.log(correctedNames)

//========== 4 sprendimas ==========
// Rozalija - 32, Augustinas - 2, Rita - 19, Rozalija - 25, Vykintas -17
const ages = [32, 2, 19, 25, 17]
const adultsAges = ages.filter(age => age >= 18)
console.log(adultsAges)

// ========= 5 sprendimas ========
const cities = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai']
const cityStartingWithK = cities.find(city => city.startsWith('K'))
console.log(cityStartingWithK)

// ========== 6 sprendimas ========
const cities1 = ['Vilnius', 'Kaunas', 'Klaipėda', 'šiauliai']
const hasCityStartingWithLowerCase = cities1.some(city => city[0].toLowerCase() === city[0])

console.log(hasCityStartingWithLowerCase)

// ========= 7 sprendimas ======
const cities2 = ['Vilnius', 'Kaunas', 'Klaipėda', 'šiauliai']
const hasCityStartingWithUpperCase = cities2.every(city => city[0].toUpperCase() === city[0])

console.log(hasCityStartingWithUpperCase)