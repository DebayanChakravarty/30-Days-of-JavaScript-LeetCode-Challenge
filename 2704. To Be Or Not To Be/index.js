/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    
    return {
        toBe:(valToCheck)=>{
            if(val !== valToCheck)  throw new Error("Not Equal");
            return true;

        },
         notToBe:(valToCheck)=>{
             if(val === valToCheck)  throw new Error("Equal");
             return true;

        }
    }
    
};


 //console.log(expect(5).toBe(5)); // true
 //console.log(expect(5).notToBe(5)); // throws "Equal"


 class Expects{
    constructor(val){
        this.val = val;
    }

    toBe(valToCheck){
        if(this.val !== valToCheck ){
            throw new Error("Not Equal");
        }
        else{
            return true;
        }

    }


    notToBe(valToCheck){
        if(this.val === valToCheck ){
            throw new Error("Equal");
        }
        else{
            return true;
        }

    }
 }

 function expects(val){
    return new Expects(val);
 }


 console.log(expects(5).toBe(5)); // true
 console.log(expects(5).notToBe(5)); // throws "Equal"
 


