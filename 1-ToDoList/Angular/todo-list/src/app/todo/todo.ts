import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface TodoList{
  text: string,
  done: boolean
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})

export class Todo {
  newTask = '';
  tasks: TodoList[] = [];

  addTask(){
    if (this.newTask.trim()){
      this.tasks.push({text: this.newTask.trim(), done: false})
      this.newTask = '';
    }
  }

  toggleTask(index: number)
  {
    this.tasks[index].done = !this.tasks[index].done;
  }

  removeTask(index: number)
  {
    this.tasks.splice(index, 1);
  }
}
