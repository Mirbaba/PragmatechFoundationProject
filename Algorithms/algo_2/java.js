

// for(let i=1; i<200; i++){
//     let order=prompt('Yeni musteri elave edilsinmi? (Yes/No?)')

// if(order=='Yes'){
//     let ad=prompt('Add new customer');
//     console.log(ad)
// }else{
//     break;
// }
// }
let customers=[]
function addNewCustomer(){
    let ad = prompt('Add new customer');
    customers.push(ad);
}
function showAllCustomers(){
    for(let i=0; i<customers.length; i++);
    console.log(customers(i))
}


while(true){
    let order=prompt('Yeni musteri elave edilsinmi? (Yes/No?)')

if(order=='Yes'){
    addNewCustomer();
}else{
    showAllCustomers()
    break;
}
}

