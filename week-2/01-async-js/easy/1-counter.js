let counter = 0
function cb(){
    counter+=1
    console.clear()
    console.log(counter)
}
setInterval(cb,1000)
