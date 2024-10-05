const bcrypt=require('bcrypt')
const users={
    'userproduction.com': {
        pwHash:bcrypt.hashSync('123',10),
        roles:['ADMIN'],
        id:'fa027faa-ffe8-4276-add3-ee5e9cfb3e30'
    },
    'user2production.com': {
        pwHash:bcrypt.hashSync('1234',10),
        roles:['ACCOUNT_MANAGER'],
        id:'279ce6dd-8478-44ce-ae53-e77e25530473'
    }
}

const findUserByEmail= async (email)=>{
    const user=user[email]
    // return user ? Promise.resolve(user) : Promise.reject('user not found')
    //if you do not handle the reject the promise might return undefined
    return user ? user : Promise.reject('user not found')
    
    //this call is async and would return a promise if we were using a real database
}

module.exports={findUserByEmail};