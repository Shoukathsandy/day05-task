var arr=[1,2,1,3,1,4];

var res=function(arr){
  return arr.filter((item,index)=>arr.indexOf(item)===index);
}
console.log(res(arr));

(function(arr){
  return arr.filter((item,index)=>arr.indexOf(item)===index);
})(arr)
