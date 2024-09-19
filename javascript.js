const rows = 16;
const cols = 16;


const etchSketch = {
    containerRef : document.getElementById("container"),

    addGrid : function() {
        let squareDiv = null;

        //Empty Container first?

        for(let i=0; i<rows; i++) {
            for(let j=0; j<cols; j++) {
                squareDiv = document.createElement("div");   
                squareDiv.id = 'gridBox' + i + "-" + j; 
                squareDiv.row = i;
                squareDiv.col = j;
                squareDiv.style.width = '6vh';
                squareDiv.style.height = '6vh'; //to make square
                //squareDiv.style.border = '4em solid gray'; 
                squareDiv.style.backgroundColor = "gray";
                squareDiv.innerText = '.';


                this.containerRef.appendChild(squareDiv);
           }
        }
    },
    addHover : function() {
        this.containerRef.addEventListener('mouseover', ev => {
            console.log(ev.target);
            const targeted = document.getElementById(ev.target.id);
            
            console.log(targeted);
            if ( targeted !== null ) {
                targeted.style.backgroundColor = "black";
            }
        })
    }
}

etchSketch.addGrid();
etchSketch.addHover();