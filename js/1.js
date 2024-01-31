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
console.log(userYear)
let userCity = prompt("What is your city?(in English)");
let userSport = prompt("What is your favourite sport?(in English)");

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
console.log(currentYear);
let userAge = parseInt(currentYear) - parseInt(userYear);
console.log(userAge);

if(userYear === ''){
    userYear = null;
};

if(userCity === ''){
    userCity = null;
}

if(userSport === ''){
    userSport = null;
}

if (userYear !== null) {
    if (userCity == 'Washington') {

        if (userSport == 'box') {
            alert(`You are ${userAge} years old, you live in the capital of USA. Cool! Do you wanna be like Usik`);
        } else if (userSport == 'football') {
            alert(`You are ${userAge} years old, you live in the capital of USA. Cool! Do you wanna be like Shevchenko`);
        } else if (userSport == 'tennis') {
            alert(`You are ${userAge} years old, you live in the capital of USA. Cool! Do you wanna be like Sharapova`);
        } else if (userSport == null) {
            alert(`You are ${userAge} years old, you live in the capital of USA. But it's a pity that you didn't say your favourite sport`);
        } else {
            alert(`You are ${userAge} years old, you live in the capital of USA,`);
        };

    } else if (userCity == 'Kiev') {
        if (userSport == 'box') {
            alert(`You are ${userAge} years old, you live in the capital of Ukraine. Cool! Do you wanna be like Usik`);
        } else if (userSport == 'football') {
            alert(`You are ${userAge} years old, you live in the capital of Ukraine. Cool! Do you wanna be like Shevchenko`);
        } else if (userSport == 'tennis') {
            alert(`You are ${userAge} years old, you live in the capital of Ukraine. Cool! Do you wanna be like Sharapova`);
        } else if (userSport == null) {
            alert(`You are ${userAge} years old, you live in the capital of Ukraine. But it's a pity that you didn't say your favourite sport`);
        } else {
            alert(`You are ${userAge} years old, you live in the capital of Ukraine,`);
        };


    } else if (userCity == 'London') {
        if (userSport == 'box') {
            alert(`You are ${userAge} years old, you live in the capital of United Kingdom. Cool! Do you wanna be like Usik`);
        } else if (userSport == 'football') {
            alert(`You are ${userAge} years old, you live in the capital of United Kingdom. Cool! Do you wanna be like Shevchenko`);
        } else if (userSport == 'tennis') {
            alert(`You are ${userAge} years old, you live in the capital of United Kingdom. Cool! Do you wanna be like Sharapova`);
        } else if (userSport == null) {
            alert(`You are ${userAge} years old, you live in the capital of United Kingdom. But it's a pity that you didn't say your favourite sport`);
        } else {
            alert(`You are ${userAge} years old, you live in the capital of United Kingdom,`);
        };



    } else if (userCity == null) {
        if (userSport == 'box') {
            alert(`You are ${userAge} years old, but it's a pity that you didn't say your city. Cool! Do you wanna be like Usik`);
        } else if (userSport == 'football') {
            alert(`You are ${userAge} years old, but it's a pity that you didn't say your city. Cool! Do you wanna be like Shevchenko`);
        } else if (userSport == 'tennis') {
            alert(`You are ${userAge} years old, but it's a pity that you didn't say your city. Cool! Do you wanna be like Sharapova`);
        } else if (userSport == null) {
            alert(`You are ${userAge} years old, But it's a pity that you didn't say no your city, no favourite sport`);
        } else {
            alert(`You are ${userAge} years old, but it's a pity that you didn't say your city.`);
        };



    } else {
        if (userSport == 'box') {
            alert(`You are ${userAge} years old, you live in ${userCity}. Cool! Do you wanna be like Usik`);
        } else if (userSport == 'football') {
            alert(`You are ${userAge} years old, you live in ${userCity}. Cool! Do you wanna be like Shevchenko`);
        } else if (userSport == 'tennis') {
            alert(`You are ${userAge} years old, you live in ${userCity}. Cool! Do you wanna be like Sharapova`);
        } else if (userSport == null) {
            alert(`You are ${userAge} years old, you live in ${userCity}. But it's a pity that you didn't say your favourite sport`);
        } else {
            alert(`You are ${userAge} years old, you live in ${userCity},`);
        };

    }
} else {
    if (userCity == 'Washington') {

        if (userSport == 'box') {
            alert(`It's apity that you didn't leave your year of birth, but we know that you live in the capital of USA. Cool! Do you wanna be like Usik`);
        } else if (userSport == 'football') {
            alert(`It's apity that you didn't leave your year of birth, but we know that you live in the capital of USA. Cool! Do you wanna be like Shevchenko`);
        } else if (userSport == 'tennis') {
            alert(`It's apity that you didn't leave your year of birth, but we know that you live in the capital of USA. Cool! Do you wanna be like Sharapova`);
        } else if (userSport == null) {
            alert(`It's a pity that you didn't say no your year of birth no favourite sport, but we know that you live in the capital of USA.`);
        } else {
            alert(`It's apity that you didn't leave your year of birth, but we know that you live in the capital of USA,`);
        };

    } else if (userCity == 'Kiev') {
        if (userSport == 'box') {
            alert(`It's apity that you didn't leave your year of birth, but we know that you live in the capital of Ukraine. Cool! Do you wanna be like Usik`);
        } else if (userSport == 'football') {
            alert(`It's apity that you didn't leave your year of birth, but we know that you live in the capital of Ukraine. Cool! Do you wanna be like Shevchenko`);
        } else if (userSport == 'tennis') {
            alert(`It's apity that you didn't leave your year of birth, but we know that you live in the capital of Ukraine. Cool! Do you wanna be like Sharapova`);
        } else if (userSport == null) {
            alert(`It's a pity that you didn't say no your year of birth no favourite sport, but we know that you live in the capital of Ukraine.`);
         }else {
            alert(`It's apity that you didn't leave your year of birth, but we know that you live in the capital of Ukraine,`);
        };


    } else if (userCity == 'London') {
        if (userSport == 'box') {
            alert(`It's apity that you didn't leave your year of birth, but we know that you live in the capital of United Kingdom. Cool! Do you wanna be like Usik`);
        } else if (userSport == 'football') {
            alert(`It's apity that you didn't leave your year of birth, but we know that you live in the capital of United Kingdom. Cool! Do you wanna be like Shevchenko`);
        } else if (userSport == 'tennis') {
            alert(`It's apity that you didn't leave your year of birth, but we know that you live in the capital of United Kingdom. Cool! Do you wanna be like Sharapova`);
        } else if (userSport == null) {
            alert(`It's a pity that you didn't say no your year of birth no favourite sport, but we know that you live in the capital of United Kingdom.`);
        } else {
            alert(`It's apity that you didn't leave your year of birth, but we know that you live in the capital of United Kingdom,`);
        };



    } else if (userCity == null) {
        if (userSport == 'box') {
            alert(`It's a pity that you didn't leave no year of birth, no your city. But it is cool that you wanna be like Usik`);
        } else if (userSport == 'football') {
            alert(`It's a pity that you didn't leave no year of birth, no your city. But it is cool that you wanna be like Shevchenko`);
        } else if (userSport == 'tennis') {
            alert(`It's a pity that you didn't leave no year of birth, no your city. But it is cool that you wanna be like Sharapova`);
        } else if (userSport == null) {
            alert(`It's a pity that you didn't say no your year of birth, no favourite sport, no city.`);
        } else {
            alert(`It's a pity that you didn't leave no year of birth, no your city.`);
        };



    }else {
        if (userSport == 'box') {
            alert(`It's a pity that you didn't leave your year of birth, but we know that you live in ${userCity}. Cool! Do you wanna be like Usik`);
        } else if (userSport == 'football') {
            alert(`It's a pity that you didn't leave your year of birth, but we know that you live in ${userCity}. Cool! Do you wanna be like Shevchenko`);
        } else if (userSport == 'tennis') {
            alert(`It's a pity that you didn't leave your year of birth, but we know that you live in ${userCity}. Cool! Do you wanna be like Sharapova`);
        } else if (userSport == null) {
            alert(`It's a pity that you didn't say no no your year of birth no favourite sport, but we know that you live in ${userCity}.`);
        }else {
            alert(`It's a pity that you didn't leave your year of birth, but we know that you live in ${userCity},`);
        };

    }
}



