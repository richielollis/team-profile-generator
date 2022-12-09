const Engineer = require("../lib/Engineer");

test("creates an engineer object and assures all properties are appropriately labeled", () => {
  const engineer = new Engineer("name", 1, "email", "github");

  expect(engineer.name).toBe("name");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toBe("email");
  expect(engineer.github).toBe("github");
});
