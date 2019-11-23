import List from "../Models/List.js";
import store from "../store.js";
import Task from "../Models/Tasks.js";
//Public
class ListService {
  addList(newList) {
    let lists = new List(newList);

    store.State.lists.push(lists);

    console.log(newList);
    console.log(lists);
    store.saveState();
  }
  addTask(newTask) {
    let task = new Task(newTask);
    let foundlist = store.State.lists.find(list => list.id == task.listId);
    foundlist.task.push(task);
    console.log(store.State.lists);
    store.saveState();
    // find the list by its id then add this task (push) to that list
    // store.State.lists.push(task);
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
