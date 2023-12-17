const cart = ["shoes","socks","kurta"]



createOrder(cart).then((orderid)=>{
    console.log("Order ID: " + orderid)
    let payment = proceedtoPayment(orderid);
    return payment
})
.then((payment)=>{
    console.log(payment)
    let paymentStatus = payments(payment)
    return paymentStatus
})
.catch((err)=>{
    console.log("error from catch")
    console.log(err.message)
})

function createOrder(cart){
    const pr = new Promise((resolve, reject)=>{
        if (cart.length==0){
            const err = new Error("Cart is not valid");
            reject(err)
        }
        else{
            let orderid="12345"
            resolve(orderid)
        }
    }) 

    return pr;
    
}
function payments(payment){
    let pr = new Promise((resolve, reject)=>{
        const err = new Error("Error in payment")
        reject(err)
    })
    return pr
}

function proceedtoPayment(orderid){
    const pr = new Promise((resolve, reject)=>{
        resolve("Payment Done")
    }) 
    return pr
}