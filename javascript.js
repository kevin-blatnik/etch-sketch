const rows = 16;
const cols = 16;


const etchSketch = {
    containerRef : document.getElementById("container"),

    initContainer : function() {
        let squareDiv = null;

        //Empty Container first?

        for(let i=0; i<rows; i++) {
            for(let j=0; j<cols; j++) {
                squareDiv = document.createElement("div");    
                squareDiv.row = i;
                squareDiv.col = j;
                squareDiv.style.width = "10px";
                squareDiv.style.height = "auto";
                squareDiv.style.border = '4em solid blue'; 
                squareDiv.style.backgroundColor = "green";


                this.containerRef.appendChild(squareDiv);
        }
       } 

    }
}

etchSketch.initContainer();