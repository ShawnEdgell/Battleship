export class Ship {
    length: number;
    hits: number = 0;
    position: number[] = [];
  
    constructor(length: number) {
      this.length = length;
    }
  
    hit() {
      this.hits++;
    }
  
    isSunk() {
      return this.hits >= this.length;
    }
  
    place(position: number[]) {
      this.position = position;
    }
  }
  
  export class Gameboard {
    size: number;
    ships: Ship[] = [];
    misses: number[] = [];
  
    constructor(size: number) {
      this.size = size;
    }
  
    addShip(ship: Ship, position: number[]) {
      ship.place(position);
      this.ships.push(ship);
    }
  
    receiveAttack(coord: number) {
      let hit = false;
      for (const ship of this.ships) {
        if (ship.position.includes(coord)) {
          ship.hit();
          hit = true;
          break;
        }
      }
  
      if (!hit) {
        this.misses.push(coord);
      }
    }
  
    allSunk() {
      return this.ships.every(ship => ship.isSunk());
    }
  }
  