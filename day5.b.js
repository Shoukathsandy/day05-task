const array = [1, 2, 3, 4];
let sum = 0;
var tot=function(array){
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
return sum;
}
console.log(tot(array));

(function(array){
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

     console.log(sum);
    })(array)

    var tot=(array)=>{
        var sum=0;
        for(var i=0;i<array.length;i++){
            sum=sum+array[i];
        }
        return sum;
    }
    console.log(tot([1,2,3,4,5]));