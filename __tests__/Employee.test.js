const Employee = require("../lib/Employee");

test("creates an employee object and assures all properties are appropriately labeled", () => {
  const employee = new Employee("name", 1, "email");

  expect(employee.name).toBe("name");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe("email");
});
