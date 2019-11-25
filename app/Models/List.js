import { generateId } from "../utils.js";
import Task from "./Tasks.js";
export default class List {
  constructor({ id = generateId(), name, tasks = [] }) {
    this.id = id;
    this.name = name;
    this.tasks = tasks.map(s => new Task(s));
  }
  get template() {
    /*html*/
    return ` 
    <div class="col-12 mt-3 pt-3 border bg-info">
      <h5 class="text-center border-bottom">${this.name}</h5>
      <dl  class="ml-5">${this.drawTasks()}</dl>

      <form onsubmit="app.listController.addTask(event,'${this.id}')">
        <div class="row form-group  justify-content-center">
          
          <div class="col-sm-1-6">
            <input
              type="text"
              class="form-control"
              name="name"
              id="name"
              placeholder="Tasks..."
            />
          </div>
        </div>
        <div class="form-group row justify-content-center">
          <div class="col-sm-8">
            <button type="submit" class="btn btn-warning btn-block">
              Add Task
            </button>
          </div>
          <button
            class="btn btn-danger mt-1"
            type="button"
            onclick="app.listController.deleteList('${this.id}')"
          >
            Remove List
          </button>
        </div>
      </form>
    </div>
    `;
  }
  drawTasks() {
    let template = "";
    this.tasks.forEach(Task => {
      template += Task.templateTask;
    });
    return template;
  }

  //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)

  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
