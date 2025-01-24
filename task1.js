const number = [10,20,30,5,50];
let maxnum = number[0];
for(let i=1; i<number.length;i++)
{
    if(number[i] > maxnum)
    {
        maxnum = number[i];
    }
}
console.log(maxnum)