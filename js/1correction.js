// Частина №1

// Створити скрипт яки повинен виконувати наступне:

// запитати у користувача рік народження;
// запитати в нього, в якому місті він живе;
// запитати його улюблений вид спорту.
// При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:

// його вік;
// якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - 
//"Ти живеш у столиці..." і на місце точок підставляємо країну, столицею якої є місто. 
//Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.



// Частина №2

// Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач вкаже один із цих видів спорту, 
//то показуємо йому повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.



// Все це має бути відображено в одному вікні (алерті).

// Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення – 
//“Шкода, що Ви не захотіли ввести свій(ю) …” і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .

let userYear = prompt("What is your year of birth?");
let userCity = prompt("What is your city?(in English)");
let userSport = prompt("What is your favourite sport?(in English)");


let userAge = new Date().getFullYear() - parseInt(userYear);


let country;
switch (userCity) {
    case 'Washington':
        country = 'USA'
        break;
    case 'Kiev':
        country = 'Ukraine'
        break;
    case 'London':
        country = 'United kingdom'
        break;
    default:
        break;
}


let sportsman;
switch (userSport) {
    case 'box':
        sportsman = 'Usik'
        break;
    case 'football':
        sportsman = 'Shevchenko'
        break;
    case 'tennis':
        sportsman = 'Sharapova'
        break;
    default:
        break;
}



if (userYear === '') {
    userYear = null;
};
if (userCity === '') {
    userCity = null;
}
if (userSport === '') {
    userSport = null;
}


let yearResponse = userYear !== null ? `You are ${userAge} years old.` : `It's a pity that you didn't say your birth year.`;
console.log(yearResponse)


if (userCity === null){
    cityResponse = `It's pity that you didn't say your city.`;
} else if (userCity === 'Washington' || userCity === 'Kiev' || userCity === 'London') {
    cityResponse = `You live in capital of ${country}.`;
} else {
    cityResponse = `You are from ${userCity}.`;
}
console.log(cityResponse)



if (userSport === null){
    sportResponse = `It's pity that you didn't say your favourite sport`;
} else if (userSport === 'box' || userSport === 'football' || userSport === 'tennis') {
    sportResponse = `Cool! Do you want to be like ${sportsman}?`;
} else {
    sportResponse = ``;
}
console.log(sportResponse)


alert(`${yearResponse} ${cityResponse} ${sportResponse}`)



