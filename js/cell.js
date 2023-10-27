export class Cell {
  constructor(gridElement, x, y) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gridElement.append(cell);
    // gridElement.insertAdjacentHTML('beforeend', '<div class="cell"></div>');
    this.x = x;
    this.y = y;
  }
}