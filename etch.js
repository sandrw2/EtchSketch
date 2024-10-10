function createGrid(n){
    const gridDiv = document.querySelector("#grid");
    for(let i = 0; i<n; i++){
        for(let j = 0; j<n; j++){
            const gridSquare = document.createElement("div");
            gridSquare.style.width = "50px";
            gridSquare.style.height = "50px";
            gridSquare.style.border = "1px solid black"; 
            gridSquare.style.display = "grid";
            gridDiv.appendChild(gridSquare);
        }
    }
}

createGrid(16);