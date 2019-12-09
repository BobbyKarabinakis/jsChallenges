//Challenge 5

//Object with array for bill values
//and methods for caluclating tip and total paid including tip
var billValues = {
    restaurantBills: [124,48,268,180,42],
    tip: function calcTip(){
        var tipFinal =[];
        var bill = this.restaurantBills;
        for (i = 0; i < bill.length; i++) {
            if (bill[i] < 50) {
                tipFinal.push(bill[i] * 0.20);
            } else if (bill[i] >= 50 && bill[i] <= 200) {
                tipFinal.push(bill[i] * 0.15);
            } else if (bill[i] > 200) {
                tipFinal.push(bill[i] * 0.10);
            }
        }
        return tipFinal;
    },
    totalPaid: function totalCalculator(){
       var tipArray = this.tip();

       var sum = this.restaurantBills.map(function(num, idx){
           return num + tipArray[idx];
       })
       return sum;
       
    }


};

console.log(billValues.tip());
console.log(billValues.totalPaid());