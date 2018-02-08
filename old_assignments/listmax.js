const arr=[
    [2,3,603],
    [1,1,286],
    [4,4,882],
];
const len=4;
const opr=3;
var array=[];
for (let i = 0; i < len; i++)
{
    array.push(0);
}

for(let i = 0; i < opr; i++)
{
    for(let j = arr[i][0]-1; j <= arr[i][1]-1; j++)
    {
        array[j]=array[j]+arr[i][2];
    }
  
}
console.log(Math.max(...array));