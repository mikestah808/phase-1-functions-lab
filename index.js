function distanceFromHqInBlocks(block) {
    let result;
    if (block > 42) {
        result = block - 42;
    } else if (block < 42) {
        result = 42 - block;
    } 
    return result;
}


function distanceFromHqInFeet(feet) {
    // distanceFromHqInBlocks(distance);
    let distance = distanceFromHqInBlocks(feet)
    return distance * 264;
}



function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    let result;
    if (start > destination) {
        result = (start - destination) * 264;
    } else if (start < destination) {
        result = (destination - start) * 264;
    }
    return result;
  }



  function calculatesFarePrice(start, destination) {

      let a = distanceTravelledInFeet(start, destination)

      if (a < 400) {
          return 0;
      } else if (a >= 400 && a <= 2000) {
          return 2.56;
      } else if (a >= 2000 && a <= 2500) {
          return 25;
      } else {
        return 'cannot travel that far';
      }
  }
  