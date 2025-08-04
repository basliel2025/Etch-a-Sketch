const container = document.querySelector('.container');
const size = 20;
const containerWidth = container.clientWidth;
const changeButton = document.createElement('button');
changeButton.textContent = 'ColorType: Normal';
changeButton.id = 'colorChanger';
document.body.insertBefore(changeButton, container.nextSibling);
let colorType = 'current';
for(let row=0; row<size;row++){
    for(let column=0;column<size;column++){
        const cells = document.createElement('div');
        cells.style.width= containerWidth/size + 'px';
        cells.style.height = containerWidth/size +'px';
        cells.addEventListener('mouseover' , function(e){
             if(colorType === 'rainbow'){
                const r= Math.floor(Math.random() * 256);
                const g= Math.floor(Math.random() * 256);
                const b= Math.floor(Math.random() * 256);
                 e.target.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
                e.target.classList.add('color');
             }
              else if(colorType === 'darken'){
                if(!e.target.dataset.hoverCount){
                    e.target.dataset.hoverCount=0;
                }
                if(e.target.dataset.hoverCount<10){
                    e.target.dataset.hoverCount++;
                    const opacity = e.target.dataset.hoverCount*0.1;
                    e.target.style.backgroundColor= 'rgba(0, 0, 0, '+ opacity + ')';
                    e.target.classList.add('color');
                }
            }
            else{
                e.target.classList.add('color');
            }
        });
        cells.classList.add('cells');
        container.appendChild(cells);
    }
}
const button = document.querySelector('#adjust');
button.addEventListener('click', function(){
      function newgrid(size){
      container.innerHTML= " ";
      const cellSize = container.clientWidth/size;
      for(let row=0;row<size ;row++){
        for(let column =0; column< size; column++){
        const newcell = document.createElement('div');
        newcell.style.width= cellSize + 'px';
        newcell.style.height = cellSize +'px';
        newcell.addEventListener('mouseover' , function(e){
            if(colorType === 'rainbow'){
                const r= Math.floor(Math.random() * 256);
                const g= Math.floor(Math.random() * 256);
                const b= Math.floor(Math.random() * 256);
                e.target.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
                e.target.classList.add('color');
            }
            else if(colorType === 'darken'){
                if(!e.target.dataset.hoverCount){
                    e.target.dataset.hoverCount=0;
                }
                if(e.target.dataset.hoverCount<10){
                    e.target.dataset.hoverCount++;
                    const opacity = e.target.dataset.hoverCount*0.1;
                    e.target.style.backgroundColor= 'rgba(0, 0, 0, '+ opacity + ')';
                    e.target.classList.add('color');
                }
            }
            else{
                e.target.classList.add('color');
            }
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
    changeButton.addEventListener('click', function(){
        if(colorType === 'current'){
            colorType = 'rainbow';
            changeButton.textContent = 'ColorType: Rainbow';
        }
        else if(colorType === 'rainbow'){
            colorType = 'darken';
            changeButton.textContent = 'ColorType: Darken';
        }
        else{
            colorType= 'current';
            changeButton.textContent = 'ColorType: Normal';
        }
    });
   