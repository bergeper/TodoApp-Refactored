// class for each object in list
export class Todo {
  constructor(public task: string, public completed: boolean) {
    this.task = task;
    this.completed = completed;
  }
}
