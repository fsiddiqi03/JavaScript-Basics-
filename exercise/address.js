// print values of of object along with their value


const address = {
    street: 'marine',
    city: 'chicago',
    zip: 60606
}


function showAddress(address){
    for(let i in address){
        console.log(i, address[i])
    }
}

showAddress(address);