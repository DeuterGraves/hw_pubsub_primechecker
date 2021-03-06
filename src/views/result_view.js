const PubSub = require("../helpers/pub_sub.js");

const ResultView = function(){

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe("PrimeChecker:result-returned", (resultReturnedEvent) => {
    const isItPrime = resultReturnedEvent.detail;
    this.displayResult(isItPrime);
  });
};

  ResultView.prototype.displayResult = function (result) {
    const resultElement = document.querySelector("#result");
    resultElement.textContent = `Is that MF Prime? ${ result }`

  };

module.exports = ResultView;
