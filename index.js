// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.
function setupEventListeners(){
const button=document.getElementById("simulate-click")
const form =document.getElementById("user-form")
const dynamic=document.getElementById("dynamic-content")
const input=document.getElementById("user-input")

 if (button && dynamic) {
        button.addEventListener("click", () => {
            dynamic.textContent = "Button clicked";
        });
    }

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            handleFormSubmit();
        });
    }
}

if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", setupEventListeners);
    } else {
        setupEventListeners();
    }

}

function addItem(){
    const add=document.createElement("li")
    add.textContent="New Item"
    dynamic.appendChild(add)
}

function updateItem(){
  document.getElementById("simulate-click").textContent = "CLICK"
}


function removeItem(){
    document.getElementById("Simulate-clinic").remove()
};
function handleFormSubmit(){
    const input = document.getElementById("user-input");
    const error = document.getElementById("error-message");
    const dynamic= document.getElementById("dynamic-content");


    if(input.value===""){
       error.textContent="Input cannot be empty"
       error.classList.remove("hidden")
    }else{
       error.classList.add("hidden")
       dynamic.textContent=input.value
    }
}
function createElement(tag, attributes = {}, content = "") {
    const element = document.createElement(tag);

    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
    }

    element.textContent = content;

    return element;
}

function showError(message) {
    const error = document.getElementById("error-message");

    if (!error) {
        console.error(message);
        return;
    }

    error.textContent = message;
    error.classList.remove("hidden");
}

function hideError() {
    const error = document.getElementById("error-message");

    if (error) {
        error.textContent = "";
        error.classList.add("hidden");
    }
}

function addElementToDOM(containerId, content) {
    const container = document.getElementById(containerId);

    if (!container) {
        showError("Container not found");
        return;
    }

    const element = document.createElement("div");
    element.textContent = content;
    container.appendChild(element);
}

function removeElementFromDOM(elementId) {
    const element = document.getElementById(elementId);

    if (!element) {
        showError("Element not found");
        return;
    }

    element.remove();
}

function simulateClick(containerId, message) {
    const container = document.getElementById(containerId);

    if (!container) {
        showError("Container not found");
        return;
    }

    container.textContent = message;
}

module.exports = {
     addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    addItem,
    updateItem,
    removeItem,
    handleFormSubmit,
    createElement,
    showError,
    hideError
};