//select all form navigation buttons, and loop through them
function navigateToFormStep(stepNumber) {
  //hide all form steps.
  document.querySelectorAll(".slide").forEach((formStepElement) => {
    formStepElement.classList.add("d-none");
    console.log("slide:");
    console.log(formStepElement);
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
  console.log("stepNumber:");
  console.log(".slide" + stepNumber);
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

document.querySelectorAll(".navButton").forEach((formNavigationBtn) => {
  formNavigationBtn.addEventListener("click", () => {
    const stepNumber = parseInt(formNavigationBtn.getAttribute("step_number"));
    console.log("primary stepnumber");
    console.log(stepNumber);
    navigateToFormStep(stepNumber);
  });
});
