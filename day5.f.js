const arr1 = [1, 10, 13, 24, 36];
const arr2 = [2, 11, 15, 30, 43];
function median(a, b) {
    let c = [...a, ...b].sort((a, b) => a - b);
    const half = c.length / 2 | 0;
    if (c.length % 2)
        return c[half];
    return (c[half] + c[half - 1]) / 2;
}
console.log(median(arr1, arr2));

(() => {
    const median = (a, b) => {
        let c = [...a, ...b].sort((a, b) => a - b);
        const half = c.length / 2 | 0;
        if (c.length % 2)
            return c[half];
        return (c[half] + c[half - 1]) / 2;
    }
    const arr1 = [1, 12, 15, 26, 38];
    const arr2 = [2, 13, 17, 30, 45];
    console.log(median(arr1, arr2));
})();


var median=(a, b)=>{
    let c = [...a, ...b].sort((a, b) => a - b);
    const half = c.length / 2 | 0;
    if (c.length % 2) 
    return c[half];
    return (c[half] + c[half - 1]) / 2;
}
const arr3 = [1, 12, 15, 26, 38];
const arr4 = [2, 13, 17, 30, 45];
console.log(median(arr3, arr4));