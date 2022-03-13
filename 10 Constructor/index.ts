class User{
    name="";
    age=0;
    address="";

    constructor(name:any,age:any,address:any){
        this.name=name;
        this.age=age;
        this.address=address;
    }
    getData(){
        console.log(this.name,this.age,this.address);
    }
}

// Second Option for Constructor

class User1{

    // this is called short hand initialization
    constructor(public name:any,public age:any,public address:any){ }
    getData(){
        console.log(this.name,this.age,this.address);
    }

}

const u = new User("Arbab",22,"Pak");
const u1 = new User1("Arbab",22,"Pak");
u.getData();
u1.getData();