import "./styles/preflight.css"
import "./styles/index.css"
import { SelectMokepon } from "./views/SelectMokepon"
import { socketsEvents } from "./features/mokepon/socketsEvents"

const App = document.getElementById("app") as HTMLDivElement

const mainElm = document.createElement("main")

App.appendChild(mainElm)

const mainTitleElm = document.createElement("h1")
mainTitleElm.textContent = "Platzi Mokepon Game"

mainElm.appendChild(mainTitleElm)
mainElm.appendChild(SelectMokepon())

export function changeView(view: HTMLElement) {
  mainElm.innerHTML = ""
  mainElm.appendChild(mainTitleElm)
  mainElm.appendChild(view)
}

socketsEvents()
