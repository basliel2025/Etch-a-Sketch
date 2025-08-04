//const { createElement } = require("react");
  const container = document.querySelector('.container');
  const size = 16;
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

