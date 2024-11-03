document.addEventListener('DOMContentLoaded',function(){

    /**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    
    let timer;

       return function(...args){
           clearTimeout(timer);

           timer = setTimeout(()=>
               fn.apply(this, args)
           ,t);
       }

};
  
    const log = debounce(console.log, 2000);
    log('Hello'); // This call will be cancelled
    log('Hello'); // This call will be cancelled
    log('Hello 2000'); // This call will execute and log 'Hello' after 2000ms

})