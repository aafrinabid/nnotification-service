import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(TasksRepository)
        private readonly tasksRepository: TasksRepository
    ) { }

    async fetchAllPendingTasks(date: Date): Promise<Task[]> {
        try {
            return await this.tasksRepository.FetchAllPendingTasks(date)
        } catch (e) {
            console.log(e)
        }
    }

    async updateEmailSentTastus(id: number): Promise<boolean> {
        try {
            return await this.tasksRepository.UpdateEmailSentStatus(id)
        } catch (e) {
            console.log(e)
        }
    }
}
