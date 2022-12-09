const Manager = require("../lib/Manager");

test("creates an intern object and assures all properties are appropriately labeled", () => {
  const manager = new Manager("name", 1, "email", 1);

  expect(manager.name).toBe("name");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toBe("email");
  expect(manager.officeNumber).toEqual(expect.any(Number));
});
