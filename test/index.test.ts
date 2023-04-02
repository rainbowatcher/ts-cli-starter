import { test } from "uvu"
import * as assert from "uvu/assert"
import { sum } from "../src/index"

test("test sum", () => {
  assert.is(sum(1, 1), 2)
})

test.run()