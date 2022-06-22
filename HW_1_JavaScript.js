// let yolochka4 = 4;
// let yolochka6 = 6;
// let yolochka_name = " Zelyonaya"

// let result = yolochka4 + yolochka6;
// let result_2 = yolochka6 + yolochka_name;


// console.log(`result - ${ yolochka4 + yolochka6}`);
// console.log(result);
// console.log(result_2);


// let t = true;
// let f = false;
// console.log(t + f);

// let age = false;
// let tt = typeof (age)
// console.log(tt)

// if (typeof(age) == "Number") {
//     if (age >= 18 && age <60) {
//         console.log("full content")
//      }
//      else if (age < 18) {
//          console.log("multiki")
//      }
//      else if (age >= 60){
//          console.log("kultura")
//      }
   
// }  else {
//     console.log("good luck!")
// }



// let item_1 = 1;
// let item_2 = 3;
// let item_3 = item_1 + item_2;
// let item_4 = "yolochka";
// let item_5 = item_3;
// let item_6 = 15;
// let item_6_type = typeof(item_6);
// let item_7 = String(item_6);
// let item_7_type = typeof(item_7);

// console.log (item_1);
// console.log (item_2);
// console.log (item_3);
// console.log (item_4);
// console.log (item_3 + item_4);
// console.log (item_3 * item_4);
// console.log ("item_6 == " + item_6);
// console.log ("item_6_type == " + typeof item_6);
// console.log ("item_7 == " + item_7);
// console.log ("item_7_type == " + item_7_type);



// let age_1 = 17;
// let age_2 = 18;
// let age_3 = 60;
//  if (age_1 < age_2) {
//  console.log("You don't have access cause your age is " + age_1 + " is't less then " + age_2) 
//  }
//  else if (age_1 >= age_2 && age_1 < age_3){
//  console.log("Welcome!") 
//  }
//  else if (age_1 > age_3){
//     console.log("Keep calm and look Culture Channel") 
//  }
//  else {
//      console.log ("Technical work")
//  }



//  HW_1* 
//  Задания с разным количеством звездочек:)
//  1*:
//  Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
//  Пример: const checkAge = function(age) {
//  Ваши преобразования
//  }
//  Вывести в консоль результат работы функции с возрастами 17, 18, 61
 
// let age_1 = 17;
// let age_2 = 18;
// let age_3 = 60;
// const checkAge = function (age) {
//     if (age < age_2) {
//         console.log("You don't have access cause your age is " + age + " is't less then " + age_2) 
//         }
//         else if (age >= age_2 && age < age_3){
//         console.log("Welcome!") 
//         }
//         else if (age > age_3){
//            console.log("Keep calm and look Culture Channel") 
//         }
//         else {
//             console.log ("Technical work")
//         } 
// }

// checkAge(20)


//  2*:
//  Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
// let age_1 = 17;
// let age_2 = 18;
// let age_3 = 60;
// const checkAge = function (age) {
//     if(typeof age == "number" ) {


//     if (age < age_2) {
//         console.log("You don't have access cause your age is " + age + " is't less then " + age_2) 
//         }
//         else if (age >= age_2 && age < age_3) {
//         console.log("Welcome!") 
//         }
//         else if (age > age_3) {
//            console.log("Keep calm and look Culture Channel") 
//         }
//         else {
//             console.log ("Technical work")
//         } 
// } else { console.log("Not integer value")}
// }
// checkAge(20)
// checkAge("dfvdvf")

// //  3**:
// //  Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
 
let age_1 = 17;
let age_2 = 18;
let age_3 = 60;

const checkAge = function (age) {

    age = Number (age)
    // if(!isNaN(age)) {
    // if(Number(age)) {
        if (+age) {


    if (age < age_2) {
        console.log("You don't have access cause your age is " + age + " is't less then " + age_2) 
        }
        else if (age >= age_2 && age < age_3) {
        console.log("Welcome!") 
        }
        else if (age > age_3) {
           console.log("Keep calm and look Culture Channel") 
        }
        else {
            console.log ("Technical work")
        } 
} else { console.log("Not integer value")}
}
checkAge(60)
checkAge("22")
checkAge("22aaa")
let agePromt = prompt("Enter age")
checkAge(agePromt)


// //  4***:
// //  Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
// let agePromt = prompt("Enter age")
// checkAge(agePromt)

