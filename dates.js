function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  
 const x=getRndInteger(15,50) 
 console.log(x)