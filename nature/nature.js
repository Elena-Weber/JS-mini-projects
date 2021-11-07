const videoplayer = document.querySelector("#videoplayer > source")
const rain = document.querySelector(".rain")
const waves = document.querySelector(".waves")
const forest = document.querySelector(".forest")

rain.addEventListener("click", () => {
    console.log(videoplayer.src)
    videoplayer.setAttribute('src', "https://player.vimeo.com/external/586995619.hd.mp4?s=ad40aaf144b40ecb469c27fda8b65226c147ab82&profile_id=174")
})

waves.addEventListener("click", () => {
    console.log("waves")
})

forest.addEventListener("click", () => {
    console.log("forest")
})