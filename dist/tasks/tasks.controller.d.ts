import { TasksService } from './tasks.service';
import { Task } from './task.entity';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAll(): Promise<Task[]>;
    create(task: Task): Promise<Task>;
    remove(id: string): Promise<void>;
}
