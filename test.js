const browserslist = require("browserslist");
const config = require(".");

beforeEach(() => {
  jest.resetModules();
});

it("should export an array", () => {
  expect(Array.isArray(config)).toBe(true);
});

it("should contain certain browsers", () => {
  const result = browserslist(config);
  console.log(result.join('\n'));
  expect(result).toBeTruthy();
  // sad story
  expect(result).toContain('ie 10');
  expect(result).toContain('chrome 28');
});
