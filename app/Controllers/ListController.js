import ListService from "../Services/ListService.js";
import store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let listTemplate = "";
  store.Lists.forEach(list => (listTemplate += list.template));
  document.querySelector("#list").innerHTML = listTemplate;
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }
  addList(event) {
    event.preventDefault();
    let form = event.target;
    let newList = {
      name: form.name.value
    };
    ListService.addList(newList);
    form.reset();
    _drawLists();
  }
  addTask(event, listId) {
    event.preventDefault();
    console.log("made it");
    let form = event.target;
    let newTask = {
      name: form.name.value,
      listId
    };

    ListService.addTask(newTask);
    form.reset();
    debugger;
    _drawLists();
  }
  deleteList(listId) {
    ListService.deleteList(listId);
    _drawLists();
  }
  deleteTask(listId, taskId) {
    ListService.deleteTask(listId, taskId);
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
