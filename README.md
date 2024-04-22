# tc-no-utils

This project contains simple utilities for form input validation and testing.

> [!WARNING]
> These utilities do not provide UI components or KPS (NVI validation API) validation.

## [Play on StackBlitz ⚡️](https://stackblitz.com/~/github.com/relliv/tc-no-utils)

## 📦 Installation

```bash
#PNPM
pnpm i @relliv/tc-no-utils

or
NPM
npm i @relliv/tc-no-utils
```

## 🚀 Usage

### Generate

```ts
import { TcNoGenerate } from "@relliv/tc-no-utils"

const tcNo = TcNoGenerate.generate()
```

### Validate

```ts
import { TcNoValidate } from "@relliv/tc-no-utils"

const tcNo = "11111111111",
    result = TcNoValidate.validate(tcNo)

if (result.isValid) {
    console.log("TC No is valid")
} else {
    console.log(result.message)
}
```