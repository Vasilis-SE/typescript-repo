interface IUser {
    firstname:string,
    lastname:string,
    balance:number,
    subtractFromBalance: ( toSub:number ) => boolean
}

let user:IUser = {
    firstname: 'Jonathan',
    lastname: 'Williams',
    balance: 4432.54,
    subtractFromBalance: ( toSub:number=0.0 ):boolean => {
        if(toSub === 0) return false;
        user.balance -= toSub; 
        return true;
    }
};

// Successful
console.log(`The user ${user.firstname} ${user.lastname} has balance ${user.balance}€`);
console.log('Removing 20€', user.subtractFromBalance( 20 ));
console.log(`Current balance is: ${user.balance}€`);
