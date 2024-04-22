import { TcNoGenerate } from "./../../src/index"

import ClipboardJS from "clipboard"
import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"

const h1 = document.querySelector("h1"),
  button = document.querySelector("button")

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
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)"
    }
  }).showToast()
})
