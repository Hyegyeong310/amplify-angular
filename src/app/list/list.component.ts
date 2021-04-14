import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {

  constructor() { }

  public taskList: Task[] = [];

  addTask(){
    const task = {
      title: '',
      description: ''
    };
    this.taskList.push(task)
  }

  removeTask(index: number) {
    if(index > -1) {
      this.taskList = this.taskList.filter((_, idx) => index !== idx);
    }
  }

}
