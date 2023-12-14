/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const start = Date.now();
    let p = new Promise((resolve, reject)=>{
        while (Date.now() - start < milliseconds) {
        }
        return resolve()
    })
    return p
}

module.exports = sleep;
