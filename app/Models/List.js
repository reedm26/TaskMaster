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
    <div class="col-5 mt-3 p-3 border rounded bg-info">
    <h5 class="text-center border-bottom">${this.name}</h5>
    <form class="mx-auto" onsubmit="app.sessionsController.addList(event, '${this.id}')">
                  <div class="row form-group justify-content-center">
                      <label for="name" class="col-12 col-form-label"></label>
                      <div class="col-sm-1-12">
                          <input type="text" class="form-control" name="name"
                           placeholder="Task.."/>
                           <button class="btn btn-warning mt-1" onclick="">Add Task</button>
                           <button class="btn btn-danger mt-1" onclick="">Remove List</button>
                      </div>
                  </div>
                  </div>
`;
  }

  //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)

  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
