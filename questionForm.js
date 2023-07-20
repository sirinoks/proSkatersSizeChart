//select all form navigation buttons, and loop through them
function navigateToFormStep(stepNumber) {
  console.log("navFunction:");
  console.log(stepNumber);
  //hide all form steps.
  document.querySelectorAll(".slide").forEach((formStepElement) => {
    formStepElement.classList.add("d-none");
  });

  //mark all form steps as unfinished
  document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
    formStepHeader.classList.add("form-stepper-unfinished");
    formStepHeader.classList.remove(
      "form-stepper-active",
      "form-stepper-completed"
    );
  });

  //show the current form step (as passed to the function)
  //console.log("stepNumber:");
  //console.log(".slide" + stepNumber);
  document.querySelector(".slide" + stepNumber).classList.remove("d-none");

  //select the form step circle (progress bar)
  const formStepCircle = document.querySelector(
    'li[step="' + stepNumber + '"]'
  );
  //mark the current form step as active
  formStepCircle.classList.remove(
    "form-stepper-unfinished",
    "form-stepper-completed"
  );
  formStepCircle.classList.add("form-stepper-active");

  //loop through each form step circles
  for (let index = 0; index < stepNumber; index++) {
    const formStepCircle = document.querySelector('li[step="' + index + '"]');
    if (formStepCircle) {
      //mark the form step as completed.
      formStepCircle.classList.remove(
        "form-stepper-unfinished",
        "form-stepper-active"
      );
      formStepCircle.classList.add("form-stepper-completed");
    }
  }
}

//Checks if the data has been entered, and the user can proceed to next step
function validateInput(options) {
  console.log("in valudation:");
  console.log(options);
  return true;
}

//When the form is complete, collect the data to export
function collectData() {}

//checks if on slide1 user selected no. Then we need to skip step 2
function slideOneChoiceNo() {
  return document.querySelector("#haveChoiceNo").checked;
}

//slide3 button and measure points showing up functionality
function measurePoints() {
  document.querySelectorAll(".measurePoint").forEach((choiceButton) => {
    choiceButton.addEventListener("click", () => {
      let choice = choiceButton.getAttribute("choice");

      if (
        !choiceButton.classList.contains("clicked") &&
        document.querySelectorAll(".measurePoint.clicked").length > 0
      ) {
        document.querySelectorAll(".measurePoint.clicked").forEach((btn) => {
          //remove all the elements
          btn.classList.remove("clicked");
          let ch = btn.getAttribute("choice");
          document.querySelector(`.${ch}`).classList.add("d-none");
        });
      }

      choiceButton.classList.add("clicked");
      let check= validateInput(choiceButton);
      console.log("check for validation return")
      console.log(check);
      document.querySelector(`.${choice}`).classList.remove("d-none");
    });
  });
}

function modalNav() {
  document.querySelectorAll(".navButton").forEach((formNavigationBtn) => {
    formNavigationBtn.addEventListener("click", () => {
      const targetStepNumber = parseInt(
        formNavigationBtn.getAttribute("targetStepNumber")
      );
      const currentStep = parseInt(
        formNavigationBtn.getAttribute("currentStepNumber")
      );

      //if the button is next
      if (currentStep < targetStepNumber) {
        //skip step2 if the user doesn't have skates
        if (currentStep == 1 && slideOneChoiceNo()) {
          console.log("true");
          navigateToFormStep(targetStepNumber + 1);
        } else {
          navigateToFormStep(targetStepNumber);
        }
      } else {
        if (currentStep == 3 && slideOneChoiceNo()) {
          navigateToFormStep(targetStepNumber - 1);
        } else {
          navigateToFormStep(targetStepNumber);
        }
      }
    });
  });
}

function run() {
  modalNav();
  measurePoints();
}

document.addEventListener("DOMContentLoaded", run());
