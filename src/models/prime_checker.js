const PubSub = require("../helpers/pub_sub.js");

const PrimeChecker = function(){

};

PrimeChecker.prototype.bindEvents = function () {
  // needs to listen to the pubsub for the number that's coming in, and then run that nuber through the numberIsPrime function below.
  PubSub.subscribe("FormView:number-submitted", (event) => {
    const inputNumber = event.detail;
    // console.log("inputNumber:", inputNumber);

    const result = this.numberIsPrime(inputNumber);
    // there's no ppublish yet, so to test, just log the result.
    // console.log("number is prime?", result);
    PubSub.publish("PrimeChecker:result-returned", result)
  });


};

PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return "Awwwww, hell naaaaw.";
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return "Awwwww, hell naaaaw.";
    }
  }
  return "Fuck yeah it is MuthaFucka!";
};

module.exports = PrimeChecker;
