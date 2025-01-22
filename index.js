const displayPoem = (res) => {
  new Typewriter("#poem", {
    strings: res.data.answer,
    delay: 1,
    autoStart: true,
    cursor: "",
  })
}

const generatePoem = (event) => {
  event.preventDefault()
  let userInstructions = document.querySelector("#user-instructions")

  let apiKey = "93b55a8f5451ff836432to73a1c94b02"
  let context =
    "Be sweet, short poems in around 4 lines, split poems lines with <br/> and be sweet"
  let prompt = `Write beautiful poem with the word ${userInstructions.value}`
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

  axios.get(url).then(displayPoem)
}

let poemGenerator = document.querySelector("#generator-form")
poemGenerator.addEventListener("submit", generatePoem)
