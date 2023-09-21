function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
   const feet = distanceFromHqInBlocks(someValue);
return feet * 264;
  }
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination-start) * 264
    
  }
  function calculatesFarePrice(start, destination) {
    const feet = distanceFromHqInBlocks(start, destination);

    if(feet <= 400){
      return 0;
    }
    else if (feet > 400 && feet <= 2000){
      return (feet - 400) * 0.02;
    }
    else if (feet > 2000 && feet <= 2500){
      return 25;

     }else {
      return 'cannot travel that far';
     }
  }

    

    
  