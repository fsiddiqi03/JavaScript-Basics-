// create a factory and constructor function 

// constuctor 
function Address(street, city, zip){
    this.street = street,
    this.city = city,
    this.zip = zip
}

// factory 

function address2(street, city, zip){
    return {
        street,
        city,
        zip,
    };
}
