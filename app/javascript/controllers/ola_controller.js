import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "texto" ]
  static values = {
    nome: String
  }

  mudarTexto(event) {
    this.textoTarget.textContent = `olá, ${event.target.value}`
    console.log(this.nomeValue)
    console.log(event.target.value);
  }
}
