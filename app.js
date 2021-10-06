// What is the output of the following code?
// var sum = 0;
// for (var i = 3; i < 7; i++) {
// sum += i;
// if (i ===3 || sum > 10) {
// continue;s
// }
// console.log(i);
// }

// let string = "brother";
// function reverse(string) {
//   for (var reversed = "", i = string.length - 1; i >= 0; i--) {
//     reversed += string[i];
//   }
//   return reversed;
// }
// console.log(reverse(string));

// let score = 51 ;
// let grade = score>=50
// if (grade) {
//     console.log(`Tebrikler notunuz ${score},geçtiniz`);
// }else{
//     console.log(`Üzgünüm notunuz ${score},geçtiniz`);
// }

// let score = 85;
// // let grade = score >= 50
// if (score >= 80) { 
//     console.log(`Tebrikler notunuz ${score}, çok iyi bir öğrencisiniz`);
// }else if (score >= 50) {
//     console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`);
// }else{
//     console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`);
// }
// // console.log('ders bitti'); */
// // Ternary If else
/* let score = 49;
score >= 50 ? console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`) : 
               console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`); */
/* let username = 'Mark';
username ? console.log(`Merhaba ${username}`) : console.log('Please Login'); */
// if (score >= 80) { 
//     console.log(`Tebrikler notunuz ${score}, çok iyi bir öğrencisiniz`);
// }else if (score >= 50) {
//     console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`);
// }else{
//     console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`);
// }
/* let score = prompt(' Sınav notunu gir : ')
score >= 80 ? console.log(`Tebrikler notunuz ${score}, çok iyi bir öğrencisiniz`) : 
   (score >= 50 ? console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`): 
   console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`))
 */

// let username ;

// username && console.log(`Merhaba ${username}`);

    
// var text;
// var fruits;

// switch (fruits){
//     case "banana":
//         text = "Banana is good!";
//         break;
//     case "lime":    
//     case "lemon":
//     case "orange":
//         text = `I am not fan of ${fruits}`;
//         break;
//     case "apple";
//         text ="How you like them apples?";
//         break;
//     default:
//         text= `I have never heard of ${fruits}`;
// }

// console.log(text);

// var year = 2024;
// var month = 4;
// var dayCount;
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         dayCount = 31;
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         dayCount = 30;
//         break;
//     case 2:
//         if (((year % 4 == 0) && !(year % 100 == 0))
//             || (year % 400 == 0))
//             dayCount = 29;
//         else
//             dayCount = 28;
//         break;
//     default:
//         dayCount = -1; // invalid month
// }
// console.log(dayCount); // 29

// let dayUser = prompt("Bir gün giriniz: ");
//             let day = dayUser.toLocaleLowerCase();   
//             let message;
//             switch(day) {  
//                 case "monday":   
//                 case "wednesday":
//                 case "thursday":
//                 case "saturday":
//                     message = "There is in-class today";
//                     break;
//                 case "tuesday":        
//                 case "friday":
//                     message = "There is TW today";
//                     break;
//                 case "sunday":
//                     message = "Today is holiday";
//                     break;
//                 default:
//                     message = "Invalid day";
//             }
//             console.log(message);


// let password = "password"

// if(password.length >5 && (password.includes("@")){
//     console.log("that password is strong");
// }else{
//     console.log("password is not enough");

// }

// let password = 'pg@'
// if(password.length >=5 && password.includes('@') ){
//     console.log('that password is strong');
// }else {
//     console.log('password is not long enough');
// }















