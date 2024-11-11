document.addEventListener('DOMContentLoaded',function(){
    /**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n = 0) {

    let counter = n;//10 but does not resturn the 
    
    return function() {
        return counter++ //10 -> 11 1st call , 2nd value 11 -> 12 returns 11 , 3rd call 12 -> 12 
    };
};

var createCounterPart2 = function(n = 0) {
    return function() {
        return n++ //10 -> 11 1st call , 2nd value 11 -> 12 returns 11 , 3rd call 12 -> 12 
    };
};

var createCounterPart3 = function(n = 0) {
    return () => {
        return n++
    }
};

console.log("---------part1-------------")
 const counter = createCounter(10)
 console.log(counter()) // 10
 console.log(counter()) // 11
 console.log(counter()) // 12
 console.log("----------part2------------")
 const counter2 =  createCounterPart2(10)
 console.log(counter2()) // 10
 console.log(counter2()) // 11
 console.log(counter2()) // 12
 console.log("----------part3------------")
 const counter3 =  createCounterPart3(10)
 console.log(counter3()) // 10
 console.log(counter3()) // 11
 console.log(counter3()) // 12


 
})