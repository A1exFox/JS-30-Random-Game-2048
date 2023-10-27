import { Cell } from "./cell.js";

const GRID_SIZE = 4;
const CELLS_COUNT = GRID_SIZE * GRID_SIZE;

export class Grid {
  constructor(gridElement) {
    this.cells = [];
    for (let i = 0; i < CELLS_COUNT; i++) {
      const x = i % GRID_SIZE;
      const y = Math.floor(i / GRID_SIZE);
      this.cells.push(new Cell(gridElement, x, y));
    }

    this.cellsGroupedByColumn = this.groupCellsByColumn();
  }
  getRandomEmptyCell() {
    const emptyCells = this.cells.filter(cell => cell.isEmpty());
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    return emptyCells[randomIndex];
  }
  groupCellsByColumn() {
    return this.cells.reduce((groupedCells, cell) => {
      groupedCells[cell.x] = groupedCells[cell.x] || [];
      groupedCells[cell.x][cell.y] = cell;
      return groupedCells;
    }, []);
  }
}