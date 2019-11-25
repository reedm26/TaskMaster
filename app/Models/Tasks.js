import { generateId } from "../utils.js";

export default class Task {
  constructor({ id = generateId(), name, listId }) {
    this.id = id;
    this.name = name;
    this.listId = listId;
  }
  get templateTask() {
    /*html*/
    return `<dt>${this.name}</dt>
    <button class="btn btn-danger" type="button" onclick="app.listController.deleteTask('${this.listId}','${this.id}')">Delete</button>
    `;
  }
}
