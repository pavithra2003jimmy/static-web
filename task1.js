let num = [2,5,6,7,8,9,12,14,15,16,18,0]
let even=[];
for(let i=0;i<num.length;i++)
{
    if(num[i]%2==0)
        even.push(num[i]);
}
console.log( "THE NUMBERS THAT ARE EVEN ARE: ", even);
