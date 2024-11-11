document.addEventListener('DOMContentLoaded',function(){
 /**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {

    let value = init;

    function increment(){
        return ++value;
    }

    function reset(){
        return value = init;
    }

    function decrement(){
        return --value;
    }

    return {increment,reset,decrement}
    
};


var createCounter2 = function(init) {

    let value = init;

   return{
    increment:()=>{
        return ++value 
    },
    reset:()=>{
        return value =init;
    },
    decrement:()=>{
        return --value;
    }
   }
    
};



const counter = createCounter(5)
 console.log(counter.increment()); // 6
 console.log(counter.reset()); // 5
 console.log(counter.decrement()); // 4
console.log("--------------------------")
 const counter2 = createCounter2(5)
 console.log(counter.increment()); // 6
 console.log(counter.reset()); // 5
 console.log(counter.decrement()); // 4
 

 
})