let address1 = new Address('a', 'b', 'c')
let address2 = new Address('a', 'b', 'c')

function Address(street, city, zip){
    this.street = street,
    this.city = city,
    this.zip = zip
}


function areEqual(address1, address2){
    for(let i in address1){
        if(address1[i] === address2[i]){
            console.log('equal')
        }
    }
}


function areSame(address1, address2){
    return address1 === address2
}