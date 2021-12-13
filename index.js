// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    if(blocks > 42){
        return blocks - 42;
    }else{
        return 42 - blocks;
    }
}
function distanceFromHqInFeet(blocks){
    if(blocks > 42){
        return (blocks - 42) * 264;
    }else{
        return(42 - blocks) * 264;
    }
}
function distanceTravelledInFeet(start, finish){
    if(finish > start){
        return (finish - start)*264;
    }else{
        return(start - finish)*264;
    }
}
function calculatesFarePrice(start, destination){
    if(start > destination){
        if((start -  destination)*264 < 2000){
            let wagable = ((start - destination)*264)-400
            return wagable * .02;
        }
        if((start -  destination)*264 > 2000){
            let wagable = ((start - destination)*264)-400
            if(wagable >= 2100){
                return 'cannot travel that far';
            }else{
                return 25;
            }
        }

    }

    if(start < destination){
        if((destination - start)*264 < 2000){
            let wagable = ((destination - start)*264)-400
            if(wagable > 0){
            return wagable * .02;
            }else{
                return 0;
            }
        }
        if((destination - start)*264 > 2000){
            let wagable = ((destination - start)*264)-400
            if(wagable >= 2100){
                return 'cannot travel that far';
            }else{
                return 25;
            }
        }

    }
}