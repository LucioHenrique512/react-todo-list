const todo = require("./todo")
// @ponicode
describe("todo.editTodoArray", () => {
    test("0", () => {
        let param1 = [[-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let callFunction = () => {
            todo.editTodoArray(param1, false, "This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674], ["a", "b", "043", "holasenior"]]
        let callFunction = () => {
            todo.editTodoArray(param1, true, "Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674]]
        let callFunction = () => {
            todo.editTodoArray(param1, false, "foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674], ["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674]]
        let callFunction = () => {
            todo.editTodoArray(param1, false, "foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"], ["a", "b", "043", "holasenior"]]
        let callFunction = () => {
            todo.editTodoArray(param1, true, "This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            todo.editTodoArray(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
