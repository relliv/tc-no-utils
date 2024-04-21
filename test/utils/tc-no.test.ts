import { TcNoValidate } from "../../src/utils/tc-no-validate.util"
import { TcNoGenerate } from "../../src/utils/tc-no-generate.util"

test("generate valid tc no", () => {
  const tcNo = TcNoGenerate.generate(),
    result = tcNo ? TcNoValidate.validate(tcNo) : null

  expect(true).toBe(result?.isValid)
})

test("generate invalid tc no", () => {
  const tcNo = "11111111111",
    result = TcNoValidate.validate(tcNo)

  expect(false).toBe(result?.isValid)
})
