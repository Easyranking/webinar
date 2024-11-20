import { addUp, dataFN, name, zero } from "../webinar";

describe("Testing all Functions", () => {
  //arrange
  test("To add two number", () => {
    //affirm
    let add = addUp(1, 3);
    //Assert
    expect(add).toBe(4);
  });

  test("to get zero as result", () => {
    let result = zero(8);

    expect(result).toBe(0);
    expect(result).not.toBeTruthy();
    expect(result).toBeFalsy();
    expect(result).not.toBeNull();
    expect(result).not.toBeNaN();
  });

  test("To return name", () => {
    let colleagueName = name("sistus");

    expect(colleagueName).toBe("sistus");
  });

  test("to reverse a number", () => {
    let number = 674;
    let math = dataFN(number);

    expect(math).toBe(476);
  });
});
