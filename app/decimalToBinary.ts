export function decimalToBinary(decimalNumber: number): string {
  if (decimalNumber === 0) {
    return "0";
  }

  let absoluteValue = Math.abs(decimalNumber);

  let binaryResult = "";
  while (absoluteValue > 0) {
    binaryResult = (absoluteValue % 2) + binaryResult;
    absoluteValue = Math.floor(absoluteValue / 2);
  }

  return binaryResult;
}
