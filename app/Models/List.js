import { generateId } from "../utils.js";
import Task from "./Tasks.js";
export default class List {
  constructor({ id = generateId(), name, tasks = [] }) {
    this.id = id;
    this.name = name;
    this.task = tasks.map(s => new Task(s));
  }
  get template() {
    /*html*/
    return ` 
    <div class="col-6 mt-3 pt-3 border  bg-info">
      <h5 class="text-center border-bottom">${this.name}</h5>
      <dl class="ml-5">${this.drawTasks()}</dl>
      <form  onsubmit="app.listController.addTask(event,'${this.id}')">
            <label for="name" class="col-6-form-label">
            <input type="text" class="form-control" name="name" placeholder="Task.."/>
            <button type="submit" class="btn btn-warning mt-1" onclick="app.listController.addTask(event, listId)">Add Task</button>
            <button class="btn btn-danger mt-1" type="button" onclick="app.listController.deleteList('${
              this.id
            }')">Remove List</button>
           </label>
      </form>
    </div>`;
  }
  drawTasks() {
    let template = "";
    this.task.forEach(tasks => (template += tasks.template));
    return template;
  }

  //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)

  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
