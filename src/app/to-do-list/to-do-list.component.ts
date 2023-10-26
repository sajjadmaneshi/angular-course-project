import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
  tasks:string[]=[];
  //tasks:string[] undefined;
  i=0;

  onAddTask() {
    this.i++;
    this.tasks.push('تسک جدید' +this.i);
  }

  onRemoveTask(id: number) {
    const position = id + 1;
    this.tasks.splice(position, 1);
  }
}
