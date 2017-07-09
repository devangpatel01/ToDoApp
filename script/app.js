var app = angular.module("todoApp", []);
app.controller("TodoCtrl", TodoCtrl);

function TodoCtrl() {
    this.editMode = false;
    this.todolist = [
        "Learning AngularJs",
        "Its fun",
    ];


    this.addNewItem = function() {
        this.todolist.push(this.newTodoItem);
        this.newTodoItem = "";
    }


    this.triggerEditMode = function() {
        this.editMode = !this.editMode;
    }


    this.deleteTodo = function(index) {
        this.todolist.splice(index, 1);

    }
}