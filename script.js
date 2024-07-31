let submitBtn = document.getElementById("submit_button");
let mainTitle = document.getElementById("main_title");
let title_input = document.getElementById("title_input");
let noun_input = document.getElementById("noun");
let verb_input = document.getElementById("verb");
let adjective_input = document.getElementById("adjective");

function updateText() {
    let userInput = title_input.value;
    mainTitle.innerText = userInput;
}

title_input.addEventListener("input", updateText);

function alertPop() {
    let userInputTitle = title_input.value;
    let userInputNoun = noun_input.value;
    let userInputVerb = verb_input.value;
    let userInputAdjective = adjective_input.value;
    
    if (userInputTitle == "" || userInputNoun == "" || userInputVerb == "" || userInputAdjective == "") {
        alert("Please Fill in All Fields");
    } else {
        // Remove all child nodes from the body to clear the page
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }

        // Set the body's styles for centering 
        document.body.style.display = "flex";
        document.body.style.justifyContent = "center";
        document.body.style.alignItems = "center";
        document.body.style.height = "100vh"; // Full height of the viewport
        
        

        // Create a container div for the content 
        let container = document.createElement("div");
        container.style.border = "3px solid black";
        container.style.padding = "20px";
        container.style.textAlign = "center";
        

        // Create new elements and add to container
        let newHeader = document.createElement("h1");
        newHeader.innerHTML = userInputTitle;
        container.appendChild(newHeader);

        let newElement = document.createElement("p");
        newElement.innerHTML = `Last Night I ate a ${userInputNoun}, and today I just had to ${userInputVerb}. What a ${userInputAdjective} day.`;
        container.appendChild(newElement);

        // Append the container to the body
        document.body.appendChild(container);
    }
}

submitBtn.addEventListener("click", alertPop);
