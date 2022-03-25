var arr=[1,2,3,4,5,6,7,8,9];
var prime=function(arr){
  for(var i=2;arr>i;i++){
    if(arr%i==0){
    return false;
    }
  }
  return arr>1;
  }
  console.log(arr.filter(prime));
  (function(arr){
    for(var i=2;arr>i;i++){
      if(arr%i==0){
     console.log(false);
      }
    }
    console.log(arr>1);
    })(a)