import * as mongoose from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from '../schemas/task.schema';
export declare class TasksService {
    private taskModel;
    constructor(taskModel: mongoose.Model<Task>);
    create(createTaskDto: CreateTaskDto): Promise<mongoose.Document<unknown, {}, Task> & Task & {
        _id: mongoose.Types.ObjectId;
    }>;
    findAll(userId: any): Promise<(mongoose.Document<unknown, {}, Task> & Task & {
        _id: mongoose.Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<mongoose.Document<unknown, {}, Task> & Task & {
        _id: mongoose.Types.ObjectId;
    }>;
    findAllByStatus(userId: string, status: string): Promise<(mongoose.Document<unknown, {}, Task> & Task & {
        _id: mongoose.Types.ObjectId;
    })[]>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<mongoose.Document<unknown, {}, Task> & Task & {
        _id: mongoose.Types.ObjectId;
    }>;
    remove(id: string): Promise<mongoose.Document<unknown, {}, Task> & Task & {
        _id: mongoose.Types.ObjectId;
    }>;
}
