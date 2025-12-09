const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe("capitalizeWords", () => {

   test("capitalizes each word in a normal sentence", () =>  {
        expect(capitalizeWords("hello world")).toBe("Hello World");

    });

    test("return an empty string when input is empty", () => {
        expect(capitalizeWords("")).toBe("");
    });

    test("handle string with special characters like hyphens", () => {
        expect(capitalizeWords("hello-world")).toBe("Hello-World");

    });

    test("capitalizes a single word", () => {
        expect(capitalizeWords("javascript")).toBe("Javascript");

    });

})
// ---filterActiveUsers tests---
describe("filterActiveUsers", () => {
     
    test("correctly filters active users from a mixed array", () => {
        const users = [
            { name: "Alice", isActive: true },
            { name: "Bob", isActive: false }
        ];

        expect(filterActiveUsers(users)).toEqual([
            { name: "Alice", isActive: true }
        ]);
    });

    test("returns an empty array when all users are inactive", () => {
        const users = [
            { name: "Alice", isActive: false },
            { name: "Bob", isActive: false }
        ];

        expect(filterActiveUsers(users)).toEqual([]);
    });

    test("returns an empty array for an empty input array", () => {
        expect(filterActiveUsers([])).toEqual([]);
    });

});
describe("logAction", () => {

    beforeAll(() => {
        jest.spyOn(Date.prototype, "toISOString")
            .mockReturnValue("2024-11-27T12:00:00Z");
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

    test("generates correct log string for valid inputs", () => {
        expect(logAction("login", "Alice")).toBe(
            "User Alice performed login at 2024-11-27T12:00:00Z"
        );
    });

    test("return error message when action is missing", () => {
        expect(logAction("", "Alice")).toBe("invalid input");
        expect(logAction(undefined, "Alice")).toBe("invalid input");
    });

    test("return error message when username is missing", () => {
        expect(logAction("login", "")).toBe("invalid input");
        expect(logAction("login", undefined)).toBe("invalid input");
    });

    test("return error message when both inputs are missing", () => {
        expect(logAction("", "")).toBe("invalid input");
    });
});
