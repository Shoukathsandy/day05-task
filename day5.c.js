var str="my name is shree";
(function(str){
    str=str.split(" ")
    for(i=0;i<str.length;i++){
        var temp=str[i];
        temp=temp[0].toUpperCase();
        temp=temp+str[i].slice(1,str[i].length)
        str[i]=temp
    }
}
    console.log(str.join(" "));