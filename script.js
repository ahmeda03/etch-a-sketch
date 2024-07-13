function generateSketchPad() {
    /*
    INIT container by grabbing reference to sketch pad container
    INIT sketchpad width and sketchpad height to 16 (number of boxes)

    FOR every box within the sketchpad 
        Create the box
        Insert the into the container of the page
    END FOR
    */
    const SKETCHPAD_WIDTH = 16;
    const SKETCHPAD_HEIGHT = 16;

    const sketchContainer = document.querySelector(".sketchContainer");
    let sketchBox = null;

    /*
    TO GET INDEX OF CURRENT ELEMENT 
    {count} = {index of current loop} + {size of current loop}*{count of parent loop}
    
    https://stackoverflow.com/questions/43660757/iteration-counter-for-double-loops
    */

    for (let i = 0; i < SKETCHPAD_WIDTH; i++) {
        for (let k = 0; k < SKETCHPAD_HEIGHT; k++) {
            sketchBox = document.createElement("div");
            sketchBox.setAttribute("id", k + SKETCHPAD_HEIGHT * i);
            sketchContainer.appendChild(sketchBox);
        } 
    }
}



generateSketchPad();

