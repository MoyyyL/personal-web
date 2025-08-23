import { typing } from "/script"

test('iterates correctly the characters', () => {
    expect(typing("hello").toBe(["h","e","l","l","o"]))
})