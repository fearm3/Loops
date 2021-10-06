// let i =0;
// let sum =0;

// // while (i<11) {
// //     sum +=i;
// //     i++
// //     console.log(sum);
// // }

// do{
//     sum+=i;
//     i++;

// }
// while (i<7);
// console.log(sum);

// let text ="AliBaba";

// for (let i=0; i<text.length;i++){
//     console.log(text[i]);
// }

// let sum = 0;
// for (let i =0; i<=10;i++){
//     sum+=i;
//     console.log(sum);
// }

//1 den 100 e kadar sayılarda fizz buuzz

for(let i = 1; i <100 ; i++){
    if(i%15 == 0){
      console.log(i,"FizzBuzz")
    }
    else if(i%5 == 0){
      console.log(i,"Buzz")
    }
    else if (i%3 == 0){
      console.log(i,"Fizz")
    }
  } 