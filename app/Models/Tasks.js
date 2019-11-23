import { generateId } from "../utils.js";

export default class Task {
  constructor({ id = generateId(), name, listId }) {
    this.id = id;
    this.name = name;
    this.listId = listId;
  }
  get template() {
    /*html*/
    return `
          <div>
            <p>${this.name}</p>
            <button class="btn btn-danger" type="button" onclick="app.ListController.deleteTask('${this.id}','${this.id}')">Delete</button>
            </div>
  `;
  }
}
