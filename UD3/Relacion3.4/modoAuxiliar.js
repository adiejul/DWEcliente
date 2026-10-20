const filterNumbersGreaterThan = (arNumber, filter) => arNumber.filter(n => n<filter)

const toHackerSpeak= text => text.toLowerCase().replaceAll("a", "4").replaceAll("e", "3").replaceAll("i", "1").replaceAll("o", "0").replaceAll("s", "5")

const getFileExtension = file => file.split(".").at(-1)

const flatArray = ar2D => ar2D.flat()

const removeDuplicates = arDuplicados => [...new Set(arDuplicados)]

const countLetter = (letra, texto) => texto.split(letra).length-1

const removeWords = (str, arWords) => str.split(" ").filter(palabra => !arWords.includes(palabra)).join(" ")