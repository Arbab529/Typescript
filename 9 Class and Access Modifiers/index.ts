class Parent{
    private name = "";
    setName(name:any){
        this.name = name;
    }
    getName(){
        console.log(this.name); 
        this.getNameLength();
    }
    private getNameLength(){
        console.log(this.name.length); 
    }
}

const user = new Parent();
user.setName("Arbab");
user.getName();