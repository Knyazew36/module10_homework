//Задание №1
let a = prompt();
if (a === null) {
    console.log("Вы отказались от ввода");
} else {
    a = + a;
let type = typeof a
    if (a % 2 ===0) {
        console.log("четное");
         
    }
    else if (a % 1 ===0) {
        console.log("нечетное");
         
   }
   else {
       console.log("Упс, кажется вы ошиблись");
    }
}   
   



