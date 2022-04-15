const { describe, it, expect } = require("@jest/globals");
const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  const name = "Jackson";
  const id = 5;
  const email = "jackson@gmail.com";
  const officeNumber = 32;
  const role = "Manager";

  const manager = new Manager(name, id, email, officeNumber)

  it("Should return Manager name", () => {
    expect(manager.getManagerName()).toBe(name);
  });

  it("Should return Manager office number", () => {
    expect(manager.officeNumber()).toBe(officeNumber);
  });

  it("Should return Manager id", () => {
    expect(manager.getManagerId()).toBe(id);
  });

  it("Should return Manager email", () => {
    expect(manager.getManagerEmail()).toBe(email);
  });

  it("Should return Manager role", () => {
    expect(manager.getManagerRole()).toBe(role);
  });
});