import {sum} from "./sum";

describe("sum", function () {
    test("positive", () => {
        expect(sum(2, 2)).toBe(4)
    })

    test("negative", () => {
        expect(sum(-2, -2)).toBe(-4)
    })
})