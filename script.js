//define grid height/width and canvas table
const canvas=document.querySelector('.grid-canvas');
const gridSize=document.querySelector('.grid-size');

function makeGrid(){
    let height =document.querySelector('.input-height').value;
    let width = document.querySelector('.input-width').value;

    // after grid is presented, need to remove any cells
    //remove all children from canvas so if makeGrid gets called again it cleans the canvas
    while(canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
    }

    // to create row & cells
    for (let i=1; i<=height; i++){
        let gridRow=document.createElement('tr');
        canvas.appendChild(gridRow);

        for (let j=1; j<=width; j++){
            let gridCell=document.createElement('td');
            gridRow.appendChild(gridCell);
            // fills in cell with selected color
            gridCell.addEventListener('mousedown',function(){
                // color defined here
                const color = document.querySelector('.color-picker').value;
                this.style.backgroundColor = color;
            })
        }
    }
}
            
// when user submitting height and width selections, callback function
gridSize.addEventListener('submit',function(e){
    e.preventDefault();
    makeGrid();
});


// To make the paint dragging
let down=false;
canvas.addEventListener('mousedown',function(e){
    down=true;
    canvas.addEventListener('mouseup', function(){
        down=false;
    });
    // cells won't be colored if grid is left while 
    // pointer is held down
    canvas.addEventListener('mouseleave', function(){
        down=false;
    });

    canvas.addEventListener('mouseover', function(e){
        const color= document.querySelector('.color-picker').value;
        if (down){
            if(e.target.tagName=== 'TD'){
                e.target.style.backgroundColor=color;
            }
        }
    });
});


makeGrid(18,18);


