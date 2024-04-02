// ctrl + k ctrl + 0 ---> to close all functions 
// ctrl + k ctrl + j ----> to open all functions

class User {    
    private prateek : string = "prateek"
    constructor () {}
    get getName () {
        console.log(this.prateek)
        return ;
    }
    set setName (name) {
        this.prateek = name;
    }
}

const newUser = new User();

newUser.setName = "gaurang";
newUser.getName;

export {}