//select all form navigation buttons, and loop through them
function navigateToFormStep(stepNumber) {
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

function test() {
  let testButton = document.querySelector("#testButton");
  testButton.addEventListener("click", () => {
    handleChoices();
  });
}

//Checks inputs if any were selected/entered. Returns true if there was data.
function checkInput(clicked) {
  let status = false;
  if (clicked.nodeName == "INPUT") {
    if (clicked.getAttribute("type") == "radio") {
      //For yes/no choices, if one is checked - it's valid
      status = clicked.checked;
    } else if (clicked.getAttribute("type") == "number") {
      //The input is valid if there is a number entered
      status = clicked.value.length > 0;    }
  } else if (clicked.nodeName == "SELECT") {
    status = clicked.value;
  } else if (clicked.nodeName == "BUTTON") {
    //for the measure point buttons, reset values for inputs when we change input mode
    let ch = clicked.getAttribute("choice");
    let corr = document.querySelector(`.${ch}`);

    //reset input value that corresponds to the input type selected
    corr.querySelector("input").value = "";
    //reset validation
    status = false;
  }
  return status;
}

//scans for choices, puts listeners onto them
function handleChoices() {
  let answers = document.querySelectorAll(".answer .choiceInput");

  answers.forEach((answer) => {    
    let parentSlide = answer.closest(".slide");

    let nav = parentSlide.querySelector(".navNext");
    //let localError = parentSlide.querySelector(".error");

    //For inputs of measure units, we add a listener to any change in the input box
    if (answer.nodeName == "INPUT" && answer.getAttribute("type") == "number") {
      answer.addEventListener("input", () => {
        nav.disabled = !checkInput(answer);
      })
    } else {//for all other buttons etc, it's just click
      answer.addEventListener("click", () => {
        nav.disabled = !checkInput(answer);
      });
    }
  });
}

//Error display - in case we have error functionality (we don't rn)
function runError(borderArea, message) {
  borderArea.classList.add("errorArea");
  //console.log(borderArea);

  //console.log(message);
  // let findD = document.querySelector(`.${message}`);
  //console.log(findD);
}

//When the form is complete, collect the data to export
function collectData() { }

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
          let corr = document.querySelector(`.${ch}`);
          corr.classList.add("d-none");
        });
      }

      choiceButton.classList.add("clicked");

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
  //test();
  handleChoices();
  modalNav();
  measurePoints();
}

document.addEventListener("DOMContentLoaded", run());
