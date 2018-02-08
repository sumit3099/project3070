const arr=[3,3,3,3,2,2,2,2];
arr.sort();
var sum=arr[0];
for(let i=1;i<arr.length;i++)
{
    while(arr[i]<=arr[i-1])
    {
        arr[i]++;
    }
    sum=sum+arr[i];
   
}
console.log(sum);
