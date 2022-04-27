// PIZZA DELIVERING PROJECT
// debugger;

// VARIBLES
let elSelectDough = document.querySelector(".js-dough-select");
let elDivSizeSelector = document.querySelector(".js-size-select-wrapper");
let elDivFillings = document.querySelector(".js-fillings-wrapper");
let elDivSouses = document.querySelector(".js-souses-wrapper");
let elPChoosenDough = document.querySelector(".js-dough-type");

// READY ANSWER VARIABLES
let elReadyAnswerSize = document.querySelector(".size-pizza");
let warningMessage = "Bo'sh qoldirmang";
let readyFillingsList = document.querySelector(".js-fillings-list");
let readySousesList = document.querySelector(".js-souses-list");

// LISTS(ARRAYS)
let doughTypes = ["small", "middle", "large"];
let sizeSelectors = [25, 30, 35];
let fillingsLists = ["tomato","pickled cucumber","turkey meat","mushrooms","olive","kazi"]; 
let sousesLists = ["spicy","cheese"];

// DOUGH SELECTION
for (let doughType of doughTypes) { 
    let elOptionDough = document.createElement("option");
    elOptionDough.textContent = doughType;
    elOptionDough.value = doughType;
    elSelectDough.append(elOptionDough);
}

elSelectDough.addEventListener("change", function(evt) {
    evt.preventDefault();
    
    let readySelected = document.createElement("span");
    for (readySelected of  doughTypes) {
         readySelected.textContent = doughTypes;
    }
    if(elSelectDough){
    readySelected.value = readySelected;
    readySelected.textContent = readySelected;
    elPChoosenDough.append(readySelected);
    }
    else {
        warningMessage;
    }
})
// ------- DOUGH SELECTION


// SIZE SELECTION
for (var sizeSelector of sizeSelectors) {
    let elInputOptionSize = document.createElement("input");
    let elLabelOptionSize = document.createElement("label");

    elInputOptionSize.textContent = sizeSelector;
    elInputOptionSize.value = sizeSelector;
    elDivSizeSelector.append(elInputOptionSize);

    elLabelOptionSize.for = "sizes";
    elLabelOptionSize.className = "white-color";
    elLabelOptionSize.textContent = sizeSelector;
    elDivSizeSelector.append(elLabelOptionSize);
    
    elInputOptionSize.id = "sizes";
    elInputOptionSize.type = "radio";
    elInputOptionSize.className = "sizes-style";
    elInputOptionSize.name = "sizes";
}

elDivSizeSelector.addEventListener("change", function(evt) {
    evt.preventDefault();
    
    if (elDivSizeSelector) {
        let spanSizeAnswer = document.createElement("span");
        spanSizeAnswer.textContent = sizeSelector;
        spanSizeAnswer.value = sizeSelector;
        elReadyAnswerSize.append(spanSizeAnswer);
    }
    else {
        warningMessage;
        return;
    }
})

// ----------- SIZE SELECTION


// FILLINGS SELECTION
for (let fillingsList of fillingsLists) {
    let fillingsChooseInput = document.createElement("input");
    let fillingsInputLabel = document.createElement("label");

    fillingsChooseInput.textContent = fillingsList;
    fillingsChooseInput.value = fillingsList;
    elDivFillings.append(fillingsChooseInput);
    
    fillingsInputLabel.textContent = fillingsList;
    fillingsInputLabel.value = fillingsList;
    fillingsInputLabel.className = "white-color"
    elDivFillings.append(fillingsInputLabel);

    fillingsChooseInput.type = "checkbox";
    fillingsChooseInput.className = "checkbox-inputs";
    fillingsChooseInput.id = "checkbox-items";
    fillingsInputLabel.for = "checkbox-items";
}

elDivFillings.addEventListener("change", function(evt) {
    evt.preventDefault();

    if (elDivFillings) {
        let readyItems = document.createElement("li");
        for (readyItems of  fillingsLists) {
            readyItems.textContent = readyItems;
        }
        readyItems.value = readyItems;
        readyFillingsList.append(readyItems);
    }
    else {
        warningMessage;
    }
})
// -------- FILLINGS SELECTION


// SOUSES SELECTION
for (let sousesList of sousesLists) {
    let elSousesInput = document.createElement("input");
    let elSousesInputLabel = document.createElement("label");

    elSousesInput.value = sousesList;
    elDivSouses.append(elSousesInput);
    elSousesInputLabel.textContent = sousesList;
    elSousesInputLabel.value = sousesList;
    elSousesInputLabel.className = "white-color"
    elDivSouses.append(elSousesInputLabel);

    elSousesInput.type = "checkbox";
    elSousesInput.className = "checkbox-inputs";
}

elDivSouses.addEventListener("change", function(evt) {
    evt.preventDefault();

    if (elDivSouses) {
        let readyItemsSouse = document.createElement("li");
        for (readyItemsSouse of  sousesLists) {
            readyItemsSouse.textContent = readyItemsSouse;
        }
        readyItemsSouse.value = readyItemsSouse;
        readySousesList.append(readyItemsSouse);
    }
    else {
        warningMessage;
    }
})

// -------- SOUSES SELECTION
