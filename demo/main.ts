import { TcNoGenerate, TcNoValidate } from "./../src/index"

import ClipboardJS from "clipboard"
import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"

const h1 = document.querySelector("h1"),
  button = document.querySelector("button"),
  input = document.querySelector("input"),
  p = document.querySelector("p")

// #region Tc No Generation

const generateTcNo = (): void => {
  const tcNo = TcNoGenerate.generate()

  if (h1 && tcNo) {
    h1.textContent = tcNo
  }

  if (button && tcNo) {
    button.setAttribute("data-clipboard-text", tcNo)
  }
}

generateTcNo()

button?.addEventListener("click", () => {
  generateTcNo()
})

const clipboard = new ClipboardJS("button")

clipboard.on("success", () => {
  Toastify({
    text: "copied to clipboard",
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: false, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)"
    }
  }).showToast()
})

// #endregion

// #region Tc No Validation

input?.addEventListener("input", () => {
  const tcNo = input.value

  const result = TcNoValidate.validate(tcNo)

  if (p) {
    p.textContent = !result.isValid ? result.message : "Geçerli"
  }
})

// #endregion
