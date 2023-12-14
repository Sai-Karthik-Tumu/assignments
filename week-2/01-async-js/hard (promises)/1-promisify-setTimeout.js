/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    n*=1000
    const p = new Promise(function(resolve, reject)
    {
        setTimeout(function(){return resolve()}, n)
    });
    return p

}

module.exports = wait;
