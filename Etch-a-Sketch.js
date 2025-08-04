//const { createElement } = require("react");
  const container = document.querySelector('.container');
  const size = 16;
  const containerWidth = 500;
for(let row=0; row<size;row++){
    for(let column=0;column<size;column++){
        const cells = document.createElement('div');
        cells.style.width= 'containerWidth/size px';
        cells.style.height = 'containerWidth/size px';
        cells.classList.add('cell');
        container.appendChild(cells);
    }
}
