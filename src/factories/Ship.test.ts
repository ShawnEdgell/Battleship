import { ShipFactory } from './Ship';

describe('Ship Factory Function', () => {
  test('creates a ship with the correct length', () => {
    const destroyer = ShipFactory(2);
    expect(destroyer.length).toBe(2);
  });

  test('registers hits correctly', () => {
    const cruiser = ShipFactory(3);
    cruiser.hit(0);
    cruiser.hit(2);
    expect(cruiser.hits).toEqual([true, false, true]);
  });

  test('reports if it is not sunk initially', () => {
    const battleship = ShipFactory(4);
    expect(battleship.isSunk()).toBe(false);
  });

  test('sinks when all positions are hit', () => {
    const submarine = ShipFactory(3);
    submarine.hit(0);
    submarine.hit(1);
    submarine.hit(2);
    expect(submarine.isSunk()).toBe(true);
  });

  test('throws error when trying to hit out of bounds', () => {
    const patrolBoat = ShipFactory(2);
    expect(() => patrolBoat.hit(2)).toThrow('Hit position out of the ship bounds.');
  });
});
