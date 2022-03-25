var arr=['12321','shoukath', 'madam','10011', 'aba','5522'];

var palindrome=function(arr) {
    return arr.filter(function(item) {
        return item === item.split('').reverse().join('');
    });
}
console.log(palindrome(arr));

(function(arr) {
    var data= arr.filter(function(item) {
        return item === item.split('').reverse().join('');
    });
    console.log(data);
})(['12321','shoukath', 'madam','10011', 'aba','5522']);

var data=(arr)=>{
    return arr.filter(function(item) {
        return item === item.split('').reverse().join('');
    });
}
console.log(data(arr));


