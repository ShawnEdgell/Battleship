export const ShipFactory = (length: number) => {
    const hits = new Array(length).fill(false);
  
    const hit = (position: number) => {
      if (position < 0 || position >= length) {
        throw new Error('Hit position out of the ship bounds.');
      }
      hits[position] = true;
    };
  
    const isSunk = () => {
      return hits.every(hit => hit);
    };
  
    return { length, hits, hit, isSunk };
  };