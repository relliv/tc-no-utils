export interface ITcNoValidate {
  isValid: boolean
  message: string | null
}

export class TcNoValidate {
  /**
   * Validates a TC number programmatically
   */
  public static validate(value: string): ITcNoValidate {
    var result = <ITcNoValidate>{
      isValid: true,
      message: null
    }

    // prevent ui-mask masks
    value = value.replace(/\D/g, "")

    if (!value || value.length === 0) {
      result = {
        isValid: false,
        message: "Tc Kimlik No boş olamaz."
      }
    }

    if (value.length > 0 && value.length !== 11) {
      result = {
        isValid: false,
        message: "TC Kimlik No 11 karakter olmalıdır."
      }
    }

    if (value.length > 9) {
      if (this.tenthValue(value) != value[10]) {
        result = {
          isValid: false,
          message: "Geçerli bir TC Kimlik No giriniz. 10. karakter hatalı."
        }
      }
    }

    if (value.length === 11) {
      if (this.getLastChar(value) !== value[10]) {
        result = {
          isValid: false,
          message: "Geçerli bir TC Kimlik No giriniz. Son karakter hatalı."
        }
      }
    }

    if (value[0] === "0") {
      result = {
        isValid: false,
        message: "TC Kimlik Numarasının ilk karakteri 0 (Sıfır) olamaz."
      }
    }

    return result
  }

  private static getLastChar(val: string): string {
    var tpl = 0

    for (var i = 0; i < 10; i++) {
      tpl += parseInt(val[i])
    }

    var tplStr = String(tpl),
      tplLen = tplStr.length,
      tplLastChar = tplStr[tplLen - 1]

    return tplLastChar
  }

  private static tenthValue(val: string): string {
    var returnValue,
      tckn = val.substring(0, 9)

    var oddNumberTotal = 0,
      evenNumberTotal = 0

    var tenthValue: string = tckn
      .split("")
      .reduce((_previousValue: any, currentValue: any, currentIndex: any, _array: any) => {
        // 1,3,5,7,9
        if (currentIndex % 2 == 0) {
          oddNumberTotal = Number(oddNumberTotal) + parseInt(currentValue)
        } // 2,4,6,8
        else {
          evenNumberTotal = Number(evenNumberTotal) + parseInt(currentValue)
        }

        if ((oddNumberTotal * 7 - evenNumberTotal) % 10 < 0) {
          returnValue = ((oddNumberTotal * 7 - evenNumberTotal) % 10) + 10
        } else {
          returnValue = (oddNumberTotal * 7 - evenNumberTotal) % 10
        }

        return returnValue.toString()
      }, 0)

    return tenthValue
  }
}
