import { Gameboard, Ship } from './Gameboard';

describe('Gameboard', () => {
  let gameboard: Gameboard;
  let destroyer: Ship;
  let submarine: Ship;

  beforeEach(() => {
    gameboard = new Gameboard(10);
    destroyer = new Ship(3);
    submarine = new Ship(2);
    gameboard.addShip(destroyer, [1, 2, 3]);
    gameboard.addShip(submarine, [4, 5]);
  });

  test('should correctly report a hit on a ship', () => {
    gameboard.receiveAttack(1);
    expect(destroyer.hits).toBe(1);
  });

  test('should correctly report a miss', () => {
    gameboard.receiveAttack(0);
    expect(gameboard.misses.includes(0)).toBeTruthy();
  });

  test('should sink a ship if all its positions are hit', () => {
    gameboard.receiveAttack(1);
    gameboard.receiveAttack(2);
    gameboard.receiveAttack(3);
    expect(destroyer.isSunk()).toBeTruthy();
  });

  test('should report all ships sunk', () => {
    gameboard.receiveAttack(1);
    gameboard.receiveAttack(2);
    gameboard.receiveAttack(3);
    gameboard.receiveAttack(4);
    gameboard.receiveAttack(5);
    expect(gameboard.allSunk()).toBeTruthy();
  });
});
