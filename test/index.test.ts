import { expect, test } from "vitest"
import { sum } from "../src/util"

test("test sum", () => {
    expect(sum(1, 1)).toEqual(2)
})
