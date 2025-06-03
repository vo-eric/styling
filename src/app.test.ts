import { describe, test, expect } from 'vitest';
import { createHeatGrid } from './data';

describe('createHeatGrid() should work', () => {
  const grid = createHeatGrid();
  test('should create an array of length 35', () => {
    expect(grid.length).toBe(35);
  });

  test('should create an array of numbers rounded numbers', () => {
    for (const box of grid) {
      expect(box % 100).toBe(0);
    }
  });
});
