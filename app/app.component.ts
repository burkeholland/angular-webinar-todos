import {Component} from "@angular/core";
import {Todo, TodoStore} from "./services/todo";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
    selector: "my-app",
    templateUrl: "app.html",
    styleUrls: ['app-common.css', 'app.css'],
    providers: [TodoStore]
})
export class AppComponent {
    public todoStore: TodoStore;
    public newTodoText: string = '';
    
    constructor(_todoStore: TodoStore) {
        this.todoStore = _todoStore;
        console.log(JSON.stringify(this.todoStore))
    }
    
    addTodo() {
        this.todoStore.add(this.newTodoText);
        console.log(this.newTodoText);
        this.newTodoText = "";       
    }
    
    toggleCompletion(todo: Todo) {
        this.todoStore.toggleCompletion(todo);
    }

    remove(event, todo: Todo) {
        if (event.object.android) {
            setTimeout(() => {
                this.todoStore.remove(todo);
            }, 500);
        } else {
            this.todoStore.remove(todo);
        }
    }
}