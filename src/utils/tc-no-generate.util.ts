import { TcNoValidate } from "./tc-no-validate.util"

class TcNoGenerate {
  /**
   * Generates a random TC number programmatically
   */
  public static generate(attempts: number = 1000): string | null {
    let tcArray: number[] = []

    // İlk 9 rakamı rastgele oluştur
    for (let i = 0; i < 9; i++) {
      tcArray.push(Math.floor(Math.random() * 10))
    }

    // İlk 10 rakamın toplamıyla 11. rakamı belirle
    let sumOfFirstNineDigits = tcArray.reduce((acc, curr) => acc + curr, 0)
    let tenthDigit = sumOfFirstNineDigits % 10

    // İlk 10 rakamı topla
    let sumOfFirstTenDigits = sumOfFirstNineDigits + tenthDigit

    // 11. rakamı hesapla
    let eleventhDigit = sumOfFirstTenDigits % 10

    // Sonucu birleştir
    let tcNumber: any = tcArray.join("") + tenthDigit.toString() + eleventhDigit.toString()

    while (!TcNoValidate.validate(tcNumber).isValid && attempts > 0) {
      tcNumber = TcNoGenerate.generate(attempts - 1)
      attempts--
    }

    return TcNoValidate.validate(tcNumber).isValid ? tcNumber : null
  }
}

export { TcNoGenerate }
