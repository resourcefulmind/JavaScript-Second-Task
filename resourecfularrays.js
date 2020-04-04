let data = [
    { principal: 2500, time: 1.8 },
    { principal: 1000, time: 5 },
    { principal: 3000, time: 1 },
    { principal: 2000, time: 3 }
];

function interestCalculator(array) {
    let interestData = [];
    array.forEach(element => {
        let rate;
        const { principal, time } = element;
        if (principal >= 2500 && time > 1 && time < 3 ) {
            rate = 3;
        } else if(principal >= 2500 && time >= 3) {
            rate = 4;
        } else if(principal < 2500 && time <= 1) {
            rate = 2;
        } else {
            rate = 1;
        };
        let interest = (principal * rate * time)/100
        element.interest = interest;
        interestData.push(element);
    });
    console.log(interestData);
    return(interestData);
};
interestCalculator(data);