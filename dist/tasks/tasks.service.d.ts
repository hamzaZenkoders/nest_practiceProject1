import { Repository } from 'typeorm';
import { Task } from './task.entity';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: Repository<Task>);
    findAll(): Promise<Task[]>;
    create(task: Task): Promise<Task>;
    remove(id: string): Promise<void>;
}
