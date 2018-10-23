const PubSub = require("../helpers/pub_sub.js");


const FormView = function(){

};

FormView.prototype.bindEvents = function () {
  const form = document.querySelector("#prime-checker-form");
  form.addEventListener("submit", (formSubmitEvent) => {
    formSubmitEvent.preventDefault();

    const inputNumber = formSubmitEvent.target.number.value;
    PubSub.publish("FormView:number-submitted", inputNumber);
    console.dir(formSubmitEvent);
    console.dir(formSubmitEvent.target);
    console.dir(formSubmitEvent.target.number)
    // console.dir(formSubmitEvent.target.number.valueAsNumber)
    console.dir(formSubmitEvent.target.number.value)

  });


};

module.exports = FormView;
