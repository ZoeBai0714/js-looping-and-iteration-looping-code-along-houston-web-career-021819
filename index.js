// Code your solutions in this file

//const array = ['Lisa', 'Kaitlin', 'Jan'];
function printBadges(array){
    for(const element of array){
     console.log(`Welcome ${element}! You are employee #${array.indexOf(element) + 1}.`)
    }
    return array;
}
  
function tailsNeverFails(){
   let counter = 0;
   var flip =  Math.random();
   while(flip >= 0.5){
    counter += 1;
    flip = Math.random();
   }
  return `You got ${counter} tails in a row!`
}
