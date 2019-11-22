import { generateId } from "../utils.js";

export default class Task {
  constructor({ id = generateId(), name }) {
    this.id = id;
    this.name = name;
  }
  get template() {
    return `
            <dt>${this.name}</dt>
           
            <button class="btn btn-danger" type="button" onclick="app.sessionsController.deleteSpeaker('${this.id}','${this.id}')">Delete</button>
  `;
  }
}
