const PubSub = require("../helpers/pub_sub.js");

const PrimeChecker = function(){
// could do the the bind events in the constructor but that's not really whata constructor is for - we're reaching outside our class to talk to the document etc.
// constructor is more for holding data about the object created by the constructor.
};

// binding the action to an event that happens i.e the event triggers the action...
PrimeChecker.prototype.bindEvents = function () {
  // needs to listen to the pubsub for the number that's coming in, and then run that nuber through the numberIsPrime function below.
  PubSub.subscribe("FormView:number-submitted", (numberSubmittedEvent) => {
    const inputNumber = numberSubmittedEvent.detail;
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
