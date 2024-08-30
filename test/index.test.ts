import { describe, expect, it } from "vitest"
import { sum } from "../src/util"

describe("sum", () => {
    it("sum", () => {
        expect(sum(1, 1)).toBe(2)
    })
})
