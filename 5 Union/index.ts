function add(a:number|string,b:number|string){

    if (typeof a ==='number' && typeof b ==='number') {
        return a+b;
    } else {
        return a.toString() + b.toString();
    }
}

console.log(add(1,2));

const c:any = 1;
console.log(c);
