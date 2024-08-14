import { sum } from "../sum";

describe("Sum function should calculate the sum of two numbers", () => {
  it("should calculate the sum", () => { 
    const result = sum(3, 4);

    //Assertion
    expect(result).toBe(7);  
  })
});
