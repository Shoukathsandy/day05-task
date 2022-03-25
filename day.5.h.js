 var arr=[1,2,3,4,5]
for(var i=1;i<=2;i++)
{
  var last=arr[arr.length-1];
  for(var j=arr.length-2;j>=0;j--)
  {
    arr[j+1]=arr[j]
   
  }
   arr[0]=last
}
console.log(arr.join(" "));

 var arr=[1,2,3,4,5];

( function (arr) 
{
  for(var i=1;i<=2;i++)
{
  var last=arr[arr.length-1];
  for(var j=arr.length-2;j>=0;j--)
  {
    arr[j+1]=arr[j]
   
  }
   arr[0]=last
}
console.log(arr.join(" "))
}
 )(arr)