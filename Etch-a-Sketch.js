const container = document.querySelector('.container');
const size = 20;
const containerWidth = container.clientWidth;
for(let row=0; row<size;row++){
    for(let column=0;column<size;column++){
        const cells = document.createElement('div');
        cells.style.width= containerWidth/size + 'px';
        cells.style.height = containerWidth/size +'px';
        cells.addEventListener('mouseover' , function(e){
            e.target.classList.add('color');
        });
        cells.classList.add('cells');
        container.appendChild(cells);
    }
}
const button = document.querySelector('#adjust');
button.addEventListener('click', function(){
      function newgrid(size){
      container.innerHTML= " ";
      const cellSize = containerWidth/size;
      for(let row=0;row<size ;row++){
        for(let column =0; column< size; column++){
        const newcell = document.createElement('div');
        newcell.style.width= cellSize + 'px';
        newcell.style.height = cellSize +'px';
        newcell.addEventListener('mouseover' , function(e){
            e.target.classList.add('color');
        });
        newcell.classList.add('cells');
        container.appendChild(newcell);
        }
      }
    }
    const grid = prompt("Enter grid size" ,'', '');
    const newSize = parseInt(grid);
    if(grid === null){
        alert('invalid input');
    }
    else if( isNaN(newSize)){
        alert('Invalid size');
    }
    else if(newSize >= 1 && newSize <=100){
        newgrid(newSize);
    }
    else if(newSize <1 || newSize > 100){
        alert('number is out of scale');
    }
})
  
