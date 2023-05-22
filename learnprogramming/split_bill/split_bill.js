export default class Bill {
    constructor() {
        this.amounts = [];
    }

    /** @param {string} amountStr */
    addAmount(amountStr) {
  let amount = Number.parseInt(amountStr, 10);
 this.amounts.push(amount);
    }
   getCount(){
       return this.amounts.length;
   }

   getTotal(){
   let sum = 0;
   this.amounts.forEach(function(amount){
     sum = sum + amount;
   })
   return sum;
   }
   getAverage(){
   return this.getTotal() / this.getCount();
   }
}