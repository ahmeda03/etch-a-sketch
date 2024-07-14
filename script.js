const sketchContainer = document.querySelector(".sketchContainer");
const resizeButton = document.querySelector(".resizeButton");

generateSketchPad();
sketchContainer.addEventListener("mouseover", activateBox);
resizeButton.addEventListener("click", resizeSketchPad);

function activateBox(event) {
    let boxID = event.target.id;
    if (boxID) {
        let box = document.querySelector(`#\\3${boxID[0]} ${boxID.slice(1)}`);
        box.classList.add("boxHoveredOver");
    }
}



function generateSketchPad(numOfBoxes = 16) {
    /*
    INIT container by grabbing reference to sketch pad container
    INIT sketchpad width and sketchpad height to 16 (number of boxes)

    FOR every box within the sketchpad 
        Create the box
        Insert the into the container of the page
    END FOR
    */
    const NUM_OF_HORIZONTAL_BOXES = 16;
    const NUM_OF_VERTICAL_BOXES = 16;

    let sketchBox = null;

    const sketchContainerStyles = window.getComputedStyle(sketchContainer);
    const sketchContainerWidth = parseInt(sketchContainerStyles.getPropertyValue('width'));
    const sketchContainerHeight = parseInt(sketchContainerStyles.getPropertyValue('height'));

    /*
    TO GET INDEX OF CURRENT ELEMENT 
    {count} = {index of current loop} + {size of current loop}*{count of parent loop}
    
    https://stackoverflow.com/questions/43660757/iteration-counter-for-double-loops
    */

    for (let i = 0; i < numOfBoxes; i++) {
        for (let k = 0; k < numOfBoxes; k++) {
            sketchBox = document.createElement("div");
            sketchBox.classList.add("sketchBox");
            sketchBox.setAttribute("id", k + numOfBoxes * i);
            sketchBox.setAttribute("style", `width: ${sketchContainerWidth / numOfBoxes}px; height: ${sketchContainerHeight / numOfBoxes}px;`)
            sketchContainer.appendChild(sketchBox);
        } 
    }
}

function deleteSketchPad() {
    /*
    INIT references to the entire list of sketch boxes
    FOR each sketch box 
        Delete node
    END FOR
    */

    const sketchBoxes = document.querySelectorAll(".sketchContainer > .sketchBox");
    for (const box of sketchBoxes) {
        sketchContainer.removeChild(box);
    }
}

function resizeSketchPad() {
    /*
    GET size of sketch pad from user
    IF invalid num 

    ELSE IF size is greater than 100 THEN
        DISPLAY too large message
    ELSE
    
    END IF

    CALL deleteSketchPad to get rid of the already existing boxes
    CALL generateSketchPad to create the new sketchpad
    */
    let numOfBoxes = (prompt("Enter the number of boxes: "));

    if (numOfBoxes === "" || isNaN(+numOfBoxes)) {
        alert("Please enter a valid value.");
    } else if (numOfBoxes === null) {
        // Do nothing
    } else if (numOfBoxes > 100) {
        alert("The max number of boxes is 100. Please enter a valid value.");
    } else {
        console.log("entered");
        deleteSketchPad();
        generateSketchPad(numOfBoxes);
    }   
}