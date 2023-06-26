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
const multipleArrayData = [
  [0, 0, 0, 10.5, 0, 0, 0, 0, 16.5],
  [0, 0, 0, 11, 0, 0, 0, 0, 17],
  [0, 0, 0, 11.5, 0, 0, 0, 0, 17.5],
  [0, 0, 0, 12, 0, 0, 0, 0, 18],
  [0, 0, 0, 12.5, 0, 0, 0, 0, 18.5],
  [0, 0, 0, 13, 0, 0, 0, 0, 19],
  [0, 0, 0, 13.5, 0, 0, 0, 0, 20],
  [0, 0, 0, 1, 0, 0, 0, 0, 20.5],
  [0, 0, 0, 1.5, 0, 0, 0, 0, 21],
  [0, 0, 0, 2, 0, 0, 0, 0, 21.5],
  [0, 5, 0, 2.5, 0, 0, 0, 0, 22],
  [0, 5.5, 0, 3.5, 0, 0, 0, 0, 22.5],
  [0, 6, 0, 4.5, 0, 0, 0, 0, 23],
  [0, 6.5, 0, 5, 0, 0, 0, 0, 23.5],
  [0, 7, 6, 5.5, 0, 0, 0, 0, 24],
  [0, 7.5, 6.5, 6, 0, 0, 0, 0, 24.5],
  [0, 8, 7, 6.5, 0, 0, 0, 0, 25],
  [0, 8.5, 7.5, 7, 0, 0, 0, 0, 25.5],
  [0, 9, 8, 0, 0, 0, 0, 0, 26],
  [0, 9.5, 8.5, 0, 0, 0, 0, 0, 26.5],
  [0, 10, 9, 0, 0, 0, 0, 0, 27],
  [0, 10.5, 9.5, 0, 0, 0, 0, 0, 27.5],
  [0, 11, 10, 0, 0, 0, 0, 0, 28],
  [0, 11.5, 10.5, 0, 0, 0, 0, 0, 28.5],
  [0, 12, 11, 0, 0, 0, 0, 0, 29],
  [0, 0, 11.5, 0, 0, 0, 0, 0, 29.5],
  [0, 0, 12, 0, 0, 0, 0, 0, 30],
  [0, 0, 12.5, 0, 0, 0, 0, 0, 30.5],
  [0, 0, 13, 0, 0, 0, 0, 0, 31],
  [0, 0, 14, 0, 0, 0, 0, 0, 32],
  [0, 0, 15, 0, 0, 0, 0, 0, 33],
  [0, 0, 16, 0, 0, 0, 0, 0, 33.5],
  [0, 0, 17, 0, 0, 0, 0, 0, 34.5],
  [0, 0, 18, 0, 0, 0, 0, 0, 35.5]
];

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

function createRows(rowAmount) {
  let tableContent = document.querySelector(".conversionTableContent");
  console.log("creating rows");
  for (let i = 0; i < rowAmount; i++) {
    console.log(i);
    let tr = document.createElement("tr");
    tr.setAttribute("id", `tr-${i}`);

    waitForElm(`#tr-${i}`).then((elm) => {
      console.log("Element is ready");
      console.log(elm.textContent);
    });

    let th = document.createElement("th");
    tr.setAttribute("id", `th-${i}`);
    tr.append(th);
    for (let j = 0; j < 8; j++) {
      console.log(j);
      var td = document.createElement("td");
      td.setAttribute("id", `td-${i}-${j}`);
      tr.append(td);
    }
    tableContent.append(th);
  }
}

function populateRows(allRows) {
  console.log("populating rows");
  //put data into the table
  for (let i = 0; i < multipleArrayData.length; i++) {
    for (let j = 0; j < allRows[i].children.length; j++) {
      //console.log(i, j);
      //console.log(allRows[i].children[j]);
      allRows[i].children[j].innerHTML = multipleArrayData[i][j];
    }
  }
}

//remove cells that have 0, make them empty
function styleEmptyCells(allRows) {
  allRows.forEach((row) => {
    let cells = row.querySelectorAll("th,td");
    cells.forEach((cell) => {
      if (cell.textContent == "0") {
        cell.innerText = "";
      }
    });
  });
}

function removeExtraRows(allRows) {
  for (let q = multipleArrayData.length; q < allRows.length; q++) {
    allRows[q].remove();
  }
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
  select.style.transform = `translateX(${rectSelect.left-rectParent.left}px)`;
  //transform to adjust to the button's width and height
  select.style.width = `${rectSelect.width}px`;
  select.style.height = `${rectSelect.height}px`;

}

function handleSkateButtons(){
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

function handleBrandButtons(){
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
      animateSelection(ev, button);
    });
  });
}

function handleButtons() {
  handleSkateButtons();
  handleBrandButtons();
}

function run() {
  console.log("ready");

  //createRows(multipleArrayData.length);

  let allRows = document.querySelectorAll(".conversionTableContent tr");
  removeExtraRows(allRows);

  populateRows(allRows);

  styleEmptyCells(allRows);

  handleButtons();
}

//run everything after the page is loaded
document.addEventListener("DOMContentLoaded", run());
