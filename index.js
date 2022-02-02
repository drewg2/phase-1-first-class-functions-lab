const returnFirstTwoDrivers = function(drivers){
   return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return function fareMultiplier(fare) {
        return int * fare; 
    }
}

function fareDoubler(fare){
   const cost = createFareMultiplier(2);
   return cost(fare);
} 

function fareTripler(fare){
    const cost = createFareMultiplier(3);
    return cost(fare);
}

function selectDifferentDrivers(arrayOfDrivers, func) {
        //console.log(func)
        if(func === returnFirstTwoDrivers){
            return returnFirstTwoDrivers(arrayOfDrivers)
        }
        else if(func === returnLastTwoDrivers){
           return returnLastTwoDrivers(arrayOfDrivers);
        }
        else{
            return "Please enter a function."
        }
        
}