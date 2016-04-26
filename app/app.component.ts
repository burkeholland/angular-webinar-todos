import {Component} from "angular2/core";
import {Todo, TodoStore} from "./services/todo";
import {FooterComponent} from "./components/footer/footer.component";

var explosion = require("nativescript-explosionfield");

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

    remove(event, todo: Todo) {
        if (event.object.android) {
            explosion.explode(event.object._parent);
            setTimeout(() => {
                this.todoStore.remove(todo);
            }, 500);
        } else {
            this.todoStore.remove(todo);
        }
    }
}