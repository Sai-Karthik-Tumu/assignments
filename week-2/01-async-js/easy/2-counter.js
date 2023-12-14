let counter = 0;
function cb(){
    console.clear()
    console.log(counter);
    counter+=1
    setTimeout(cb,1000);

}
cb();