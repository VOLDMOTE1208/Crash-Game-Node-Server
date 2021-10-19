function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
setTimeout(()=>{
    console.log((999999999/parseFloat(getRandomArbitrary(1,1000000000))).toFixed(2)),2000
})
    

  