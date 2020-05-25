
import { of, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { ITask } from '../../../../__shared__/model/task';
import { TaskService } from '../../services/task-service/task.service';

@Injectable()
export class TaskResolver implements Resolve<ITask> {

  constructor(
    private taskService: TaskService,
    private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITask> {
    let id = route.params['id'];

    if (!id || id==="new") {
      let emptyTask = <ITask>{ id: 0 };
      id = 0;
    }

    if (isNaN(id)) {
      console.warn(`Task id is not a number:${id}`);
      this.router.navigate(['/tasks']);
      return of(null);
    }

    return this.taskService.findTask(+id)
      .pipe(
        map(task => {
          if (task) {
            return task;
          }
          console.log(`task was not found ${id}`);
          this.router.navigate(['/tasks']);
          return null;
        }),

        catchError(error => {
          console.warn(`Server erro retriving ${error}`);
          this.router.navigate(['/tasks']);
          return of(null);
        }));

  }

}
