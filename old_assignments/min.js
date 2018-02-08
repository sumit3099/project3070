const arr=[1,3,46,1,3,9] ;
var maximum = arr.indexOf(Math.max(...arr));
var minimum = arr.indexOf(Math.min(...arr));
var result=0;

for(let i=0;i<maximum;i++)
{
if(arr[maximum]-arr[i]>result)
{result=arr[maximum]-arr[i];
}
}

for(let i=minimum+1;i<arr.length;i++)
{
if(arr[i]-arr[minimum]>result)
{result=arr[i]-arr[minimum]
}
}
console.log(result);

