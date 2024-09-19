
const etchSketch = {
    containerRef : document.getElementById("container"),
    buttonRef : document.getElementById("resizeButton"),
    inputRef : document.getElementById("sizeInput"),
    rows : 16,
    cols : 16,

    addGrid : function(rows,cols) {
        let squareDiv = null;

        //Empty Container first
        this.emptyContainer();

        for(let i=0; i<rows; i++) {
            for(let j=0; j<cols; j++) {
                squareDiv = document.createElement("div");   
                squareDiv.id = 'gridBox' + i + "-"+ j; 
                squareDiv.row = i;
                squareDiv.col = j;
                squareDiv.style.width = Math.round(100/rows) + 'vh';
                squareDiv.style.height = Math.round(100/cols) + 'vh'; //to make square
                //squareDiv.style.border = '4em solid gray'; 
                squareDiv.style.backgroundColor = "gray";
                squareDiv.innerText = '.';


                this.containerRef.appendChild(squareDiv);
           }
        }
    },
    addHover : function() {
        this.containerRef.addEventListener('mouseover', ev => {
            //console.log(ev.target);
            const targeted = document.getElementById(ev.target.id);
            
            //console.log(targeted);
            if ( targeted !== null ) {
                targeted.style.backgroundColor = "black";
            }
        })
    },
    emptyContainer : function() {
        while(this.containerRef.hasChildNodes()) {
            this.containerRef.removeChild(this.containerRef.lastChild);
        }
    },
    addResizeListener : function() {
        this.buttonRef.addEventListener('click', ev => {
            let size = Number(this.inputRef.value);

            if(typeof size === 'number' && size >= 1 && size < 101) {
                console.log("yes");
                size = Math.round(size);
                this.addGrid(size,size);
            }
        });
    }

}

//main
etchSketch.addGrid(16,16);
etchSketch.addHover();
etchSketch.addResizeListener();