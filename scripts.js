function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar1.jpg")
    img.setAttribute('alt',"Foto de um homem na cidade.")
  } else {
    img.setAttribute("src", "./assets/avatar1.jpg")
    img.setAttribute(
      "alt",
      "Foto de homem com cabelo liso, usando uma camisa preta."
    )
  }
}