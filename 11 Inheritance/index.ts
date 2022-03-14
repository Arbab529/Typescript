class Email {
    createEmail(name: string) {
        return console.log(`${name}@gmail.com`);
    }
}

class Manager extends Email {
    addUser(name: string) {
        console.log(`${name}@gmail.com`);
    }
}

class Admin extends Email {
    addUser(name: string) {
        console.log(`${name}@gmail.com`);
    }
}

const user1 = new Manager();
user1.addUser("Arbab");
user1.createEmail("Arbab");


const user2 = new Admin();
user1.addUser("Admin");
user1.createEmail("Arbab")