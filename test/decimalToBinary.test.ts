import { decimalToBinary } from '../app/decimalToBinary'; 

describe('decimalToBinary', () => {
  it('should convert positive decimal to binary correctly', () => {
    const testCases: [number, string][] = [
      [0, '0'],
      [1, '1'],
      [2, '10'],
      [42, '101010'],
      [255, '11111111'],
      [16, '10000'],
    ];

    testCases.forEach(([decimal, binary]) => {
      expect(decimalToBinary(decimal)).toEqual(binary);
    });
  });

  it('should convert negative decimal to binary correctly', () => {
    const testCases: [number, string][] = [
      [-1, '1'],
      [-2, '10'],
      [-42, '101010'],
      [-255, '11111111'],
      [-16, '10000'],
    ];

    testCases.forEach(([decimal, binary]) => {
      expect(decimalToBinary(decimal)).toEqual(binary);
    });
  });
});