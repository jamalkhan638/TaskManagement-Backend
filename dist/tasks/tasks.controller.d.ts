import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto, req: any): Promise<import("mongoose").Document<unknown, {}, import("../schemas/task.schema").Task> & import("../schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(req: any): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/task.schema").Task> & import("../schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findByStatus(status: string, req: any): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/task.schema").Task> & import("../schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/task.schema").Task> & import("../schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/task.schema").Task> & import("../schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/task.schema").Task> & import("../schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
