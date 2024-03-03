const sumAll = function(startingNum, endingNum) {

let finalSum = 0;

for (let item = startingNum; item <= endingNum; item++){
    finalSum = item + finalSum;
}
return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
