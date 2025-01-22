const generatePoem = (event) => {
  event.preventDefault()

  new Typewriter("#poem", {
    strings: "Hello Kamila",
    delay: 1,
    autoStart: true,
    cursor: "",
  })
}

let poemGenerator = document.querySelector("#generator-form")
poemGenerator.addEventListener("submit", generatePoem)
