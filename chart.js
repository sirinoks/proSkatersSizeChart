//data
let brandChosen = "";
let skateChosen = "";

const calculatedData = [
    2,
    5,
    6,
    2,
    15,
    6,
    34,
    64,
    23,
    2,
    54,
    23,
    643,
    23,
    643,
    23,
    643,
    32,
    123,
    643,
    75,
    43
];
const smallerDataPool = [3, 2, 56, 4, 2];


var brands_table = {};
var brands_list = [];
var brand_skates = [];
var brand_shoes = [];
var my_size_cm = 0;
var my_size_mm = 0;
var my_size_mp = 0;
var my_size_mondo = 0;
var my_size_brand = "";

//Change this variable if you would like the table to be displayed on localhost
var is_localhost = true;
var local_host_data = { "plugin_brands_table": { "table_data": { "Puma": [{ "psp_sizing_cm": "3", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "0", "psp_sizing_us_j": "0", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "1", "psp_sizing_mp": "2", "psp_sizing_mondo": "3", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "0", "psp_sizing_us_j": "0", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "1", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "0", "psp_sizing_us_j": "0", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "2", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "0", "psp_sizing_us_j": "0", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "3", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "0", "psp_sizing_us_j": "0", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "5", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "0", "psp_sizing_us_j": "0", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }], "Adidas": [{ "psp_sizing_cm": "16.5", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "0", "psp_sizing_us_j": "10.5", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "17", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "0", "psp_sizing_us_j": "11", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "17.5", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "0", "psp_sizing_us_j": "11.5", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "18", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "0", "psp_sizing_us_j": "12", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "18.5", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "0", "psp_sizing_us_j": "12.5", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "19", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "0", "psp_sizing_us_j": "13", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "20", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "0", "psp_sizing_us_j": "13.5", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "20.5", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "0", "psp_sizing_us_j": "1", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "21", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "0", "psp_sizing_us_j": "1.5", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "21.5", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "0", "psp_sizing_us_j": "2", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "22", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "5", "psp_sizing_us_m": "0", "psp_sizing_us_j": "2.5", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "22.5", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "5.5", "psp_sizing_us_m": "0", "psp_sizing_us_j": "3.5", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "23", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "6", "psp_sizing_us_m": "0", "psp_sizing_us_j": "4.5", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "23.5", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "6.5", "psp_sizing_us_m": "0", "psp_sizing_us_j": "5", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "24", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "7", "psp_sizing_us_m": "6", "psp_sizing_us_j": "5.5", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "24.5", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "7.5", "psp_sizing_us_m": "6.5", "psp_sizing_us_j": "6", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "25", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "8", "psp_sizing_us_m": "7", "psp_sizing_us_j": "6.5", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "25.5", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "8.5", "psp_sizing_us_m": "7.5", "psp_sizing_us_j": "7", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "26", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "9", "psp_sizing_us_m": "8", "psp_sizing_us_j": "0", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "26.5", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "9.5", "psp_sizing_us_m": "8.5", "psp_sizing_us_j": "0", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "27", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "10", "psp_sizing_us_m": "9", "psp_sizing_us_j": "0", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "27.5", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "10.5", "psp_sizing_us_m": "9.5", "psp_sizing_us_j": "0", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "28", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "11", "psp_sizing_us_m": "10", "psp_sizing_us_j": "0", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "28.5", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "11.5", "psp_sizing_us_m": "10.5", "psp_sizing_us_j": "0", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "29", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "12", "psp_sizing_us_m": "11", "psp_sizing_us_j": "0", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "29.5", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "11.5", "psp_sizing_us_j": "0", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "30", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "12", "psp_sizing_us_j": "0", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "30.5", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "12.5", "psp_sizing_us_j": "0", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "31", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "13", "psp_sizing_us_j": "0", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "32", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "14", "psp_sizing_us_j": "0", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "33", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "15", "psp_sizing_us_j": "0", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "33.5", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "16", "psp_sizing_us_j": "0", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "34.5", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "17", "psp_sizing_us_j": "0", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "35.5", "psp_sizing_mp": "0", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "18", "psp_sizing_us_j": "0", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }, { "psp_sizing_cm": "3333", "psp_sizing_mp": "333", "psp_sizing_mondo": "0", "psp_sizing_eu": "0", "psp_sizing_us_w": "0", "psp_sizing_us_m": "0", "psp_sizing_us_j": "0", "psp_sizing_uk_w": "0", "psp_sizing_uk_m": "0", "psp_sizing_uk_j": "0" }], "Seba - Skates": [{ "psp_sizing_cm": "1", "psp_sizing_mp": "2", "psp_sizing_mondo": "3", "psp_sizing_eu": "4", "psp_sizing_us_w": "5", "psp_sizing_us_m": "6", "psp_sizing_us_j": "7", "psp_sizing_uk_w": "8", "psp_sizing_uk_m": "9", "psp_sizing_uk_j": "0" }] } }, "plugin_brands_list": ["Adidas", "Puma", "Seba - Skates"] };

function waitForElm(el) {
    return new Promise((resolve) => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver((mutations) => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

function calculateSizes() {
    console.log("sizes:");
    console.log(brandChosen);
    console.log(skateChosen);
}

function checkChosen(category, choice) {
    console.log(category);
    console.log(choice);

    if (
        category == "brand" &&
        document.querySelectorAll(".brandChoice.clicked") > 0
    ) {
        console.log("here1");
        brandChosen = choice;
        calculateSizes();
    } else if (
        category == "skate" &&
        document.querySelectorAll(".skateChoice.clicked") > 0
    ) {
        console.log("here2");

        skateChosen = choice;
        calculateSizes();
    }

    //Call function to recalculate
}

function animateSelection(ev, button) {
    let select = document.querySelector(".selectSkateStyle");
    let rectSelect = button.getBoundingClientRect();
    //Need to adjust pixel position to the parent element
    let rectParent = select.parentElement.getBoundingClientRect();
    //move to the button's position
    select.style.transform = `translateX(${rectSelect.left - rectParent.left}px)`;
    //transform to adjust to the button's width and height
    select.style.width = `${rectSelect.width}px`;
    select.style.height = `${rectSelect.height}px`;

}

function handleSkateButtons() {
    let skateButtons = document.querySelectorAll(".skateChoice");
    skateButtons.forEach((button) => {
        button.addEventListener("click", () => {
            //if you're not clicking on an already selected element and if there are no other clicked elements
            if (
                !button.classList.contains("clicked") &&
                document.querySelectorAll(".skateChoice.clicked").length > 0
            ) {
                document.querySelectorAll(".skateChoice.clicked").forEach((btn) => {
                    //remove all the elements
                    btn.classList.remove("clicked");
                });
            }
            button.classList.toggle("clicked");
            checkChosen("skate", button.innerText);
        });
    });
}

function handleBrandButtons() {
    let brandButtons = document.querySelectorAll(".brandChoice");

    brandButtons.forEach((button) => {
        button.addEventListener("click", (ev) => {
            //if you're not clicking on an already selected element and if there are no other clicked elements
            if (
                !button.classList.contains("clicked") &&
                document.querySelectorAll(".brandChoice.clicked").length > 0
            ) {
                document.querySelectorAll(".brandChoice.clicked").forEach((btn) => {
                    //remove all the elements
                    btn.classList.remove("clicked");
                });
            }
            button.classList.toggle("clicked");
            checkChosen("brand", button.innerText);
            console.log("animate active");
            animateSelection(ev, button);
        });
    });
}

function handleButtons() {
    console.log("handle buttons active");
    handleSkateButtons();
    handleBrandButtons();
}




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
    console.log("test");
    testButton.addEventListener("click", () => {
        handleChart();
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
            status = clicked.value.length > 0;
        }
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
    document.querySelectorAll(".navButton:not(#finalButton)").forEach((formNavigationBtn) => {
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

async function handleQuestionnaire() {
    console.log("handleQuestionnaire");
    handleChoices();
    modalNav();
    measurePoints();
    document.querySelector("#finalButton").addEventListener("click", () => {
        handleChart();
    });
}

function handleChart() {
    console.log("handle chart");
    handleButtons();
    document.querySelector(".chart").style.display = "inherit";
    handleStickyTableHeader();

    var cmSize = document.querySelector(".choicePack #choiceCm").value;
    var mmSize = document.querySelector(".choicePack #choiceMm").value;
    var mpSize = document.querySelector(".choicePack #choiceMp").value;
    var mondoSize = document.querySelector(".choicePack #choiceMondo").value;
    var currentSize = document.querySelectorAll(".choicePack:not(.d-none)")[0];
    var selectedBrand = document.querySelector("#brand").selectedOptions[0].value;

    set_global_size_choise(cmSize, mmSize, mpSize, mondoSize, selectedBrand, currentSize);
    update_table();
}

function set_global_size_choise(cm, mm, mp, mondo, brand, currentSize) {
    console.log("set_global_size_choise");

    my_size_brand = brand;
    if (currentSize.classList.contains("choiceCm")) {
        my_size_cm = cm;
        my_size_mm = 0;
        my_size_mp = 0;
        my_size_mondo = 0;

        //if 160+ probably user wanted MM
        if (my_size_cm > 160) {
            my_size_cm = 0;
            my_size_mm = cm;
        }
    }
    else if (currentSize.classList.contains("choiceMm")) {
        my_size_cm = 0;
        my_size_mm = mm;
        my_size_mp = 0;
        my_size_mondo = 0;

        //if 160 probably user wanted CM
        if (my_size_mm < 160) {
            my_size_mm = 0;
            my_size_cm = mm;
        }
    }
    else if (currentSize.classList.contains("choiceMp")) {
        my_size_cm = 0;
        my_size_mm = 0;
        my_size_mp = mp;
        my_size_mondo = 0;
    }
    else if (currentSize.classList.contains("choiceMondo")) {
        my_size_cm = 0;
        my_size_mm = 0;
        my_size_mp = 0;
        my_size_mondo = mondo;
    }
}

async function handleEventListeners() {
    console.log("handleEventListeners");
    // update table on brandChoice change
    document.querySelectorAll(".brandChoice").forEach(brand =>
        brand.addEventListener("click", (event) => update_table(event.target.innerText))
    )
}


// get size text, if size is 0, return empty string
function get_size_text(size) {
    return (size > 0) ? size : "";
}

// change table 
function update_table(brandName = "") {
    var brand_data = {};
    var skate_data = {};

    if (brandName.length > 0) {
        brand_data = brands_table.table_data[brandName]
    }
    else {
        brand_data = brands_table.table_data[brand_shoes[0]]
    }

    if (my_size_brand.length > 0) {
        skate_data = brands_table.table_data[my_size_brand];
    }

    // console.log(`my_size_mm: ${my_size_mm}`);
    // console.log(`my_size_cm: ${my_size_cm}`);
    // console.log(`my_size_mp: ${my_size_mp}`);
    // console.log(`my_size_mondo: ${my_size_mondo}`);

    // console.log("skate_data");
    // console.log(skate_data);


    let tableContent = document.querySelector(".conversionTableContent");
    //empty the table
    tableContent.innerHTML = "";

    brand_data.forEach((size_data) => {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.innerHTML = "0";
        tr.append(th);
        //for each measurement we have in data, create a column with its value
        for (const [key, value] of Object.entries(size_data)) {
            // console.log(`${key}: ${value}`);
            if (key != "psp_sizing_mp" && key != "psp_sizing_mondo") {//unused values
                let td = document.createElement("td");
                td.innerHTML = `${get_size_text(value)}`;
                tr.append(td);
            }
        }

        tableContent.append(tr);
    });
}


// Add skateChoice
async function psp_calculator_plugin_add_skateChoice(brandName) {
    let div = document.createElement("div");
    div.innerHTML = String(brandName);
    div.classList.add("skateChoice");
    document.querySelector(".leftCol").append(div)
}

// Add brandChoice
async function psp_calculator_plugin_add_brandChoice(brandName) {
    let div = document.createElement("div");
    div.innerHTML = String(brandName);
    div.classList.add("brandChoice");
    document.querySelector(".brandContainer").prepend(div)
}

// Add skateBrandChoice for questionnaire
async function psp_calculator_plugin_add_skateBrandChoice(brandName) {
    let option = document.createElement("option");
    option.innerHTML = `<option value="${brandName}">${brandName}</option>`;
    document.querySelector("#brand").append(option)
}

// Update global data from WordPress DB
async function update_global_data() {
    console.log("update_global_data");
    var wp_data = {};

    //loading data from local_host_data or from WordPress DB
    if (is_localhost) {
        wp_data = local_host_data;
    }
    else {
        console.log("is pspCalculatorPluginConfig loaded?");
        while (typeof pspCalculatorPluginConfig === 'undefined') {
            console.log("checking...");
            await sleep(200);
        }
        wp_data = pspCalculatorPluginConfig;
        console.log("pspCalculatorPluginConfig loaded.");
    }

    console.log("Loading table from wp_data...");
    brands_table = wp_data.plugin_brands_table;
    if (brands_table.length == 0) {
        brands_table = {};
    }

    console.log("Loading list from wp_data...");
    brands_list = wp_data.plugin_brands_list;
    if (brands_list.length == 0) {
        brands_list = [];
    }

    if (brands_list.length > 0) {
        brands_list.forEach(function (brandName) {
            if (brandName.toLowerCase().includes("skate")) {
                psp_calculator_plugin_add_skateChoice(brandName);
                psp_calculator_plugin_add_skateBrandChoice(brandName);
                brand_skates.push(brandName);
            }
            else {
                psp_calculator_plugin_add_brandChoice(brandName);
                brand_shoes.push(brandName);
            }
        });
    }
}

function handleStickyTableHeader() {
    let header = document.querySelector("#chartHeader");
    let content = document.querySelector(".conversionTableContent");
    let fake = document.querySelector("#fakeHeader");

    let sticky = header.getBoundingClientRect().top;

    document.addEventListener("scroll", () => {
        console.log(window.pageYOffset);
        console.log(sticky);
        // console.log(window.pageYOffset + sticky);
        console.log("--");

        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            content.classList.add("stickContent");
            fake.style.display="table-header-group";

        } else {
            header.classList.remove("sticky");
            content.classList.remove("stickContent");
            fake.style.display="none";

        }
    });
}

async function run() {
    console.log("ready");
    test();
    handleQuestionnaire();

    await update_global_data();
    // We have to wait for the global data to be loaded
    handleEventListeners();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//run everything after the page is loaded
document.addEventListener("DOMContentLoaded", run());
