function cb(){
    console.clear()
    let time = new Date().toLocaleTimeString(undefined, {hour12: false});
    // counter+=1
    console.log(time)
    setTimeout(cb,1000);
}
cb();
// console.log(time)

