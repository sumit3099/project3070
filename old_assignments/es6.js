function tag(strings,...values){
    var str="";
    for(let i=0;i<strings.length;i++)
    {
        if(i>0)
        {
            str+=values[i-1];

        }
        str+=strings[i];
    }
return str;
}

const name ="sumit";
const order="123";
const total=234;

var x=tag`my name is ${name} . my order is ${order}. My total amount is ${total}.`;
console.log(x);

//symbol

let sym=Symbol("this is test");
console.log(sym);
/*
Symbol.iterator
Symbol.toPrimitive
Symbol.toStringTag
*/
var arr=[1,2,3];
var it=arr[Symbol.iterator]();
it.next();//{value:1,done:false}
it.next();//{value:1,done:false}

for(let v of arr){
  //  console.log(v);
}

const st="string";
for(let v of st){
    //console.log(v);
}

var obj ={ 
    [Symbol.iterator](){
var indx=this.start,en=this.end;

var it={
next:()=>{
if(indx<=en){
    var v=this.values[indx];
    console.log(v);
    indx++;
    return { value: v, done :false }
}else
{
 return {done:true};   
}}
};
return it;
    },
    values:[2,5,7,9,1,7,9,0,5,7,3,67,87,97],
    start:5,
    end:12
};

var vals=[...obj];
//console.log[vals];


