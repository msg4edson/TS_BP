class Client{
    name: string;
    isActive: boolean;

    constructor(name: string){
        this.name = name;
        this.isActive = true;
    }

    announce(){
        return "Hello, my name is " + this.name;
    }
}

// create a new instance
let firstCustomer = new Client("Alice");


