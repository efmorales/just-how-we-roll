/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

let d6Button = document.querySelector("#d6-button");
let d6imgRoll = document.querySelector("#d6-roll");
let d6RollMean = document.querySelector("#d6-rolls-mean");
let d6RollMedian = document.querySelector("#d6-rolls-median");
let d6RollMode = document.querySelector("#d6-rolls-mode");


let doubleRollButton = document.querySelector("#double-d6-buttons");
let doubleRollImg1 = document.querySelector("#double-d6-roll-1");
let doubleRollImg2 = document.querySelector("#double-d6-roll-2");
let doubleSixMean = document.querySelector("#double-d6-rolls-mean");
let doubleSixMedian = document.querySelector("#double-d6-rolls-median");
let doubleSixMode = document.querySelector("#double-d6-rolls-mode");

let d12Button = document.querySelector("#d12-button");
let d12Img = document.querySelector("#d12-roll");
let d12Mean = document.querySelector("#d12-rolls-mean");
let d12Median = document.querySelector("#d12-rolls-median");
let d12Mode = document.querySelector("#d12-rolls-mode");

let d20Button = document.querySelector("#d20-button");
let d20Img = document.querySelector("#d20-roll");
let d20Mean = document.querySelector("#d20-rolls-mean");
let d20Median = document.querySelector("#d20-rolls-median");
let d20Mode = document.querySelector("#d20-rolls-mode");

let resetButton = document.querySelector("#reset-button");

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

// console.log(getRandomNumber(6));

/*******************
 * YOUR CODE BELOW *
 *******************/

/*******************
 * EVENT LISTENERS *
 *******************/


 d6Button.addEventListener("click", function(){

    d6Function();

});


doubleRollButton.addEventListener("click", function(){
    
    doubleRollFunction();

});


d12Button.addEventListener("click", function(){

    d12function();
})


d20Button.addEventListener("click", function(){

    d20function();

})

resetButton.addEventListener('click', function(){

    resetFunction();

});

/******************
 * RESET FUNCTION *
 ******************/

function resetFunction(){

    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];


    d6imgRoll.src = `images/start/d6.png`;
    d6RollMean.innerText = "NA";
    d6RollMedian.innerText = "NA";
    d6RollMode.innerText = "NA";

    doubleRollImg1.src = `images/start/d6.png`;
    doubleRollImg2.src = `images/start/d6.png`;
    doubleSixMean.innerText = "NA";
    doubleSixMedian.innerText = "NA";
    doubleSixMode.innerText = "NA";

    d12Img.src = "images/start/d12.jpeg";
    d12Mean.innerText = "NA";
    d12Median.innerText = "NA";
    d12Mode.innerText = "NA";
    

    d20Img.src = `images/start/d20.jpg`;
    d20Mean.innerText = "NA";
    d20Median.innerText = "NA";
    d20Mode.innerText = "NA";

};


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

function d6Function(){

    let d6NumRoll = getRandomNumber(6);

    sixes.push(d6NumRoll);

    console.log(sixes);

    d6imgRoll.src = `images/d6/${d6NumRoll}.png`;
    
    d6RollMean.innerText = getMean(sixes);
    d6RollMedian.innerText = getMedian(sixes);
    d6RollMode.innerText = getMode(sixes);
};

function doubleRollFunction(){

    let d6NumRoll1 = getRandomNumber(6);
    
    let d6NumRoll2 = getRandomNumber(6);
        
    doubleSixes.push(d6NumRoll1 + d6NumRoll2);

    console.log(doubleSixes);
    
    doubleRollImg1.src = `images/d6/${d6NumRoll1}.png`;
    doubleRollImg2.src = `images/d6/${d6NumRoll2}.png`;
    
    doubleSixMean.innerText = getMean(doubleSixes);
    doubleSixMedian.innerText = getMedian(doubleSixes);
    doubleSixMode.innerText = getMode(doubleSixes);

};

function d12function(){

    let d12NumRoll = getRandomNumber(12);

    twelves.push(d12NumRoll);

    d12Img.src = `images/numbers/${d12NumRoll}.png`;
    
    console.log(twelves);

    d12Mean.innerText = getMean(twelves);
    d12Median.innerText = getMedian(twelves);
    d12Mode.innerText = getMode(twelves);

};

function d20function(){

    let d20NumRoll = getRandomNumber(20);

    twenties.push(d20NumRoll);

    d20Img.src = `images/numbers/${d20NumRoll}.png`;

    console.log(twenties);
    
    d20Mean.innerText = getMean(twenties);
    d20Median.innerText = getMedian(twenties);
    d20Mode.innerText = getMode(twenties);
};



/****************
 * MATH SECTION *
 ****************/

function getMean(array){
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }

    let median = sum / array.length;

    return median.toPrecision(2);
}

function getMedian(array){

    let middle = Math.ceil((array.length/2) - 1);

    if(array.length % 2 !== 0){

        median = array[middle];

    } else if (array.length % 2 === 0){

        median = (array[middle + 1] + array[middle]) / 2;

    }

    return median;
};


function getMode(array){

    let sumCount = {};

    for (let i = 0; i < array.length; i++) {
        
        if (sumCount.hasOwnProperty(array[i])){
            sumCount[array[i]] += 1;
        } else {
            sumCount[array[i]] = 1;
        };
        
    }
    console.log(sumCount);
    
    let keysArray = Object.keys(sumCount);
    let valuesArray = Object.values(sumCount);
    let mostRepeated = 0;
    let mode = 0;

    for (let i = 0; i < valuesArray.length; i++) {
        if (valuesArray[i] > mostRepeated){
            mostRepeated = valuesArray[i];
            mode = keysArray[i];
        }
    }
    return mode;

}

// let obj1 = {
//     1 : 3,
//     2 : 2,
//     3 : 6,
// }

// console.log(obj1);
// // console.log(Object.values(obj1));
// // console.log([3,2,6]);
// console.log(getMode([1,1,1,2,2,3,3,3,3,3,3]));

// ==== WHYYYY ====

// let diceOne = document.querySelector("#dice-1");
// let diceTwo = document.querySelector("#dice-2");
// let diceThree = document.querySelector("#dice-3");
// let diceFour = document.querySelector("#dice-4");
// let diceFive = document.querySelector("#dice-5");
// let diceSix = document.querySelector("#dice-6");

// let oneImg = document.querySelector("#img-1");
// let twoImg = document.querySelector("#img-2");
// let threeImg = document.querySelector("#img-3");
// let fourImg = document.querySelector("#img-4");
// let fiveImg = document.querySelector("#img-5");
// let sixImg = document.querySelector("#img-6");
// let sevenImg = document.querySelector("#img-7");
// let eightImg = document.querySelector("#img-8");
// let nineImg = document.querySelector("#img-9");
// let tenImg = document.querySelector("#img-10");
// let elevenImg = document.querySelector("#img-11");
// let twelveImg = document.querySelector("#img-12");
// let thirteenImg = document.querySelector("#img-13");
// let fourteenImg = document.querySelector("#img-14");
// let fifteenImg = document.querySelector("#img-15");
// let sixteenImg = document.querySelector("#img-16");
// let seventeenImg = document.querySelector("#img-17");
// let eighteenImg = document.querySelector("#img-18");
// let nineteenImg = document.querySelector("#img-19");
// let twentyImg = document.querySelector("#img-20");

    // let modeCount = sumCount[`0`];
    
    // for (let i = 1; i <= 6; i++) {
    //     if (sumCount[`${i}`] > modeCount){
    //         modeCount = sumCount[`${i}`];
    //         console.log(modeCount);
    //     }
    // }
    // return modeCount;