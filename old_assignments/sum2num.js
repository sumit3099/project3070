const arr=[1,3,46,1,3,9] ;
const sum=47;
var pair=0;
arr.sort();
console.log(arr);
for(let i=0;i<arr.length-1;i++ )
{ while(arr[i]===arr[i+1])
        {
            i++;
        }
    for(let j=i+1;j<arr.length;j++){
        while(arr[j]===arr[j-1])
        {
            j++;
        }
        console.log(j);
    if(arr[i]+arr[j]===sum)
    {
        pair++;
    }
    }
}
console.log(pair);