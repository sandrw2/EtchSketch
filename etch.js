let colorChoice = 'lightGreen';
function createGrid(n){
    const gridDiv = document.querySelector("#grid");
    let isMouseDown = false;

    gridDiv.addEventListener('mousedown', ()=>{
        isMouseDown = true;

    });

    gridDiv.addEventListener('mouseup', ()=> {
        isMouseDown = false;
    });

    for(let i = 0; i<n; i++){
        for(let j = 0; j<n; j++){
            const gridSquare = document.createElement("div");
            gridSquare.className = "grid-square";
            gridDiv.appendChild(gridSquare);
            gridSquare.addEventListener('mouseover', function () {
                if(isMouseDown){
                    gridSquare.style.backgroundColor = colorChoice;
                }
                
            });


        }
    }
}


function createButtons(){
    const buttonDiv = document.querySelector("#buttons");
    let presets = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    for(let i= 0; i<presets.length; i++){
        const colorButton = document.createElement("button");
        colorButton.style["background-color"]= presets[i];
        colorButton.className = "color-button";
        colorButton.addEventListener('click', ()=>{
            colorChoice = presets[i];
        })
        buttonDiv.appendChild(colorButton);
    }
}

function clear(){
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(square => {
        square.style.backgroundColor = ""; // Clear the background color
    });
}

function createDeleteButton(){
    const deleteButton = document.querySelector("#delete");
    deleteButton.addEventListener("click", ()=>{clear();});
}

createGrid(32);
createButtons();
createDeleteButton();