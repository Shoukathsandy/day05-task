var arr=[11,12,13,14,15];
var temp=[];
var odd=function(arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2===1)
    temp.push(arr[i]);
    }
    return temp;
  }
  console.log(odd(arr));

  var arr=[1,2,3,4,5];
  var temp=[];
   (function(arr){
      for(var i=0;i<arr.length;i++){
        if(arr[i]%2===1)
        
        temp.push(arr[i]);
        }
      console.log(temp);
    })(arr)

    var odd=(arr)=>{
      for(var i=0;i<arr.length;i++){
        var temp=[];
        if(arr[i]%2===0)
        temp.push(arr[i])
      }
      return temp;
    }
    console.log(odd([23,14,35,44,28,13]));