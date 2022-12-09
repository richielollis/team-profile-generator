const Intern = require("../lib/Intern");

test("creates an intern object and assures all properties are appropriately labeled", () => {
  const intern = new Intern("name", 1, "email", "school");

  expect(intern.name).toBe("name");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toBe("email");
  expect(intern.school).toBe("school");
});
