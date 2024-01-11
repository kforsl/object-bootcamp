// Bibblan


// 1. Skapa ett objekt som innehåller data om en bok, nycklar som kan inkluderas är title, author, numPages.

let bibblan = {
    title: 'The Shining',
    author: 'Stephen King',
    numPages: 497
}

// 2. Skapa en array av objekt med flera stycken böcker

let storaBibblan = [
    {
        title: `The Shining`,
        author: `Stephen King`,
        numPages: 497
    },
    {
        title: `IT`,
        author: `Stephen King`,
        numPages: 1168
    },
    {
        title: `Salem's Lot`,
        author: `Stephen King`,
        numPages: 483
    },
    {
        title: `Dracula`,
        author: `Bram Stroker`,
        numPages: 488
    },
    {
        title: `Pet Senatary`,
        author: `Stephen King`,
        numPages: 580
    },
    {
        title: `Misery`,
        author: `Stephen King`,
        numPages: 370
    },
    {
        title: `The Exorcist`,
        author: `William Peter Blatty`,
        numPages: 385
    },
    {
        title: `The Haunting of Hill House`,
        author: `Shirley Jackson`,
        numPages: 182
    },
    {
        title: `Carrie`,
        author: `Stephen King`,
        numPages: 272
    },
    {
        title: `Frankenstein`,
        author: `Mary Wollstonecraft Shelley`,
        numPages: 273
    }
]
// 3. Skapa en funktion som söker efter en titel i arrayen, om den hittar en så returneras objektet annars null. Låt funktionen ta emot arrayen med bok-objekt och söktermen som parametrar.

let wantedBook = findBookTitle(window.prompt('Sök efter en bok i bibblan'))
console.log(wantedBook)

function findBookTitle(wantedTitle) {
    let book = 'Null';

    for (let i = 0; i < storaBibblan.length; i++) {
        if (wantedTitle === storaBibblan[i].title) {
            book = storaBibblan[i];
        }
    }
    return book
}


// Letter Frequency
/*
Räkna tecken i en sträng och organisera detta i ett objekt. Skapa en funktion som tar en sträng som input och ger ett objekt som output.

Varje tecken är sin egna nyckel i objektet och värdet på nyckeln är antalet av det tecknet. Dvs, för varje tecken ska det finnas en nyckel i objektet och värdet på den nyckeln ska vara antal förekomster av det tecknet.

Denna övning kräver dynamiska nycklar.

letterFrequency("kalle") // => {"k": 1. "a": 1, "l": 2, "e": 1}
letterFrequency("aaaa") // => {"a": 4}
letterFrequency("ni talar bra latin") // => {"n": 2, "i":2, " ":3, "t":2, "a":4,"l": 2,"r":2", "b":1 }
*/


function letterFrequency(word) {
    const obj = {}
    for (let x of word) {
        if (obj[x] == undefined) {
            obj[x] = 1
        } else {
            obj[x]++
        }
    }
    return obj
}

console.log(letterFrequency(window.prompt('skriv ett ord eller en mening')))



// User Register


// För samtliga uppgifter nedan, ladda ner och utgå från users.js genom att lägga till <script src="users.js"> innan er script-tag. Då har du en global variabel users som innehåller alla användare.

/*
filterByCountry
Skapa en funktion som tar emot listan på användare och en landskod och returnerar en ny lista innehållande endast användare med den landskoden.

*/

function filterByCountry(users, landCode) {
    landCode = landCode.toUpperCase()
    const sortedCountry = []
    for (let i = 0; i < users.length; i++) {
        if (users[i].nat === landCode) {
            sortedCountry.push(users[i])
        }
    }
    return sortedCountry
}
const sortedCountry = filterByCountry(users, window.prompt('CA, BR, IR, DK, IE, ES, AU, NZ, NL, GB, FI, TR, US, NO, DE, CH, FR'))
console.log(sortedCountry)

/*
filterByGender
Skapa en funktion som tar emot listan på användare och en sträng "Male" eller "Female" och returnerar en ny lista innehållande endast kvinnliga eller manliga användare.
*/

function filterByGender(users, gender) {
    const filterGender = []
    gender = gender.toLowerCase()

    if (gender === 'male') {
        title = ['Mr', 'Monsieur']
    } else {
        title = ['Miss', 'Ms', 'Mademoiselle', 'Mrs', 'Madame']
    }
    for (let i = 0; i < users.length; i++) {
        if (title.includes(users[i].name.title)) {
            filterGender.push(users[i])
        }
    }
    return filterGender
}
const filterGender = filterByGender(users, window.prompt('Male or Female'))
console.log(filterGender)

/*
listEmails
Skapa en funktion som tar emot listan på användare och returnerar en lista innehållandes endast användarnas emailaddresser
*/
function listByEmails(users) {
    const emailList = []

    for (let i = 0; i < users.length; i++) {
        emailList.push(users[i].email)
    }
    return emailList
}

const listEmails = listByEmails(users)

console.log(listEmails)


/* 


Utmaning! - Reformat Emails
Chefen på bolaget vill att alla användare ska få nya e-mailaddresser. Just nu följer deras e-mail formatet förnamn.efternamn@example.com men chefen vill att de ska följa formatet efternamn.förnamn@evilcorp.countrydomain.

Skapa en funktion som listar alla e-mail-adresser enligt det nya formatet.
*/

const changedEmails = listEmails.map(listEmails => listEmails.replace('example.com', 'evilcorp.countrydomain'))
console.log(changedEmails)

/*
Land	             Nat	        Domän

Frankrike	         FR	             .fr
Schweiz	             CH	            .ch
Tyskland	         DE	            .de
Norge	             NO	            .no
USA	                 US	            .us
Turkiet  	         TR	            .tr
Findland	         FI	             .fi
Storbritannien	     GB	            .uk
Nederländerna	     NL	            .nl
Nya Zeeland	        NZ	            .nz
Australien	        AU	            .au
Estland	            ES          	.ee
Irland	            IE	            .ie
Danmark         	DK	            .dk
Iran	            IR          	.ir
Brasilien	        BR	            .br
Kanada	            CA	            .ca
*/
