// PIZZA DELIVERING PROJECT
// debugger;

// VARIBLES
let elSelectDough = document.querySelector(".js-dough-select");
let elDivSizeSelector = document.querySelector(".js-size-select-wrapper");
let elDivFillings = document.querySelector(".js-fillings-wrapper");
let elDivSouses = document.querySelector(".js-souses-wrapper");
let elPChoosenDough = document.querySelector(".js-dough-type");

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

elDivSizeSelector.addEventListener("submit", function(evt) {
    evt.preventDefault();
    

})
// ------- DOUGH SELECTION


// SIZE SELECTION
for (let sizeSelector of sizeSelectors) {
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
// -------- SOUSES SELECTION
