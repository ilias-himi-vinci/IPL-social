import { isValidEmail } from "../src/emails";

describe("Email validation", () => {
  test("valid email", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
  });

  test("missing @", () => {
    expect(isValidEmail("testexample.com")).toBe(false);
  });

  test("multiple @ characters", () => {
    expect(isValidEmail("test@@example.com")).toBe(false);
  });

  test("missing dot in domain", () => {
    expect(isValidEmail("test@example")).toBe(false);
  });

  test("dot at end of domain", () => {
    expect(isValidEmail("test@example.")).toBe(false);
  });

  test("dot just after @", () => {
    expect(isValidEmail("test@.com")).toBe(false);
  });

  test("contains spaces", () => {
    expect(isValidEmail("test @example.com")).toBe(false);
  });

  test("space at beginning", () => {
    expect(isValidEmail(" test@example.com")).toBe(false);
  });

  test("space at end", () => {
    expect(isValidEmail("test@example.com ")).toBe(false);
  });

  test("no text before @", () => {
    expect(isValidEmail("@example.com")).toBe(false);
  });

  test("no text after @", () => {
    expect(isValidEmail("test@")).toBe(false);
  });

  test("empty string", () => {
    expect(isValidEmail("")).toBe(false);
  });

  test("only @ symbol", () => {
    expect(isValidEmail("@")).toBe(false);
  });
});
