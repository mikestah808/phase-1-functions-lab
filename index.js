 function distanceFromHqInBlocks(block){
    let result;
    
    if(block > 42){
        result = block - 42;
    }else if(block <42){
    result = 42 - block;
}
    return result;
}




function  distanceFromHqInFeet(block){
    distanceFromHqInBlocks(distance);
     let distance = distanceFromHqInBlocks(block);

     return distance * 264
}



function distanceTravelledInFeet(a,b){
    let result;
    if(a > b){
        result = (a-b) * 264;
    }else if(a < b){
        result = (b - a) * 264;
    }
    return result;
}

function calculatesFarePrice(start, destination){

    let a = distanceTravelledInFeet(start,destination)
        
    if(a < 400){
        return 0;
    }else if (a >= 400 && a <= 2000){
        return 2.56;
    }else if (a >= 2000 && a <= 2500){
        return 25
    }else if (a > 2500){
        return 'cannot travel that far';
    }
    }


