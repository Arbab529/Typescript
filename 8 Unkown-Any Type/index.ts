
// Any type --> I don't Care
let data:any;
data=20;
data="any";
let item:string;
item=data;

// Unknown Type --> I don't Know
let data1:unknown;
data1=20;
data1="any";
let item1:string;

if(typeof data1 ==='string'){
    item1=data1;
}