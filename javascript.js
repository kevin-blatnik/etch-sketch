
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
                this.containerRef.appendChild(squareDiv);
                squareDiv.id = 'gridBox' + i + "-"+ j; 
                squareDiv.row = i;
                squareDiv.col = j;
                
                squareDiv.style.width = (640/rows) + 'px';
                squareDiv.style.height = (640/cols) + 'px'; //to make square

                //grows to fill "extra space from flex wrap"
                squareDiv.flexBasis =(640/rows) + 'px';
                squareDiv.flexGrow = 1;
                
                //squareDiv.style.border = '4em solid gray'; 
                squareDiv.style.backgroundColor = "black";
                if(squareDiv.style.opacity !== 1)
                    squareDiv.style.opacity = 0;


           }
        }
    },
    addHover : function() {
        this.containerRef.addEventListener('mouseover', ev => {
            const targeted = document.getElementById(ev.target.id);
            
            if ( targeted !== null ) {
                temp = Number(targeted.style.opacity) + 0.1;
                targeted.style.opacity = temp;
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
                size = Math.floor(size);
                this.addGrid(size,size);
            }
        });
    }

}

//main
etchSketch.addGrid(16,16);
etchSketch.addHover();
etchSketch.addResizeListener();