const hexInput = document.getElementById('hexInput')
const inputColor = document.getElementById('inputColor')

hexInput.addEventListener('keyup', () => {
    const hex = hexInput.value

    if(!isValidHex(hex)) return
    
    const strippedHex = hex.replace('#', '')
    
    inputColor.style.backgroundColor = "#" + strippedHex
})

const isValidHex = (hex) => {

    if (!hex) return false
    
    const strippedHex = hex.replace("#", "")

    return strippedHex.length === 3 || strippedHex.length === 6
}

const convertHexToRGB = (hex) => {
    if (!isValidHex(hex)) return null
    
    let strippedHex = hex.replace("#", "")
    
    if (strippedHex.length === 3) {
        strippedHex = strippedHex[0] + strippedHex[0] + strippedHex[1] + strippedHex[1] + strippedHex[2] + strippedHex[2]
    }
    
    const r = parseInt(strippedHex.substring(0,2), 16)
    const g = parseInt(strippedHex.substring(2,4), 16)
    const b = parseInt(strippedHex.substring(4,6), 16)
    
    return { r, g, b }
    }