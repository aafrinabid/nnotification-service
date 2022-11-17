import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
    fetchAllPendingTasks(): Promise<Task[]>{
        return TaskRepository.fetchAllPendingTasks()
    }

    async updateEmailSentTastus(id:number) :Promise<boolean>{
        try{
            return TaskRepository.updateEmailSentStatus(id)
        }catch(e){
            console.log(e)
        }
    }
}
