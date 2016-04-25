import {Component} from "angular2/core";
import {Todo, TodoStore} from "./services/todo";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
    selector: "my-app",
    templateUrl: "app.html",
    styleUrls: ['app-common.css', 'app.css'],
    providers: [TodoStore],
    directives: [FooterComponent]
})
export class AppComponent {
    public todoStore: TodoStore
    public newTodoText: string = '';
    
    constructor(_todoStore: TodoStore) {
        this.todoStore = _todoStore;
    }
    
    addTodo() {
        this.todoStore.add(this.newTodoText);
        this.newTodoText = "";       
    }
    
    toggleCompletion(todo: Todo) {
        this.todoStore.toggleCompletion(todo);
    }

    remove(todo: Todo) {
        this.todoStore.remove(todo);
    }
}